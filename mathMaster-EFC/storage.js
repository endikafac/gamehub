/**
 * MathMaster - Storage Module (v3.0)
 * Replaces database.js.
 * Uses Firestore when Firebase is configured + user is authenticated.
 * Falls back to localStorage for guest / offline use.
 *
 * Exposes the same async API as the original MathMasterDB so game.js
 * requires minimal changes. Also exports as window.MathMasterDB.
 */

const MathMasterStorage = {
    GAME_ID: 'mathmaster',

    // ── Init ─────────────────────────────────────────────────────────────────

    async init() {
        // Nothing async needed; Firebase is already initialized via firebase-config.js
        this._ready = true;
        return true;
    },

    // ── User ─────────────────────────────────────────────────────────────────

    /**
     * Get all "users" – with Firebase this is max 1 (the authenticated user).
     * Returns an array for backward compatibility with the login screen.
     */
    async getAllUsers() {
        if (typeof PlatformAuth !== 'undefined' && PlatformAuth.currentUser) {
            const u = PlatformAuth.currentUser;
            return [{
                odId:      u.uid,
                username:  u.username,
                photoURL:  u.photoURL,
                email:     u.email,
                createdAt: u.createdAt,
                lastLogin: u.lastLogin
            }];
        }
        return [];
    },

    /**
     * "Create user" = Sign in with Google.
     * Returns a pseudo-userId for the newly signed-in user.
     */
    async createUser(_ignoredUsername) {
        if (typeof PlatformAuth === 'undefined') throw new Error('Auth not available');
        const user = await PlatformAuth.signInWithGoogle();
        await PlatformFirestore.getOrCreateProfile(user.uid, user);
        return user.uid;
    },

    /**
     * Get user by id (uid or "guest").
     */
    async getUser(id) {
        if (id === 'guest' || id == null) return null;

        if (typeof PlatformAuth !== 'undefined' && PlatformAuth.currentUser?.uid === id) {
            const u = PlatformAuth.currentUser;
            // Try to enrich with Firestore profile (xp, level, etc.)
            if (window.GamesHubDB) {
                try {
                    const snap = await GamesHubDB.collection('users').doc(id).get();
                    if (snap.exists) return { odId: id, ...snap.data() };
                } catch {}
            }
            return { odId: id, username: u.username, photoURL: u.photoURL, email: u.email };
        }
        return null;
    },

    async updateUser(user) {
        if (!user?.odId || user.odId === 'guest') return;
        if (window.GamesHubDB) {
            try {
                await GamesHubDB.collection('users').doc(user.odId).update({
                    lastLogin: new Date().toISOString(),
                    ...(user.settings && { settings: user.settings })
                });
            } catch {}
        }
    },

    async deleteUser(id) {
        if (!id || id === 'guest') return;
        // Note: we do NOT delete the Firebase Auth account here (requires re-auth).
        // We only clear the Firestore data.
        if (window.GamesHubDB) {
            const batch = GamesHubDB.batch();
            batch.delete(GamesHubDB.collection('users').doc(id));
            await batch.commit().catch(() => {});
        }
        // Clear local fallback data
        ['stats', 'achievements', 'settings'].forEach(k => {
            localStorage.removeItem(`games_hub_${k}_mathmaster`);
        });
    },

    // ── Statistics ───────────────────────────────────────────────────────────

    async getStatistics(id) {
        if (!id || id === 'guest') return this._guestStats();
        const stats = await PlatformFirestore.getGameStats(id, this.GAME_ID)
            .catch(() => this._guestStats());
        // Ensure byOperation has all keys (backward compat)
        this._ensureByOperation(stats);
        return stats;
    },

    async updateStatistics(id, gameResult) {
        if (!id || id === 'guest') {
            // Guest: update in memory only
            const stats = this._guestStats();
            PlatformFirestore._mergeStats(stats, gameResult);
            return stats;
        }
        const { stats } = await PlatformFirestore.updateGameStats(id, this.GAME_ID, gameResult);
        this._ensureByOperation(stats);
        return stats;
    },

    // ── Achievements ─────────────────────────────────────────────────────────

    async getAchievements(id) {
        if (!id || id === 'guest') return { unlockedAchievements: [] };
        return PlatformFirestore.getAchievements(id, this.GAME_ID)
            .catch(() => ({ unlockedAchievements: [] }));
    },

    async unlockAchievement(id, achievementId) {
        if (!id || id === 'guest') return false;
        return PlatformFirestore.unlockAchievement(id, this.GAME_ID, achievementId)
            .catch(() => false);
    },

    // ── Saved games (paused state) ────────────────────────────────────────────

    async saveGame(id, gameState) {
        const key = `games_hub_saved_mathmaster_${id}`;
        try { localStorage.setItem(key, JSON.stringify({ gameState, savedAt: new Date().toISOString() })); } catch {}
    },

    async loadGame(id) {
        const key = `games_hub_saved_mathmaster_${id}`;
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        } catch { return null; }
    },

    async deleteSavedGame(id) {
        localStorage.removeItem(`games_hub_saved_mathmaster_${id}`);
    },

    // ── Settings ─────────────────────────────────────────────────────────────

    async setSetting(key, value) {
        localStorage.setItem(`mathmaster_setting_${key}`, JSON.stringify(value));
        // Also persist to Firestore if authenticated
        if (typeof PlatformAuth !== 'undefined' && PlatformAuth.currentUser && window.GamesHubDB) {
            GamesHubDB.collection('users').doc(PlatformAuth.currentUser.uid)
                .update({ [`settings.${key}`]: value }).catch(() => {});
        }
    },

    async getSetting(key) {
        const raw = localStorage.getItem(`mathmaster_setting_${key}`);
        return raw !== null ? JSON.parse(raw) : null;
    },

    // ── Helpers ───────────────────────────────────────────────────────────────

    _guestStats() {
        return {
            totalGames: 0, totalCorrect: 0, totalAttempts: 0,
            bestStreak: 0, totalTime: 0, unlockedAchievements: [],
            byOperation: {
                suma: { games: 0, correct: 0 }, resta: { games: 0, correct: 0 },
                multiplicacion: { games: 0, correct: 0 },
                division: { games: 0, correct: 0 }, tablas: { games: 0, correct: 0 }
            },
            byLevel: {}
        };
    },

    _ensureByOperation(stats) {
        if (!stats.byOperation) stats.byOperation = {};
        ['suma','resta','multiplicacion','division','tablas'].forEach(op => {
            if (!stats.byOperation[op]) stats.byOperation[op] = { games: 0, correct: 0 };
        });
        if (!stats.byLevel) stats.byLevel = {};
    }
};

// Backward-compatibility alias so existing game.js calls to MathMasterDB still work
window.MathMasterDB = MathMasterStorage;
