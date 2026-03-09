/**
 * Games Hub - Platform Achievements System
 * Defines all achievements, checks conditions, and manages unlocking.
 */
const PlatformAchievements = {

    // ── Achievement definitions ──────────────────────────────────────────────
    DEFINITIONS: [
        // === BIENVENIDA ===
        { id: 'first_login',    game: 'hub',   icon: '🌟', name: 'Primer Paso',       nameEN: 'First Step',      nameEU: 'Lehen Urratsa',    desc: '¡Bienvenido a Games Hub!',           descEN: 'Welcome to Games Hub!',              descEU: 'Ongi etorri Games Hub-era!',    rarity: 'common'   },
        { id: 'all_games',      game: 'hub',   icon: '🎮', name: 'Explorador',        nameEN: 'Explorer',        nameEU: 'Esploratzaile',    desc: 'Juega a los 3 juegos al menos una vez', descEN: 'Play all 3 games at least once', descEU: 'Jokatu 3 joku guztietan',      rarity: 'rare'     },
        { id: 'pts_100',        game: 'hub',   icon: '🥉', name: 'Primeros Puntos',   nameEN: 'First Points',    nameEU: 'Lehen Puntuak',    desc: 'Consigue 100 puntos en total',        descEN: 'Earn 100 total points',              descEU: 'Lortu 100 puntu guztira',       rarity: 'common'   },
        { id: 'pts_1000',       game: 'hub',   icon: '🥈', name: 'Cien a la Vista',   nameEN: 'Silver Player',   nameEU: 'Zilar Jokalari',   desc: 'Consigue 1.000 puntos en total',      descEN: 'Earn 1,000 total points',            descEU: 'Lortu 1.000 puntu guztira',     rarity: 'uncommon' },
        { id: 'pts_5000',       game: 'hub',   icon: '🥇', name: 'Campeón',           nameEN: 'Champion',        nameEU: 'Txapeldun',        desc: 'Consigue 5.000 puntos en total',      descEN: 'Earn 5,000 total points',            descEU: 'Lortu 5.000 puntu guztira',     rarity: 'rare'     },
        { id: 'pts_20000',      game: 'hub',   icon: '💎', name: 'Leyenda',           nameEN: 'Legend',          nameEU: 'Kondaira',         desc: 'Consigue 20.000 puntos en total',     descEN: 'Earn 20,000 total points',           descEU: 'Lortu 20.000 puntu guztira',    rarity: 'epic'     },
        // === MATHMASTER ===
        { id: 'mm_first',       game: 'mathMaster', icon: '🧮', name: 'Matemático Novato', nameEN: 'Math Rookie',   nameEU: 'Hasiberri',       desc: 'Completa tu primera partida en MathMaster', descEN: 'Complete your first MathMaster game', descEU: 'Osatu zure lehen MathMaster partida', rarity: 'common' },
        { id: 'mm_10games',     game: 'mathMaster', icon: '📚', name: 'Estudioso',         nameEN: 'Studious',      nameEU: 'Ikaskide',        desc: 'Juega 10 partidas en MathMaster',    descEN: 'Play 10 MathMaster games',           descEU: 'Jokatu 10 aldiz MathMaster',    rarity: 'uncommon' },
        { id: 'mm_perfect',     game: 'mathMaster', icon: '⭐', name: '¡Perfecto!',        nameEN: 'Perfect!',      nameEU: 'Perfektua!',      desc: 'Responde 30 preguntas sin fallar',   descEN: 'Answer 30 questions without a mistake', descEU: 'Erantzun 30 galdera akats gabe', rarity: 'rare'  },
        { id: 'mm_streak10',    game: 'mathMaster', icon: '🔥', name: 'En Racha',           nameEN: 'On Fire',       nameEU: 'Sugarretan',      desc: 'Consigue una racha de 10 aciertos',  descEN: 'Get a streak of 10',                 descEU: 'Lortu 10 acierto segidako',     rarity: 'uncommon' },
        { id: 'mm_level5',      game: 'mathMaster', icon: '🎯', name: 'Nivel 5',            nameEN: 'Level 5',       nameEU: '5. Maila',        desc: 'Completa el nivel 5',                descEN: 'Complete level 5',                   descEU: 'Osatu 5. maila',                rarity: 'uncommon' },
        { id: 'mm_level10',     game: 'mathMaster', icon: '👑', name: 'MathMaster Total',   nameEN: 'MathMaster Pro',nameEU: 'MathMaster Pro',  desc: 'Completa el nivel 10',               descEN: 'Complete level 10',                  descEU: 'Osatu 10. maila',               rarity: 'epic'     },
        { id: 'mm_allops',      game: 'mathMaster', icon: '🔢', name: 'Completo',           nameEN: 'Complete',      nameEU: 'Osoa',            desc: 'Juega con las 4 operaciones',        descEN: 'Play with all 4 operations',         descEU: 'Jokatu 4 eragiketa guztiekin',  rarity: 'uncommon' },
        { id: 'mm_mix',         game: 'mathMaster', icon: '🎲', name: 'Mezclado',           nameEN: 'Mix Master',    nameEU: 'Nahaste Maisua',  desc: 'Completa una partida en modo Mezcla', descEN: 'Complete a Mix mode game',          descEU: 'Osatu Nahasketa partida bat',   rarity: 'uncommon' },
        // === SNAKE ===
        { id: 'sn_first',       game: 'snake', icon: '🐍', name: 'Primera Serpiente', nameEN: 'First Snake',     nameEU: 'Lehen Sugea',     desc: 'Juega tu primera partida de Snake',  descEN: 'Play your first Snake game',         descEU: 'Jokatu zure lehen Snake partida', rarity: 'common'  },
        { id: 'sn_score50',     game: 'snake', icon: '🍎', name: '5 Manzanas',        nameEN: '5 Apples',        nameEU: '5 Sagar',         desc: 'Consigue 50 puntos en Snake',        descEN: 'Score 50 points in Snake',           descEU: 'Lortu 50 puntu Snake-en',       rarity: 'common'   },
        { id: 'sn_score200',    game: 'snake', icon: '🌟', name: 'Serpiente Ágil',    nameEN: 'Agile Snake',     nameEU: 'Suge Arina',      desc: 'Consigue 200 puntos en Snake',       descEN: 'Score 200 points in Snake',          descEU: 'Lortu 200 puntu Snake-en',      rarity: 'uncommon' },
        { id: 'sn_score500',    game: 'snake', icon: '🏆', name: 'Serpiente Maestra', nameEN: 'Master Snake',    nameEU: 'Suge Maisua',     desc: 'Consigue 500 puntos en Snake',       descEN: 'Score 500 points in Snake',          descEU: 'Lortu 500 puntu Snake-en',      rarity: 'rare'     },
        { id: 'sn_length15',    game: 'snake', icon: '📏', name: 'Serpiente Larga',   nameEN: 'Long Snake',      nameEU: 'Suge Luzea',      desc: 'Llega a una longitud de 15 segmentos', descEN: 'Reach length 15',                 descEU: 'Iritsi 15 segmentu luzerara',   rarity: 'uncommon' },
        { id: 'sn_score1000',   game: 'snake', icon: '💎', name: 'Boa Constrictor',   nameEN: 'Boa Constrictor', nameEU: 'Boa Konstriktorea',desc: 'Consigue 1000 puntos en Snake',      descEN: 'Score 1000 points in Snake',         descEU: 'Lortu 1000 puntu Snake-en',     rarity: 'rare'     },
        { id: 'sn_games10',     game: 'snake', icon: '🐍', name: 'Serpentomanía',     nameEN: 'Snake Maniac',    nameEU: 'Suge Zaletu',     desc: 'Juega 10 partidas de Snake',         descEN: 'Play 10 Snake games',                descEU: 'Jokatu 10 Snake partida',       rarity: 'uncommon' },
        { id: 'sn_nodeath',     game: 'snake', icon: '👑', name: 'Inmortal',          nameEN: 'Immortal',        nameEU: 'Hilezina',        desc: 'Supera 300 puntos sin morir',        descEN: 'Pass 300 points without dying',      descEU: 'Pasa 300 puntu hil gabe',       rarity: 'epic'     },
        // === TABLEMASTER ===
        { id: 'tm_first',       game: 'tableMaster', icon: '✖',  name: 'Multiplicando',  nameEN: 'Multiplying',   nameEU: 'Biderkatzaile',   desc: 'Completa tu primera práctica en TableMaster', descEN: 'Complete your first TableMaster practice', descEU: 'Osatu zure lehen TableMaster praktika', rarity: 'common' },
        { id: 'tm_table9',      game: 'tableMaster', icon: '🤚', name: 'Truco del 9',    nameEN: 'Trick of 9',    nameEU: '9aren Trukua',    desc: 'Aprende el truco de la tabla del 9', descEN: 'Learn the trick of the 9 table',     descEU: 'Ikasi 9aren taularen trukua',   rarity: 'uncommon' },
        { id: 'tm_fullgrid',    game: 'tableMaster', icon: '📋', name: 'Tabla Completa', nameEN: 'Full Grid',     nameEU: 'Taula Osoa',      desc: 'Explora la tabla 10x10 completa',    descEN: 'Explore the full 10x10 grid',        descEU: 'Esploratu 10x10 taula',         rarity: 'uncommon' },
        { id: 'tm_practice10',  game: 'tableMaster', icon: '💪', name: 'Practicón',      nameEN: 'Practitioner',  nameEU: 'Praktikante',     desc: 'Completa 10 ejercicios de práctica', descEN: 'Complete 10 practice exercises',     descEU: 'Osatu 10 praktika ariketa',     rarity: 'uncommon' },
        { id: 'tm_speed',       game: 'tableMaster', icon: '⚡', name: 'Calculadora',    nameEN: 'Calculator',    nameEU: 'Kalkulagailua',   desc: 'Responde 10 seguidas sin errores',   descEN: 'Answer 10 in a row without mistakes', descEU: 'Erantzun 10 segidako akats gabe', rarity: 'rare'  },
        { id: 'tm_all_tables',  game: 'tableMaster', icon: '🏆', name: 'Todas las Tablas',nameEN: 'All Tables',   nameEU: 'Taula Guztiak',  desc: 'Practica todas las tablas del 1 al 10', descEN: 'Practice all tables from 1 to 10', descEU: 'Praktikatu 1etik 10erako taula guztiak', rarity: 'rare' },
        { id: 'tm_legend',      game: 'tableMaster', icon: '👑', name: 'TableMaster Pro',nameEN: 'TableMaster Pro',nameEU: 'TableMaster Pro',desc: 'Completa el nivel 10 sin errores',   descEN: 'Complete level 10 without mistakes',  descEU: 'Osatu 10. maila akats gabe',    rarity: 'epic'     },
        // === TYPEMASTER ===
        { id: 'ty_first',    game: 'typingMaster', icon: '⌨️', name: 'Primeras Teclas',  nameEN: 'First Keys',     nameEU: 'Lehen Teklak',      desc: 'Completa tu primera sesión de TypeMaster',   descEN: 'Complete your first TypeMaster session',    descEU: 'Osatu zure lehen TypeMaster saioa',    rarity: 'common'   },
        { id: 'ty_wpm20',   game: 'typingMaster', icon: '🚀', name: 'Veloz',            nameEN: 'Swift',           nameEU: 'Bizkorra',          desc: 'Alcanza 20 PPM en TypeMaster',               descEN: 'Reach 20 WPM in TypeMaster',                descEU: 'Iritsi 20 KPM TypeMaster-en',          rarity: 'common'   },
        { id: 'ty_wpm40',   game: 'typingMaster', icon: '⚡', name: 'Rápido',           nameEN: 'Fast',            nameEU: 'Azkarra',           desc: 'Alcanza 40 PPM en TypeMaster',               descEN: 'Reach 40 WPM in TypeMaster',                descEU: 'Iritsi 40 KPM TypeMaster-en',          rarity: 'uncommon' },
        { id: 'ty_wpm60',   game: 'typingMaster', icon: '💨', name: 'Mecanógrafo',      nameEN: 'Typist',          nameEU: 'Mekanografoa',      desc: 'Alcanza 60 PPM en TypeMaster',               descEN: 'Reach 60 WPM in TypeMaster',                descEU: 'Iritsi 60 KPM TypeMaster-en',          rarity: 'rare'     },
        { id: 'ty_perfect', game: 'typingMaster', icon: '💎', name: 'Sin Errores',      nameEN: 'Flawless',        nameEU: 'Akatsik Gabe',      desc: 'Completa un texto con 100% de precisión',    descEN: 'Complete a text with 100% accuracy',        descEU: 'Osatu testu bat % 100 zehaztasunarekin', rarity: 'rare'   },
        { id: 'ty_level10', game: 'typingMaster', icon: '👑', name: 'TypeMaster Total', nameEN: 'TypeMaster Pro',  nameEU: 'TypeMaster Pro',    desc: 'Completa el nivel 10 de TypeMaster',         descEN: 'Complete TypeMaster level 10',              descEU: 'Osatu TypeMaster 10. maila',            rarity: 'epic'     },
        { id: 'ty_wpm80',   game: 'typingMaster', icon: '🌪️', name: 'Tifón',           nameEN: 'Typhoon',         nameEU: 'Tifoia',            desc: 'Alcanza 80 PPM en TypeMaster',               descEN: 'Reach 80 WPM in TypeMaster',                descEU: 'Iritsi 80 KPM TypeMaster-en',          rarity: 'epic'     },
        { id: 'ty_sessions5',game: 'typingMaster', icon: '📅', name: 'Constante',       nameEN: 'Consistent',      nameEU: 'Konstantea',        desc: 'Completa 5 sesiones de TypeMaster',          descEN: 'Complete 5 TypeMaster sessions',             descEU: 'Osatu 5 TypeMaster saio',              rarity: 'uncommon' },
        // === WORDSEARCH ===
        { id: 'ws_first',     game: 'wordSearch', icon: '🔍', name: 'Cazapalabras',   nameEN: 'Word Hunter',   nameEU: 'Hitz Ehiztaria', desc: 'Encuentra tu primera palabra',         descEN: 'Find your first word',             descEU: 'Aurkitu zure lehen hitza',        rarity: 'common'   },
        { id: 'ws_complete1', game: 'wordSearch', icon: '✅', name: 'Primera Sopa',   nameEN: 'First Soup',    nameEU: 'Lehen Zopa',     desc: 'Completa tu primera sopa de letras', descEN: 'Complete your first word search',  descEU: 'Osatu zure lehen hitz-zopa',      rarity: 'common'   },
        { id: 'ws_speed',     game: 'wordSearch', icon: '⚡', name: 'Rayo',           nameEN: 'Lightning',     nameEU: 'Tximista',       desc: 'Completa un nivel en menos de 90s',  descEN: 'Complete a level in under 90s',    descEU: 'Osatu maila 90 segundotan',       rarity: 'uncommon' },
        { id: 'ws_complete5', game: 'wordSearch', icon: '🌟', name: 'Explorador',     nameEN: 'Explorer',      nameEU: 'Esploratzailea', desc: 'Completa el nivel 5',                descEN: 'Complete level 5',                 descEU: 'Osatu 5. maila',                  rarity: 'rare'     },
        { id: 'ws_words50',   game: 'wordSearch', icon: '📚', name: 'Lexicógrafo',    nameEN: 'Lexicographer', nameEU: 'Lexikografoa',   desc: 'Encuentra 50 palabras en total',     descEN: 'Find 50 words in total',           descEU: 'Aurkitu 50 hitz guztira',         rarity: 'rare'     },
        { id: 'ws_legend',    game: 'wordSearch', icon: '👑', name: 'Maestro Sopa',   nameEN: 'Word Master',   nameEU: 'Hitz Maisua',   desc: 'Completa el nivel 10',               descEN: 'Complete level 10',                descEU: 'Osatu 10. maila',                 rarity: 'epic'     },
        { id: 'ws_streak',    game: 'wordSearch', icon: '🔥', name: 'En Racha',       nameEN: 'On a Roll',     nameEU: 'Sugarretan',    desc: 'Encuentra 5 palabras seguidas',      descEN: 'Find 5 words in a row',            descEU: 'Aurkitu 5 hitz segidakoak',      rarity: 'uncommon' },
        { id: 'ws_all_cats',  game: 'wordSearch', icon: '🌈', name: 'Polímata',       nameEN: 'Polymath',      nameEU: 'Polimata',      desc: 'Juega en 5 categorías diferentes',   descEN: 'Play in 5 different categories',   descEU: 'Jokatu 5 kategoria ezberdinetan', rarity: 'rare'    },
        // === CROSSWORD ===
        { id: 'cw_first',     game: 'crossword', icon: '✏️', name: 'Crucicurioso',   nameEN: 'Crossword Fan', nameEU: 'Kuriosa',        desc: 'Completa tu primera palabra en el crucigrama', descEN: 'Complete your first crossword word', descEU: 'Osatu zure lehen hitza gurutzegraman', rarity: 'common'   },
        { id: 'cw_complete1', game: 'crossword', icon: '✅', name: 'Primer Crucigrama', nameEN: 'First Crossword', nameEU: 'Lehen Gurutzegrama', desc: 'Completa tu primer crucigrama', descEN: 'Complete your first crossword', descEU: 'Osatu zure lehen gurutzegrama', rarity: 'common'   },
        { id: 'cw_perfect',   game: 'crossword', icon: '💎', name: 'Sin Pistas',      nameEN: 'No Hints',      nameEU: 'Pistarik Gabe',  desc: 'Completa un crucigrama sin usar Verificar ni Revelar', descEN: 'Complete a crossword without Check or Reveal', descEU: 'Osatu gurutzegrama Egiaztatu edo Erakutsi gabe', rarity: 'rare'   },
        { id: 'cw_speed',     game: 'crossword', icon: '⚡', name: 'Cruciracha',      nameEN: 'Speed Solver',  nameEU: 'Azkar Ebaztaile', desc: 'Completa un crucigrama en menos de 5 minutos', descEN: 'Complete a crossword in under 5 minutes', descEU: 'Osatu gurutzegrama 5 minututan', rarity: 'uncommon' },
        { id: 'cw_complete10',game: 'crossword', icon: '🌟', name: 'Crucifanático',   nameEN: 'Crossword Addict', nameEU: 'Zaletua',     desc: 'Completa 10 crucigramas',            descEN: 'Complete 10 crosswords',           descEU: 'Osatu 10 gurutzegrama',           rarity: 'rare'     },
        { id: 'cw_words100',  game: 'crossword', icon: '📚', name: 'Políglota',       nameEN: 'Polyglot',      nameEU: 'Hizlari',        desc: 'Acierta 100 palabras en total',      descEN: 'Get 100 correct words in total',   descEU: 'Asmatu 100 hitz guztira',         rarity: 'rare'     },
        { id: 'cw_legend',    game: 'crossword', icon: '👑', name: 'Crucimaestro',    nameEN: 'Crossword Master', nameEU: 'Gurutzegrama Maisu', desc: 'Completa el nivel 10 del crucigrama', descEN: 'Complete crossword level 10',   descEU: 'Osatu gurutzegrama 10. maila',   rarity: 'epic'     },
        // === GEOQUIZ ===
        { id: 'gq_first',    game: 'geoQuiz', icon: '🗺️', name: 'Explorador',     nameEN: 'Explorer',      nameEU: 'Esploratzailea', desc: 'Completa tu primer quiz',              descEN: 'Complete your first quiz',          descEU: 'Osatu zure lehen galdeketa',      rarity: 'common'   },
        { id: 'gq_perfect',  game: 'geoQuiz', icon: '💎', name: 'Geógrafo',       nameEN: 'Geographer',    nameEU: 'Geografoa',      desc: 'Responde 10/10 en un quiz',            descEN: 'Score 10/10 in a quiz',             descEU: 'Lortu 10/10 galdeketa batean',   rarity: 'rare'     },
        { id: 'gq_quizzes10',game: 'geoQuiz', icon: '🌟', name: 'Cartógrafo',     nameEN: 'Cartographer',  nameEU: 'Kartografoa',    desc: 'Completa 10 quizzes',                  descEN: 'Complete 10 quizzes',               descEU: 'Osatu 10 galdeketa',             rarity: 'rare'     },
        { id: 'gq_level10',  game: 'geoQuiz', icon: '👑', name: 'Maestro Global', nameEN: 'World Master',  nameEU: 'Mundu Maisua',   desc: 'Completa un quiz de nivel 10',         descEN: 'Complete a level 10 quiz',          descEU: 'Osatu 10. mailako galdeketa',   rarity: 'epic'     },
        { id: 'gq_europe',   game: 'geoQuiz', icon: '🇪🇺', name: 'Europeo',        nameEN: 'European',      nameEU: 'Europarra',      desc: 'Responde correctamente 5 capitales europeas', descEN: 'Correctly answer 5 European capitals', descEU: 'Erantzun ongi 5 Europako hiribururi', rarity: 'uncommon' },
        { id: 'gq_euskadi',  game: 'geoQuiz', icon: '🏴', name: 'Euskaldun',      nameEN: 'Basque Expert', nameEU: 'Euskalduna',     desc: 'Completa un quiz de Euskadi',          descEN: 'Complete a Euskadi quiz',           descEU: 'Osatu Euskadiko galdeketa',      rarity: 'rare'     },
    ],

    // ── Rarity colors ────────────────────────────────────────────────────────
    RARITY_COLOR: {
        common:   '#94a3b8',
        uncommon: '#34d399',
        rare:     '#818cf8',
        epic:     '#f59e0b',
    },

    RARITY_NAME: {
        common:   { es: 'Común',    en: 'Common',    eu: 'Arrunta'    },
        uncommon: { es: 'Inusual',  en: 'Uncommon',  eu: 'Ezohikoa'   },
        rare:     { es: 'Raro',     en: 'Rare',      eu: 'Arraroa'    },
        epic:     { es: 'Épico',    en: 'Epic',      eu: 'Epikoa'     },
    },

    // ── Check achievements after a game session ──────────────────────────────

    /**
     * Check which achievements to unlock based on game result + cumulative stats.
     * @param {string} gameId - 'mathMaster' | 'snake' | 'tableMaster'
     * @param {Object} result - game result object
     * @param {Object} stats  - cumulative stats object from PlatformFirestore
     * @param {Object} userProfile - user profile with totalPoints
     * @returns {string[]} array of newly unlocked achievement IDs
     */
    checkGameAchievements(gameId, result, stats, userProfile) {
        const newlyUnlocked = [];
        const already = stats.unlockedAchievements || [];

        const unlock = (id) => {
            if (!already.includes(id) && !newlyUnlocked.includes(id)) {
                newlyUnlocked.push(id);
            }
        };

        // Hub achievements (based on total points)
        const totalPts = (userProfile?.totalPoints || 0) + (result.points || 0);
        if (totalPts >= 100)   unlock('pts_100');
        if (totalPts >= 1000)  unlock('pts_1000');
        if (totalPts >= 5000)  unlock('pts_5000');
        if (totalPts >= 20000) unlock('pts_20000');

        if (stats.totalGames === 1) unlock(`${gameId === 'mathMaster' ? 'mm' : gameId === 'snake' ? 'sn' : 'tm'}_first`);

        // Per-game achievements
        if (gameId === 'mathMaster') {
            if (stats.totalGames >= 1)  unlock('mm_first');
            if (stats.totalGames >= 10) unlock('mm_10games');
            if (result.correctAnswers >= 30 && result.totalAttempts === result.correctAnswers) unlock('mm_perfect');
            if (result.bestStreak >= 10) unlock('mm_streak10');
            if (result.level >= 5)  unlock('mm_level5');
            if (result.level >= 10) unlock('mm_level10');
            if (result.operation === 'mezcla') unlock('mm_mix');
            // allops: check if byOperation has all 4
            const ops = stats.byOperation || {};
            if (['suma','resta','multiplicacion','division'].every(op => (ops[op]?.games || 0) > 0)) unlock('mm_allops');
        }

        if (gameId === 'snake') {
            if (stats.totalGames >= 1)    unlock('sn_first');
            if (result.score >= 50)       unlock('sn_score50');
            if (result.score >= 200)      unlock('sn_score200');
            if (result.score >= 500)      unlock('sn_score500');
            if (result.snakeLength >= 15) unlock('sn_length15');
        }

        if (gameId === 'tableMaster') {
            if (stats.totalGames >= 1)  unlock('tm_first');
            if (stats.totalGames >= 10) unlock('tm_practice10');
        }

        if (gameId === 'typingMaster') {
            if (stats.totalGames >= 1)     unlock('ty_first');
            if (result.wpm >= 20)          unlock('ty_wpm20');
            if (result.wpm >= 40)          unlock('ty_wpm40');
            if (result.wpm >= 60)          unlock('ty_wpm60');
            if (result.accuracy >= 100)    unlock('ty_perfect');
            if (result.level >= 10)        unlock('ty_level10');
        }

        if (gameId === 'wordSearch') {
            if (result.wordsFound >= 1)                       unlock('ws_first');
            if (result.completed)                             unlock('ws_complete1');
            if (result.completed && result.elapsed <= 90)     unlock('ws_speed');
            if (result.completed && result.level >= 5)        unlock('ws_complete5');
            if ((stats.totalCorrect || 0) >= 50)              unlock('ws_words50');
            if (result.completed && result.level >= 10)       unlock('ws_legend');
        }

        if (gameId === 'crossword') {
            if (result.wordsFound >= 1)                                                unlock('cw_first');
            if (result.completed)                                                      unlock('cw_complete1');
            if (result.completed && !result.usedCheck && !result.usedReveal)           unlock('cw_perfect');
            if (result.completed && result.elapsed < 300)                              unlock('cw_speed');
            if ((stats.totalGames || 0) >= 10)                                         unlock('cw_complete10');
            if ((stats.totalCorrect || 0) >= 100)                                      unlock('cw_words100');
            if (result.completed && result.level >= 10)                                unlock('cw_legend');
        }

        if (gameId === 'geoQuiz') {
            unlock('gq_first');
            if (result.correct === result.total && result.total >= 10)              unlock('gq_perfect');
            if ((stats.totalGames || 0) >= 10)                                      unlock('gq_quizzes10');
            if (result.level >= 10)                                                 unlock('gq_level10');
        }

        return newlyUnlocked;
    },

    /**
     * Get all achievement definitions for a specific game (or 'hub' for global).
     */
    getByGame(gameId) {
        return this.DEFINITIONS.filter(a => a.game === gameId || a.game === 'hub');
    },

    /**
     * Get achievement by ID.
     */
    getById(id) {
        return this.DEFINITIONS.find(a => a.id === id);
    },

    /**
     * Get localized name/desc of an achievement.
     */
    getLocalized(achievement, lang = 'es-ES') {
        const l = lang.startsWith('en') ? 'EN' : lang.startsWith('eu') ? 'EU' : '';
        return {
            name: achievement[`name${l}`] || achievement.name,
            desc: achievement[`desc${l}`] || achievement.desc,
        };
    }
};
