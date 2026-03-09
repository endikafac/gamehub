/**
 * Games Hub - Platform i18n
 * Translations for the platform shell (hub, header, auth)
 * Games keep their own i18n modules.
 */

const PlatformI18n = {
    currentLanguage: 'es-ES',

    translations: {
        'es-ES': {
            platformName: 'Games Hub',
            platformTagline: 'Aprende jugando',
            signInWithGoogle: 'Entrar con Google',
            signOut: 'Cerrar sesión',
            playAsGuest: 'Jugar como invitado',
            welcomeBack: 'Bienvenido de nuevo',
            guest: 'Invitado',
            home: 'Inicio',
            games: 'Juegos',
            myProfile: 'Mi perfil',
            settings: 'Configuración',
            language: 'Idioma',
            theme: 'Tema',
            toggleTheme: 'Cambiar tema',
            highContrast: 'Alto contraste',
            skipToContent: 'Ir al contenido',
            loading: 'Cargando...',
            errorSignIn: 'Error al iniciar sesión. Inténtalo de nuevo.',
            points: 'Puntos',
            xp: 'XP',
            level: 'Nivel',
            achievements: 'Logros',
            leaderboard: 'Clasificación',
            // Hub page
            hubTitle: 'Elige tu juego',
            hubSubtitle: 'Aprende matemáticas y más mientras te diviertes',
            playNow: 'Jugar ahora',
            comingSoon: 'Próximamente',
            yourBest: 'Tu mejor',
            noScoreYet: 'Aún sin puntuación',
            // XP levels
            levelNames: ['Novato', 'Aprendiz', 'Estudiante', 'Calculador', 'Matemático', 'Experto', 'Maestro', 'Gran Maestro', 'Sabio', 'Leyenda', 'MathMaster']
        },
        'en-US': {
            platformName: 'Games Hub',
            platformTagline: 'Learn by playing',
            signInWithGoogle: 'Sign in with Google',
            signOut: 'Sign out',
            playAsGuest: 'Play as guest',
            welcomeBack: 'Welcome back',
            guest: 'Guest',
            home: 'Home',
            games: 'Games',
            myProfile: 'My profile',
            settings: 'Settings',
            language: 'Language',
            theme: 'Theme',
            toggleTheme: 'Toggle theme',
            highContrast: 'High contrast',
            skipToContent: 'Skip to content',
            loading: 'Loading...',
            errorSignIn: 'Sign-in error. Please try again.',
            points: 'Points',
            xp: 'XP',
            level: 'Level',
            achievements: 'Achievements',
            leaderboard: 'Leaderboard',
            hubTitle: 'Choose your game',
            hubSubtitle: 'Learn maths and more while having fun',
            playNow: 'Play now',
            comingSoon: 'Coming soon',
            yourBest: 'Your best',
            noScoreYet: 'No score yet',
            levelNames: ['Novice', 'Learner', 'Student', 'Calculator', 'Mathematician', 'Expert', 'Master', 'Grand Master', 'Sage', 'Legend', 'MathMaster']
        },
        'eu-ES': {
            platformName: 'Games Hub',
            platformTagline: 'Ikasi jolasten',
            signInWithGoogle: 'Sartu Googlerekin',
            signOut: 'Saioa itxi',
            playAsGuest: 'Gonbidatu gisa jokatu',
            welcomeBack: 'Ongi etorri berriro',
            guest: 'Gonbidatua',
            home: 'Hasiera',
            games: 'Jokoak',
            myProfile: 'Nire profila',
            settings: 'Ezarpenak',
            language: 'Hizkuntza',
            theme: 'Itxura',
            toggleTheme: 'Itxura aldatu',
            highContrast: 'Kontraste altua',
            skipToContent: 'Edukira joan',
            loading: 'Kargatzen...',
            errorSignIn: 'Saio hasiera errorea. Saiatu berriro.',
            points: 'Puntuak',
            xp: 'XP',
            level: 'Maila',
            achievements: 'Lorpenak',
            leaderboard: 'Sailkapena',
            hubTitle: 'Aukeratu zure jokoa',
            hubSubtitle: 'Ikasi matematika eta gehiago disfrutatzen duzun bitartean',
            playNow: 'Jokatu orain',
            comingSoon: 'Laster',
            yourBest: 'Zure onena',
            noScoreYet: 'Oraindik puntuaziorik ez',
            levelNames: ['Hasiberri', 'Ikasle', 'Estudiante', 'Kalkulatzaile', 'Matematikari', 'Aditu', 'Maisu', 'Gran Maisu', 'Jakitun', 'Kondaira', 'MathMaster']
        }
    },

    init() {
        // Try to read from localStorage first, then detect browser language
        const saved = localStorage.getItem('games_hub_language');
        if (saved && this.translations[saved]) {
            this.currentLanguage = saved;
        } else {
            const nav = navigator.language || 'es-ES';
            if (nav.startsWith('eu')) this.currentLanguage = 'eu-ES';
            else if (nav.startsWith('en')) this.currentLanguage = 'en-US';
            else this.currentLanguage = 'es-ES';
        }
    },

    setLanguage(lang) {
        if (!this.translations[lang]) return false;
        this.currentLanguage = lang;
        localStorage.setItem('games_hub_language', lang);
        // Also sync with any game-level i18n that may be loaded
        if (typeof MathMasterI18n !== 'undefined') {
            MathMasterI18n.setLanguage(lang);
        }
        document.documentElement.lang = lang.split('-')[0];
        document.dispatchEvent(new CustomEvent('platformLanguageChanged', { detail: { language: lang } }));
        return true;
    },

    t(key) {
        const val = this.translations[this.currentLanguage]?.[key]
            ?? this.translations['es-ES']?.[key]
            ?? key;
        return val;
    },

    getLevelName(level) {
        const names = this.t('levelNames');
        return Array.isArray(names) ? (names[level] ?? names[names.length - 1]) : `Level ${level}`;
    }
};

// Auto-init
PlatformI18n.init();
