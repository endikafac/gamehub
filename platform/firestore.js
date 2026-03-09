/**
 * Games Hub - Firestore Data Module
 * Handles all cloud data: user profiles, game stats, achievements, leaderboard.
 * Falls back to localStorage when Firebase is unavailable (guest / offline).
 */

const PlatformFirestore = {

    // ── XP / Level constants ─────────────────────────────────────────────────

    XP_THRESHOLDS: [0, 100, 300, 600, 1000, 1500, 2200, 3100, 4200, 5500, 7000],

    levelFromXP(xp) {
        const thresholds = this.XP_THRESHOLDS;
        for (let i = thresholds.length - 1; i >= 0; i--) {
            if (xp >= thresholds[i]) return i;
        }
        return 0;
    },

    xpToNextLevel(xp) {
        const level = this.levelFromXP(xp);
        const next = this.XP_THRESHOLDS[level + 1];
        return next ? next - xp : 0;
    },

    // ── Points calculation ───────────────────────────────────────────────────

    /**
     * Calculate points and XP earned from a game result.
     * @param {Object} result - { correctAnswers, totalQuestions, totalAttempts, bestStreak, elapsedSeconds, level }
     * @returns {{ points: number, xp: number }}
     */
    calculatePoints(result) {
        const { correctAnswers, totalQuestions, totalAttempts, bestStreak, elapsedSeconds, level = 1 } = result;

        // Base: 10 pts per correct answer
        const base = correctAnswers * 10;

        // Time bonus: target is 10 seconds per question; faster = more points
        const targetSeconds = totalQuestions * 10;
        const timeBonus = Math.max(0, targetSeconds - elapsedSeconds) * level;

        // Streak bonus: 5 pts per streak point
        const streakBonus = bestStreak * 5;

        // Accuracy bonus
        const accuracy = correctAnswers / Math.max(1, totalAttempts);
        const accuracyBonus = accuracy >= 1 ? 100 : accuracy >= 0.9 ? 50 : accuracy >= 0.75 ? 20 : 0;

        // Level multiplier: level 1 = ×1.0, level 10 = ×2.35
        const levelMult = 1 + (level - 1) * 0.15;

        const points = Math.round((base + timeBonus + streakBonus + accuracyBonus) * levelMult);
        const xp     = Math.round(points / 5);

        return { points, xp };
    },

    // ── User profile ─────────────────────────────────────────────────────────

    async getOrCreateProfile(uid, authUser) {
        if (!window.GamesHubDB) return this._localProfile(authUser);
        const ref = GamesHubDB.collection('users').doc(uid);
        const snap = await ref.get();
        if (snap.exists) {
            await ref.update({ lastLogin: new Date().toISOString() });
            return snap.data();
        }
        const profile = {
            uid,
            username:    authUser.username,
            email:       authUser.email,
            photoURL:    authUser.photoURL || null,
            createdAt:   new Date().toISOString(),
            lastLogin:   new Date().toISOString(),
            xp:          0,
            totalPoints: 0,
            level:       0,
            settings: {
                soundEnabled:  true,
                sfxVolume:     0.8,
                ttsEnabled:    false,
                highContrast:  false,
                language:      localStorage.getItem('games_hub_language') || 'es-ES'
            }
        };
        await ref.set(profile);
        return profile;
    },

    async updateSettings(uid, settings) {
        if (!window.GamesHubDB) {
            this._localSave('profile', { ...this._localLoad('profile'), settings });
            return;
        }
        await GamesHubDB.collection('users').doc(uid).update({ settings });
    },

    // ── Game statistics (per game namespace) ─────────────────────────────────

    async getGameStats(uid, gameId) {
        if (!window.GamesHubDB) return this._localLoad(`stats_${gameId}`) || this._defaultStats();
        const snap = await GamesHubDB.collection('users').doc(uid)
            .collection('games').doc(gameId).get();
        return snap.exists ? snap.data() : this._defaultStats();
    },

    async updateGameStats(uid, gameId, gameResult) {
        const points = this.calculatePoints(gameResult);
        gameResult.points = points.points;
        gameResult.xp     = points.xp;

        if (!window.GamesHubDB) {
            const stats = this._localLoad(`stats_${gameId}`) || this._defaultStats();
            this._mergeStats(stats, gameResult);
            this._localSave(`stats_${gameId}`, stats);
            return { stats, points };
        }

        const ref = GamesHubDB.collection('users').doc(uid).collection('games').doc(gameId);
        const snap = await ref.get();
        const stats = snap.exists ? snap.data() : this._defaultStats();
        this._mergeStats(stats, gameResult);
        await ref.set(stats);

        // Update global XP and points on user profile
        await GamesHubDB.collection('users').doc(uid).update({
            xp:          firebase.firestore.FieldValue.increment(points.xp),
            totalPoints: firebase.firestore.FieldValue.increment(points.points),
            level:       this.levelFromXP((await GamesHubDB.collection('users').doc(uid).get()).data().xp + points.xp)
        });

        // Update leaderboard
        await this._updateLeaderboard(uid, gameId, points.points).catch(() => {});

        return { stats, points };
    },

    // ── Achievements ─────────────────────────────────────────────────────────

    async getAchievements(uid, gameId) {
        if (!window.GamesHubDB) {
            return this._localLoad(`achievements_${gameId}`) || { unlockedAchievements: [] };
        }
        const snap = await GamesHubDB.collection('users').doc(uid)
            .collection('games').doc(gameId).get();
        return { unlockedAchievements: snap.data()?.unlockedAchievements || [] };
    },

    async unlockAchievement(uid, gameId, achievementId) {
        if (!window.GamesHubDB) {
            const data = this._localLoad(`achievements_${gameId}`) || { unlockedAchievements: [] };
            if (!data.unlockedAchievements.includes(achievementId)) {
                data.unlockedAchievements.push(achievementId);
                this._localSave(`achievements_${gameId}`, data);
            }
            return true;
        }
        const ref = GamesHubDB.collection('users').doc(uid).collection('games').doc(gameId);
        await ref.set({
            unlockedAchievements: firebase.firestore.FieldValue.arrayUnion(achievementId)
        }, { merge: true });
        return true;
    },

    // ── Leaderboard ───────────────────────────────────────────────────────────

    async getLeaderboard(gameId, limit = 10) {
        if (!window.GamesHubDB) return [];
        const snap = await GamesHubDB.collection('leaderboard').doc(gameId)
            .collection('scores')
            .orderBy('totalPoints', 'desc')
            .limit(limit)
            .get();
        return snap.docs.map(d => d.data());
    },

    async _updateLeaderboard(uid, gameId, newPoints) {
        const userSnap = await GamesHubDB.collection('users').doc(uid).get();
        const user     = userSnap.data();
        await GamesHubDB.collection('leaderboard').doc(gameId)
            .collection('scores').doc(uid).set({
                uid,
                username:    user.username,
                photoURL:    user.photoURL || null,
                totalPoints: user.totalPoints + newPoints,
                xp:          user.xp,
                level:       user.level,
                updatedAt:   new Date().toISOString()
            });
    },

    // ── Helpers ───────────────────────────────────────────────────────────────

    _defaultStats() {
        return {
            totalGames:    0,
            totalCorrect:  0,
            totalAttempts: 0,
            bestStreak:    0,
            totalTime:     0,
            unlockedAchievements: [],
            byOperation: {
                suma:           { games: 0, correct: 0 },
                resta:          { games: 0, correct: 0 },
                multiplicacion: { games: 0, correct: 0 },
                division:       { games: 0, correct: 0 },
                tablas:         { games: 0, correct: 0 }
            },
            byLevel: {}
        };
    },

    _mergeStats(stats, gameResult) {
        stats.totalGames++;
        stats.totalCorrect  += gameResult.correctAnswers;
        stats.totalAttempts += gameResult.totalAttempts;
        stats.totalTime     += gameResult.elapsedSeconds;
        if (gameResult.bestStreak > stats.bestStreak) stats.bestStreak = gameResult.bestStreak;

        const op = gameResult.operation;
        if (!stats.byOperation[op]) stats.byOperation[op] = { games: 0, correct: 0 };
        stats.byOperation[op].games++;
        stats.byOperation[op].correct += gameResult.correctAnswers;

        const lk = `level_${gameResult.level}`;
        if (!stats.byLevel[lk]) stats.byLevel[lk] = { games: 0, bestTime: Infinity };
        stats.byLevel[lk].games++;
        if (gameResult.elapsedSeconds < stats.byLevel[lk].bestTime) {
            stats.byLevel[lk].bestTime = gameResult.elapsedSeconds;
        }

        if (gameResult.unlockedAchievements?.length) {
            stats.unlockedAchievements = [
                ...new Set([...stats.unlockedAchievements, ...gameResult.unlockedAchievements])
            ];
        }
    },

    _localProfile(authUser) {
        return {
            uid:         'guest',
            username:    authUser?.username || PlatformI18n.t('guest'),
            photoURL:    null,
            createdAt:   new Date().toISOString(),
            lastLogin:   new Date().toISOString(),
            xp:          0,
            totalPoints: 0,
            level:       0,
            settings:    { soundEnabled: true, sfxVolume: 0.8, ttsEnabled: false, highContrast: false }
        };
    },

    _localLoad(key) {
        try {
            const raw = localStorage.getItem(`games_hub_${key}`);
            return raw ? JSON.parse(raw) : null;
        } catch { return null; }
    },

    _localSave(key, data) {
        try { localStorage.setItem(`games_hub_${key}`, JSON.stringify(data)); } catch {}
    }
};
