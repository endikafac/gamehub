/**
 * scripts/seed-content.js
 * Seeds both educational modules to Firestore.
 *
 * Usage:
 *   node scripts/seed-content.js
 *
 * Requires:
 *   npm install firebase-admin
 *   Set GOOGLE_APPLICATION_CREDENTIALS env var to your service account JSON:
 *   export GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json"
 *
 * Firestore schema created:
 *
 *   /modules/{moduleId}
 *     ├── id, title, icon, lang, description, totalLevels, xpReward
 *     ├── theory  (object)          ← for euskera-nnk
 *     ├── verbs   (array)           ← for english-irregular-verbs
 *     └── vocabulary (array)        ← for euskera-nnk
 *
 *   /modules/{moduleId}/levels/{levelId}
 *     ├── id, type, title, passingScore, maxScore, scoring
 *     └── exercises | rounds | passages | stories  (array)
 *
 *   /users/{userId}/moduleProgress/{moduleId}
 *     ├── moduleId
 *     ├── userId
 *     ├── maxLevelReached   (number, 0 = not started)
 *     ├── totalScore        (number)
 *     ├── xpEarned          (number)
 *     ├── lastPlayed        (timestamp)
 *     ├── completedAt       (timestamp | null)
 *     └── levels: {
 *           "1": { completed, bestScore, stars, attempts, lastAttemptAt },
 *           "2": { ... },
 *           "3": { ... }
 *         }
 *
 *   /users/{userId}/moduleProgress/{moduleId}/attempts/{attemptId}
 *     ├── levelId           (number)
 *     ├── score             (number)
 *     ├── correctAnswers    (number)
 *     ├── totalQuestions    (number)
 *     ├── elapsedSeconds    (number)
 *     ├── answers           (array of { questionId, given, correct, isCorrect })
 *     └── timestamp         (Firestore serverTimestamp)
 */

'use strict';

const admin = require('firebase-admin');

// ── Init ─────────────────────────────────────────────────────────────────────
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.error('ERROR: Set GOOGLE_APPLICATION_CREDENTIALS to your service account JSON path.');
    process.exit(1);
}

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://gameshub-efc.firebaseio.com'
});

const db = admin.firestore();

// ── Load module data ──────────────────────────────────────────────────────────
const { EUSKERA_MODULE, EUSKERA_LEVELS }         = require('../euskera-EFC/data.js');
const { ENGLISH_MODULE, ENGLISH_LEVELS }         = require('../englishVerbs-EFC/data.js');

// ── Scoring helpers (mirrors platform/firestore.js calculatePoints) ───────────

/**
 * Calculate points and XP for a module level attempt.
 * @param {object} result
 * @param {number} result.correctAnswers
 * @param {number} result.totalQuestions
 * @param {number} result.elapsedSeconds
 * @param {number} result.levelId          — 1-based level number
 * @param {object} result.scoringConfig    — the level's scoring object
 * @returns {{ points: number, xp: number, stars: number }}
 */
function calculateModuleScore(result) {
    const { correctAnswers, totalQuestions, elapsedSeconds, levelId, scoringConfig } = result;
    const cfg = scoringConfig;

    // Base score
    const base = correctAnswers * (cfg.correctPoints ?? 10);

    // Accuracy ratio
    const accuracy = correctAnswers / Math.max(1, totalQuestions);

    // Accuracy bonus (same tiers as platform)
    const accuracyBonus = accuracy >= 1 ? 100 : accuracy >= 0.9 ? 50 : accuracy >= 0.75 ? 20 : 0;

    // Time bonus (only when timeLimitSecs > 0)
    let timeBonus = 0;
    if (cfg.timeLimitSecs > 0 && cfg.timeBonusMax > 0) {
        const avgTimePerQ = elapsedSeconds / Math.max(1, totalQuestions);
        const saved = Math.max(0, cfg.timeLimitSecs - avgTimePerQ);
        timeBonus = Math.round((saved / cfg.timeLimitSecs) * cfg.timeBonusMax * totalQuestions);
    }

    // Level multiplier: same formula as platform
    const levelMult = 1 + (levelId - 1) * 0.15;

    const rawPoints = base + accuracyBonus + timeBonus;
    const points    = Math.round(rawPoints * levelMult);
    const xp        = Math.round(points / 5);

    // Stars: 3 if ≥90% correct, 2 if ≥70%, 1 if passed
    const pct  = accuracy * 100;
    const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= (scoringConfig.passingScore ?? 60) ? 1 : 0;

    return { points, xp, stars };
}

// ── Seed a single module ──────────────────────────────────────────────────────

async function seedModule(moduleData, levels) {
    const moduleId  = moduleData.id;
    const moduleRef = db.collection('modules').doc(moduleId);

    // Write module root (without levels array — levels go in subcollection)
    const { ...moduleDoc } = moduleData;
    await moduleRef.set(moduleDoc);
    console.log(`  [OK] /modules/${moduleId}`);

    // Write each level as a subcollection document
    for (const level of levels) {
        const levelRef = moduleRef.collection('levels').doc(String(level.id));
        await levelRef.set(level);
        console.log(`  [OK] /modules/${moduleId}/levels/${level.id}  (${level.type})`);
    }
}

// ── Progress schema helpers (for client-side reference) ───────────────────────

/**
 * Returns the default progress document for a user starting a module.
 * Write this to /users/{uid}/moduleProgress/{moduleId} on first play.
 */
function defaultModuleProgress(userId, moduleId, totalLevels) {
    const levels = {};
    for (let i = 1; i <= totalLevels; i++) {
        levels[String(i)] = {
            completed:     false,
            bestScore:     0,
            stars:         0,
            attempts:      0,
            lastAttemptAt: null
        };
    }
    return {
        moduleId,
        userId,
        maxLevelReached: 0,
        totalScore:      0,
        xpEarned:        0,
        lastPlayed:      null,
        completedAt:     null,
        levels
    };
}

/**
 * Merges an attempt result into the user's progress document.
 * Call this after each level completion.
 *
 * @param {object} progress — current /users/{uid}/moduleProgress/{moduleId} doc
 * @param {number} levelId
 * @param {{ points, xp, stars }} scoreResult — from calculateModuleScore()
 * @param {number} correctAnswers
 * @returns {object} updated progress (write back to Firestore)
 */
function mergeAttemptIntoProgress(progress, levelId, scoreResult, correctAnswers) {
    const key = String(levelId);
    const lvl = progress.levels[key] ?? { completed: false, bestScore: 0, stars: 0, attempts: 0 };

    lvl.attempts++;
    if (scoreResult.points > lvl.bestScore) lvl.bestScore = scoreResult.points;
    if (scoreResult.stars  > lvl.stars)     lvl.stars     = scoreResult.stars;
    if (scoreResult.stars  >= 1)            lvl.completed = true;
    lvl.lastAttemptAt = new Date().toISOString();

    progress.levels[key]    = lvl;
    progress.totalScore    += scoreResult.points;
    progress.xpEarned      += scoreResult.xp;
    progress.lastPlayed     = new Date().toISOString();

    if (levelId > progress.maxLevelReached) progress.maxLevelReached = levelId;
    if (progress.maxLevelReached >= Object.keys(progress.levels).length) {
        progress.completedAt = progress.completedAt ?? new Date().toISOString();
    }

    return progress;
}

// Export helpers for use in game.js
if (typeof module !== 'undefined') {
    module.exports = { calculateModuleScore, defaultModuleProgress, mergeAttemptIntoProgress };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
    console.log('Seeding Games Hub — Educational Modules\n');

    console.log('Module 1: euskera-nnk');
    await seedModule(EUSKERA_MODULE, EUSKERA_LEVELS);

    console.log('\nModule 2: english-irregular-verbs');
    await seedModule(ENGLISH_MODULE, ENGLISH_LEVELS);

    console.log('\nAll modules seeded successfully.');

    // Print progress schema reference
    console.log('\n── Progress document schema (client reference) ──');
    console.log(JSON.stringify(defaultModuleProgress('USER_ID', 'euskera-nnk', 3), null, 2));

    process.exit(0);
}

main().catch(err => {
    console.error('Seed failed:', err);
    process.exit(1);
});
