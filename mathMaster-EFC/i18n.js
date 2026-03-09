/**
 * MathMaster - Sistema de Internacionalización (i18n)
 * Soporta: Castellano (es-ES), Inglés (en-US), Euskera (eu-ES)
 */

const MathMasterI18n = {
    // Idioma actual
    currentLanguage: 'es-ES',

    // Idiomas disponibles
    availableLanguages: {
        'es-ES': { name: 'Castellano', flag: '🇪🇸' },
        'en-US': { name: 'English', flag: '🇺🇸' },
        'eu-ES': { name: 'Euskara', flag: '🏴' }
    },

    // ==================== TRADUCCIONES ====================

    translations: {
        // ==================== CASTELLANO (es-ES) ====================
        'es-ES': {
            // Título y subtítulo
            appTitle: 'MathMaster',
            appSubtitle: 'Desafío por Puntuación Fija',

            // Pantalla de Login
            selectOrCreateProfile: 'Selecciona o crea tu perfil',
            noSavedProfiles: 'No hay perfiles guardados',
            playerNamePlaceholder: 'Nombre del jugador',
            createProfile: 'Crear Perfil',
            playAsGuest: 'Jugar como Invitado',
            created: 'Creado',
            deleteProfile: 'Eliminar perfil',

            // Selección de juego
            chooseOperation: 'Elige la Operación',
            difficultyLevel: 'Nivel de Dificultad',
            tableOf: 'Tabla del...',
            questionCount: 'Cantidad de Preguntas',
            start: '¡EMPEZAR!',
            statistics: 'Estadísticas',
            achievements: 'Logros',

            // Operaciones
            operations: {
                suma: 'Suma',
                resta: 'Resta',
                multiplicacion: 'Multiplicación',
                division: 'División',
                tablas: 'Tablas',
                mezcla: 'Mezcla'
            },

            // Niveles
            levels: {
                1: { name: 'Básica y Tablas', description: 'Sumas/Restas de 1 a 10. Resultado siempre positivo. Multiplicación y división de factores de 1 a 10.' },
                2: { name: 'Números Medianos', description: 'Sumas/Restas de 1 a 100. Resultado siempre positivo. Multiplicación hasta 15. División con cociente entero.' },
                3: { name: 'Grandes Enteros', description: 'Sumas/Restas de 1 a 1,000. Factores de multiplicación hasta 30. División con cociente entero.' },
                4: { name: 'Decimales Simples', description: 'Números hasta 10,000 con decimales simples (X.X). División con 1 decimal en resultado.' },
                5: { name: 'Decimales Complejos', description: 'Números hasta 100,000 con decimales (X.XXX). Multiplicación de números grandes. División con 2 decimales.' },
                6: { name: 'Números Negativos', description: 'Suma y Resta con números negativos frecuentes (Ej: -10 + 25). Multiplicación de 3 dígitos. División con 3 decimales.' },
                7: { name: 'Cadenas de Operaciones', description: 'Cadenas de suma/resta (Ej: 15 - 8 + 3). Multiplicación de 4x2 dígitos. División con decimales en divisor.' },
                8: { name: '4 Dígitos / Mezcla básica', description: 'Operación individual: números de 4 dígitos (suma/resta 1000-9999, mult 4×3 dígitos). Mezcla: jerarquía sin paréntesis (a×b + c).' },
                9: { name: '5 Dígitos / Pre-Álgebra', description: 'Operación individual: números de 5 dígitos. Mezcla: incógnita X con las 4 operaciones (X + 15 = 27).' },
                10: { name: 'Maestro: Grandes Números', description: 'Operación individual: números muy grandes (mult 4×4 dígitos, dividendos enormes). Mezcla: PEMDAS con paréntesis.' }
            },
            selectLevelDescription: 'Selecciona un nivel para ver su descripción',
            selectLevelDesc: 'Selecciona un nivel para ver su descripción',
            allTables: 'Todas',
            tablesAll: 'Tablas de Multiplicar - Todas',
            tableOf: 'Tabla del {number}',
            operationLevel: '{operation} - Nivel {level}',

            // Pantalla de juego
            time: 'Tiempo',
            score: 'Puntuación',
            streak: 'Racha',
            yourAnswer: 'Tu respuesta',
            verify: 'Verificar',
            pause: 'Pausar',
            exit: 'Salir',
            readQuestion: 'Leer pregunta en voz alta',

            // Feedback
            correct: '¡Correcto!',
            excellentStreak: '¡Excelente! Racha de {streak}',
            goodStreak: '¡Muy bien! Racha de {streak}',
            incorrectTryAgain: '¡Incorrecto! Inténtalo de nuevo',
            enterValidNumber: 'Ingresa un número válido',
            hintRange: 'Pista: Es un número entre {min} y {max}',
            hintNegative: 'Pista: Es un número negativo',
            hintApprox: 'Pista: El resultado es aproximadamente {value}',

            // Pausa
            gamePaused: 'Juego Pausado',
            answers: 'Respuestas',
            continue: 'Continuar',
            restart: 'Reiniciar',
            mainMenu: 'Menú Principal',

            // Resultados
            congratulations: '¡Felicitaciones!',
            resultPerfect: '¡Perfecto!',
            resultExcellent: '¡Excelente!',
            resultVeryGood: '¡Muy Bien!',
            resultGoodTry: '¡Buen Intento!',
            correctAnswers: 'Respuestas Correctas',
            totalTime: 'Tiempo Total',
            bestStreak: 'Mejor Racha',
            precision: 'Precisión',
            totalAttempts: 'Intentos Totales',
            avgPerQuestion: 'Promedio por Pregunta',
            newTimeRecord: '¡Nuevo Récord de Tiempo!',
            achievementsUnlocked: 'Logros Desbloqueados',
            playAgain: 'Jugar de Nuevo',

            // Estadísticas
            back: 'Volver',
            generalSummary: 'Resumen General',
            gamesPlayed: 'Partidas Jugadas',
            correctAnswersTotal: 'Respuestas Correctas',
            globalPrecision: 'Precisión Global',
            totalTimeSpent: 'Tiempo Total',
            byOperation: 'Por Operación',
            games: 'partidas',
            corrects: 'correctas',
            noGamesYet: 'Aún no has jugado ninguna partida',
            statsGamesCorrect: '{games} partidas / {correct} correctas',
            loginForStats: 'Inicia sesión para ver tus estadísticas',

            // Configuración
            settings: 'Configuración',
            audio: 'Audio',
            soundEffects: 'Efectos de Sonido',
            soundEffectsDesc: 'Sonidos para aciertos, errores y logros',
            volume: 'Volumen',
            textToSpeech: 'Lectura en Voz Alta (TTS)',
            textToSpeechDesc: 'Lee las preguntas y resultados',
            accessibility: 'Accesibilidad',
            highContrastMode: 'Modo Alto Contraste',
            highContrastDesc: 'Mejora la visibilidad para personas con dificultades visuales',
            language: 'Idioma',
            languageDesc: 'Selecciona el idioma de la interfaz',
            account: 'Cuenta',
            currentUser: 'Usuario Actual',
            guest: 'Invitado',
            guestNoProgress: 'Invitado (sin guardar progreso)',
            change: 'Cambiar',
            deleteAccount: 'Eliminar Cuenta',
            deleteAccountDesc: 'Esta acción no se puede deshacer',
            delete: 'Eliminar',
            close: 'Cerrar',

            // Menú de usuario
            myProfile: 'Mi Perfil',
            logout: 'Cerrar Sesión',

            // Pantalla de perfil
            lastActivity: 'Última actividad',
            quickStats: 'Resumen Rápido',
            viewAllStats: 'Ver Estadísticas Completas',
            viewAllAchievements: 'Ver Todos los Logros',

            // Confirmaciones
            areYouSure: '¿Estás seguro?',
            actionCannotBeUndone: 'Esta acción no se puede deshacer.',
            deleteProfileConfirmTitle: '¿Eliminar perfil?',
            deleteProfileConfirmMessage: 'Se eliminará permanentemente el perfil "{username}" y todos sus datos.',
            deleteAccountConfirmTitle: '¿Eliminar tu cuenta?',
            deleteAccountConfirmMessage: 'Se eliminarán permanentemente todos tus datos, estadísticas y logros. Esta acción no se puede deshacer.',
            cancel: 'Cancelar',
            confirm: 'Confirmar',

            // Alertas
            enterUsername: 'Por favor, ingresa un nombre de usuario',
            usernameLengthError: 'El nombre debe tener entre 2 y 20 caracteres',
            usernameExists: 'Ya existe un usuario con ese nombre',
            loginToViewStats: 'Inicia sesión para ver tus estadísticas',

            // TTS
            ttsCorrect: 'Correcto',
            ttsIncorrect: 'Incorrecto, intenta de nuevo',
            ttsAchievementUnlocked: 'Logro desbloqueado',
            ttsGameStarted: 'Juego iniciado',
            ttsGameCompleted: 'Felicitaciones, has completado el desafío',
            ttsStreak: 'Racha de {streak}',
            ttsResults: 'Has completado el desafío con {correct} respuestas correctas en {minutes} minutos y {seconds} segundos. Tu precisión fue del {accuracy} por ciento.',

            // TTS - Operaciones matemáticas
            ttsMathTimes: 'por',
            ttsMathDividedBy: 'dividido',
            ttsMathPlus: 'más',
            ttsMathMinus: 'menos',
            ttsMathEquals: 'igual a',
            ttsMathQuestionMark: 'interrogación',
            ttsMathUnknownX: 'equis',

            // Logros
            achievementNames: {
                first_correct: 'Primer Paso',
                streak_5: 'En Racha',
                streak_10: 'Imparable',
                perfect_game: 'Perfeccionista',
                games_10: 'Estudiante Dedicado',
                games_50: 'Maestro del Estudio',
                level_5: 'Escalador',
                level_10: 'Conquistador',
                speed_demon: 'Velocista',
                all_operations: 'Todoterreno',
                hundred_correct: 'Centenario',
                multiplication_master: 'Maestro de Tablas',
                early_bird: 'Madrugador',
                night_owl: 'Búho Nocturno',
                comeback_kid: 'Nunca Te Rindas'
            },
            achievementDescriptions: {
                first_correct: 'Responde correctamente tu primera pregunta',
                streak_5: 'Consigue una racha de 5 respuestas correctas',
                streak_10: 'Consigue una racha de 10 respuestas correctas',
                perfect_game: 'Completa una partida sin errores',
                games_10: 'Completa 10 partidas',
                games_50: 'Completa 50 partidas',
                level_5: 'Completa una partida en nivel 5 o superior',
                level_10: 'Completa una partida en nivel 10',
                speed_demon: 'Completa 20 preguntas en menos de 2 minutos',
                all_operations: 'Completa al menos una partida de cada operación',
                hundred_correct: 'Responde correctamente 100 preguntas en total',
                multiplication_master: 'Completa 10 partidas de tablas de multiplicar',
                early_bird: 'Juega tu primera partida antes de las 8 AM',
                night_owl: 'Juega una partida después de las 10 PM',
                comeback_kid: 'Gana una partida después de usar 3+ pistas'
            },
            achievementUnlockedTitle: '¡Logro Desbloqueado!',

            // Indicadores de operación
            multiplicationTablesAll: 'Tablas de Multiplicar - Todas',
            tableOfNumber: 'Tabla del {number}',
            operationLevel: '{operation} - Nivel {level}',

            // Footer
            signInWithGoogle: 'Entrar con Google',
            signOut: 'Cerrar sesión',
            developedBy: 'Games Hub | MathMaster v3.0'
        },

        // ==================== ENGLISH (en-US) ====================
        'en-US': {
            // Title and subtitle
            appTitle: 'MathMaster',
            appSubtitle: 'Fixed Score Challenge',

            // Login screen
            selectOrCreateProfile: 'Select or create your profile',
            noSavedProfiles: 'No saved profiles',
            playerNamePlaceholder: 'Player name',
            createProfile: 'Create Profile',
            playAsGuest: 'Play as Guest',
            created: 'Created',
            deleteProfile: 'Delete profile',

            // Game selection
            chooseOperation: 'Choose Operation',
            difficultyLevel: 'Difficulty Level',
            tableOf: 'Table of...',
            questionCount: 'Number of Questions',
            start: 'START!',
            statistics: 'Statistics',
            achievements: 'Achievements',

            // Operations
            operations: {
                suma: 'Addition',
                resta: 'Subtraction',
                multiplicacion: 'Multiplication',
                division: 'Division',
                tablas: 'Tables',
                mezcla: 'Mix'
            },

            // Levels
            levels: {
                1: { name: 'Basic and Tables', description: 'Addition/Subtraction from 1 to 10. Always positive result. Multiplication and division with factors from 1 to 10.' },
                2: { name: 'Medium Numbers', description: 'Addition/Subtraction from 1 to 100. Always positive result. Multiplication up to 15. Division with integer quotient.' },
                3: { name: 'Large Integers', description: 'Addition/Subtraction from 1 to 1,000. Multiplication factors up to 30. Division with integer quotient.' },
                4: { name: 'Simple Decimals', description: 'Numbers up to 10,000 with simple decimals (X.X). Division with 1 decimal in result.' },
                5: { name: 'Complex Decimals', description: 'Numbers up to 100,000 with decimals (X.XXX). Large number multiplication. Division with 2 decimals.' },
                6: { name: 'Negative Numbers', description: 'Addition and Subtraction with frequent negative numbers (Ex: -10 + 25). 3-digit multiplication. Division with 3 decimals.' },
                7: { name: 'Operation Chains', description: 'Addition/subtraction chains (Ex: 15 - 8 + 3). 4x2 digit multiplication. Division with decimal divisor.' },
                8: { name: '4 Digits / Basic Mix', description: 'Single operation: 4-digit numbers. Mix mode: order of operations without parentheses.' },
                9: { name: '5 Digits / Pre-Algebra', description: 'Single operation: 5-digit numbers. Mix mode: solve for X with all 4 operations.' },
                10: { name: 'Master: Big Numbers', description: 'Single operation: very large numbers. Mix mode: full PEMDAS with parentheses.' }
            },
            selectLevelDescription: 'Select a level to see its description',
            selectLevelDesc: 'Select a level to see its description',
            allTables: 'All',
            tablesAll: 'Multiplication Tables - All',
            tableOf: 'Table of {number}',
            operationLevel: '{operation} - Level {level}',

            // Game screen
            time: 'Time',
            score: 'Score',
            streak: 'Streak',
            yourAnswer: 'Your answer',
            verify: 'Verify',
            pause: 'Pause',
            exit: 'Exit',
            readQuestion: 'Read question aloud',

            // Feedback
            correct: 'Correct!',
            excellentStreak: 'Excellent! Streak of {streak}',
            goodStreak: 'Very good! Streak of {streak}',
            incorrectTryAgain: 'Incorrect! Try again',
            enterValidNumber: 'Enter a valid number',
            hintRange: 'Hint: It\'s a number between {min} and {max}',
            hintNegative: 'Hint: It\'s a negative number',
            hintApprox: 'Hint: The result is approximately {value}',

            // Pause
            gamePaused: 'Game Paused',
            answers: 'Answers',
            continue: 'Continue',
            restart: 'Restart',
            mainMenu: 'Main Menu',

            // Results
            congratulations: 'Congratulations!',
            resultPerfect: 'Perfect!',
            resultExcellent: 'Excellent!',
            resultVeryGood: 'Very Good!',
            resultGoodTry: 'Good Try!',
            correctAnswers: 'Correct Answers',
            totalTime: 'Total Time',
            bestStreak: 'Best Streak',
            precision: 'Accuracy',
            totalAttempts: 'Total Attempts',
            avgPerQuestion: 'Average per Question',
            newTimeRecord: 'New Time Record!',
            achievementsUnlocked: 'Achievements Unlocked',
            playAgain: 'Play Again',

            // Statistics
            back: 'Back',
            generalSummary: 'General Summary',
            gamesPlayed: 'Games Played',
            correctAnswersTotal: 'Correct Answers',
            globalPrecision: 'Global Accuracy',
            totalTimeSpent: 'Total Time',
            byOperation: 'By Operation',
            games: 'games',
            corrects: 'correct',
            noGamesYet: 'You haven\'t played any games yet',
            statsGamesCorrect: '{games} games / {correct} correct',
            loginForStats: 'Log in to view your statistics',

            // Settings
            settings: 'Settings',
            audio: 'Audio',
            soundEffects: 'Sound Effects',
            soundEffectsDesc: 'Sounds for correct answers, errors and achievements',
            volume: 'Volume',
            textToSpeech: 'Text-to-Speech (TTS)',
            textToSpeechDesc: 'Reads questions and results aloud',
            accessibility: 'Accessibility',
            highContrastMode: 'High Contrast Mode',
            highContrastDesc: 'Improves visibility for people with visual difficulties',
            language: 'Language',
            languageDesc: 'Select interface language',
            account: 'Account',
            currentUser: 'Current User',
            guest: 'Guest',
            guestNoProgress: 'Guest (progress not saved)',
            change: 'Change',
            deleteAccount: 'Delete Account',
            deleteAccountDesc: 'This action cannot be undone',
            delete: 'Delete',
            close: 'Close',

            // User menu
            myProfile: 'My Profile',
            logout: 'Log Out',

            // Profile screen
            lastActivity: 'Last activity',
            quickStats: 'Quick Stats',
            viewAllStats: 'View All Statistics',
            viewAllAchievements: 'View All Achievements',

            // Confirmations
            areYouSure: 'Are you sure?',
            actionCannotBeUndone: 'This action cannot be undone.',
            deleteProfileConfirmTitle: 'Delete profile?',
            deleteProfileConfirmMessage: 'The profile "{username}" and all its data will be permanently deleted.',
            deleteAccountConfirmTitle: 'Delete your account?',
            deleteAccountConfirmMessage: 'All your data, statistics and achievements will be permanently deleted. This action cannot be undone.',
            cancel: 'Cancel',
            confirm: 'Confirm',

            // Alerts
            enterUsername: 'Please enter a username',
            usernameLengthError: 'Username must be between 2 and 20 characters',
            usernameExists: 'A user with that name already exists',
            loginToViewStats: 'Log in to view your statistics',

            // TTS
            ttsCorrect: 'Correct',
            ttsIncorrect: 'Incorrect, try again',
            ttsAchievementUnlocked: 'Achievement unlocked',
            ttsGameStarted: 'Game started',
            ttsGameCompleted: 'Congratulations, you have completed the challenge',
            ttsStreak: 'Streak of {streak}',
            ttsResults: 'You completed the challenge with {correct} correct answers in {minutes} minutes and {seconds} seconds. Your accuracy was {accuracy} percent.',

            // TTS - Math operations
            ttsMathTimes: 'times',
            ttsMathDividedBy: 'divided by',
            ttsMathPlus: 'plus',
            ttsMathMinus: 'minus',
            ttsMathEquals: 'equals',
            ttsMathQuestionMark: 'question mark',
            ttsMathUnknownX: 'X',

            // Achievements
            achievementNames: {
                first_correct: 'First Step',
                streak_5: 'On Fire',
                streak_10: 'Unstoppable',
                perfect_game: 'Perfectionist',
                games_10: 'Dedicated Student',
                games_50: 'Study Master',
                level_5: 'Climber',
                level_10: 'Conqueror',
                speed_demon: 'Speed Demon',
                all_operations: 'All-Rounder',
                hundred_correct: 'Centurion',
                multiplication_master: 'Tables Master',
                early_bird: 'Early Bird',
                night_owl: 'Night Owl',
                comeback_kid: 'Never Give Up'
            },
            achievementDescriptions: {
                first_correct: 'Answer your first question correctly',
                streak_5: 'Get a streak of 5 correct answers',
                streak_10: 'Get a streak of 10 correct answers',
                perfect_game: 'Complete a game without errors',
                games_10: 'Complete 10 games',
                games_50: 'Complete 50 games',
                level_5: 'Complete a game at level 5 or higher',
                level_10: 'Complete a game at level 10',
                speed_demon: 'Complete 20 questions in less than 2 minutes',
                all_operations: 'Complete at least one game of each operation',
                hundred_correct: 'Answer 100 questions correctly in total',
                multiplication_master: 'Complete 10 multiplication tables games',
                early_bird: 'Play your first game before 8 AM',
                night_owl: 'Play a game after 10 PM',
                comeback_kid: 'Win a game after using 3+ hints'
            },
            achievementUnlockedTitle: 'Achievement Unlocked!',

            // Operation indicators
            multiplicationTablesAll: 'Multiplication Tables - All',
            tableOfNumber: 'Table of {number}',
            operationLevel: '{operation} - Level {level}',

            // Footer
            signInWithGoogle: 'Sign in with Google',
            signOut: 'Sign out',
            developedBy: 'Games Hub | MathMaster v3.0'
        },

        // ==================== EUSKERA (eu-ES) ====================
        'eu-ES': {
            // Titulua eta azpititulua
            appTitle: 'MathMaster',
            appSubtitle: 'Puntuazio Finkoaren Erronka',

            // Sarrera pantaila
            selectOrCreateProfile: 'Aukeratu edo sortu zure profila',
            noSavedProfiles: 'Ez dago gordetako profilik',
            playerNamePlaceholder: 'Jokalariaren izena',
            createProfile: 'Profila Sortu',
            playAsGuest: 'Gonbidatu gisa Jokatu',
            created: 'Sortua',
            deleteProfile: 'Profila ezabatu',

            // Joko aukeraketa
            chooseOperation: 'Aukeratu Eragiketa',
            difficultyLevel: 'Zailtasun Maila',
            tableOf: '...ren Taula',
            questionCount: 'Galdera Kopurua',
            start: 'HASI!',
            statistics: 'Estatistikak',
            achievements: 'Lorpenak',

            // Eragiketak
            operations: {
                suma: 'Batuketa',
                resta: 'Kenketa',
                multiplicacion: 'Biderketa',
                division: 'Zatiketa',
                tablas: 'Taulak',
                mezcla: 'Nahasketa'
            },

            // Mailak
            levels: {
                1: { name: 'Oinarrizkoa eta Taulak', description: '1etik 10era batuketa/kenketa. Emaitza beti positiboa. 1etik 10erako faktoreekin biderketa eta zatiketa.' },
                2: { name: 'Zenbaki Ertainak', description: '1etik 100era batuketa/kenketa. Emaitza beti positiboa. 15 arterainoko biderketa. Zatidura osoko zatiketa.' },
                3: { name: 'Osoko Handiak', description: '1etik 1.000ra batuketa/kenketa. 30 arterainoko biderketa faktoreak. Zatidura osoko zatiketa.' },
                4: { name: 'Dezimal Sinpleak', description: '10.000 arteko zenbakiak dezimal sinpleekin (X.X). Zatiketa emaitza dezimal batekin.' },
                5: { name: 'Dezimal Konplexuak', description: '100.000 arteko zenbakiak dezimalekin (X.XXX). Zenbaki handien biderketa. 2 dezimaldun zatiketa.' },
                6: { name: 'Zenbaki Negatiboak', description: 'Batuketa eta kenketa zenbaki negatibo ugariekin (Adib: -10 + 25). 3 digituko biderketa. 3 dezimaldun zatiketa.' },
                7: { name: 'Eragiketa Kateak', description: 'Batuketa/kenketa kateak (Adib: 15 - 8 + 3). 4x2 digituko biderketa. Zatitzaile dezimaldun zatiketa.' },
                8: { name: '4 Digitu / Oinarrizko Nahasketa', description: 'Eragiketa bakarra: 4 digituko zenbakiak. Nahasketa modua: eragiketa-ordena parentesirik gabe.' },
                9: { name: '5 Digitu / Aurre-Aljebra', description: 'Eragiketa bakarra: 5 digituko zenbakiak. Nahasketa modua: ebatzi X 4 eragiketarekin (X + 15 = 27).' },
                10: { name: 'Maisua: Zenbaki Handiak', description: 'Eragiketa bakarra: zenbaki oso handiak. Nahasketa modua: PEMDAS osoa parentesiekin.' }
            },
            selectLevelDescription: 'Aukeratu maila bat bere deskribapena ikusteko',
            selectLevelDesc: 'Aukeratu maila bat bere deskribapena ikusteko',
            allTables: 'Denak',
            tablesAll: 'Biderketa Taulak - Denak',
            tableOf: '{number}ren Taula',
            operationLevel: '{operation} - {level}. Maila',

            // Joko pantaila
            time: 'Denbora',
            score: 'Puntuazioa',
            streak: 'Segida',
            yourAnswer: 'Zure erantzuna',
            verify: 'Egiaztatu',
            pause: 'Pausatu',
            exit: 'Irten',
            readQuestion: 'Galdera ozen irakurri',

            // Feedbacka
            correct: 'Zuzena!',
            excellentStreak: 'Bikain! {streak}ko segida',
            goodStreak: 'Oso ongi! {streak}ko segida',
            incorrectTryAgain: 'Okerra! Saiatu berriro',
            enterValidNumber: 'Sartu zenbaki baliogarri bat',
            hintRange: 'Pista: {min} eta {max} arteko zenbaki bat da',
            hintNegative: 'Pista: Zenbaki negatiboa da',
            hintApprox: 'Pista: Emaitza gutxi gorabehera {value} da',

            // Pausa
            gamePaused: 'Jokoa Geldituta',
            answers: 'Erantzunak',
            continue: 'Jarraitu',
            restart: 'Berrabiarazi',
            mainMenu: 'Menu Nagusia',

            // Emaitzak
            congratulations: 'Zorionak!',
            resultPerfect: 'Perfektua!',
            resultExcellent: 'Bikaina!',
            resultVeryGood: 'Oso Ongi!',
            resultGoodTry: 'Saiakera Ona!',
            correctAnswers: 'Erantzun Zuzenak',
            totalTime: 'Denbora Totala',
            bestStreak: 'Segida Onena',
            precision: 'Zehaztasuna',
            totalAttempts: 'Saiakera Guztira',
            avgPerQuestion: 'Batez bestekoa Galderako',
            newTimeRecord: 'Denbora Errekord Berria!',
            achievementsUnlocked: 'Desblokeatutako Lorpenak',
            playAgain: 'Berriro Jokatu',

            // Estatistikak
            back: 'Atzera',
            generalSummary: 'Laburpen Orokorra',
            gamesPlayed: 'Jokatutako Partidak',
            correctAnswersTotal: 'Erantzun Zuzenak',
            globalPrecision: 'Zehaztasun Globala',
            totalTimeSpent: 'Denbora Totala',
            byOperation: 'Eragiketaka',
            games: 'partida',
            corrects: 'zuzen',
            noGamesYet: 'Oraindik ez duzu partidarik jokatu',
            statsGamesCorrect: '{games} partida / {correct} zuzen',
            loginForStats: 'Hasi saioa zure estatistikak ikusteko',

            // Ezarpenak
            settings: 'Ezarpenak',
            audio: 'Audioa',
            soundEffects: 'Soinu Efektuak',
            soundEffectsDesc: 'Soinuak asmatze, akats eta lorpenetarako',
            volume: 'Bolumena',
            textToSpeech: 'Ozen Irakurtzea (TTS)',
            textToSpeechDesc: 'Galderak eta emaitzak irakurtzen ditu',
            accessibility: 'Erabilerraztasuna',
            highContrastMode: 'Kontraste Altuko Modua',
            highContrastDesc: 'Ikusmen zailtasunak dituzten pertsonentzako ikusgarritasuna hobetzen du',
            language: 'Hizkuntza',
            languageDesc: 'Aukeratu interfazearen hizkuntza',
            account: 'Kontua',
            currentUser: 'Uneko Erabiltzailea',
            guest: 'Gonbidatua',
            guestNoProgress: 'Gonbidatua (aurrerapena ez da gordetzen)',
            change: 'Aldatu',
            deleteAccount: 'Kontua Ezabatu',
            deleteAccountDesc: 'Ekintza hau ezin da desegin',
            delete: 'Ezabatu',
            close: 'Itxi',

            // Erabiltzaile menua
            myProfile: 'Nire Profila',
            logout: 'Saioa Itxi',

            // Profil pantaila
            lastActivity: 'Azken jarduera',
            quickStats: 'Laburpen Azkarra',
            viewAllStats: 'Estatistika Guztiak Ikusi',
            viewAllAchievements: 'Lorpen Guztiak Ikusi',

            // Baieztapenak
            areYouSure: 'Ziur zaude?',
            actionCannotBeUndone: 'Ekintza hau ezin da desegin.',
            deleteProfileConfirmTitle: 'Profila ezabatu?',
            deleteProfileConfirmMessage: '"{username}" profila eta bere datu guztiak betiko ezabatuko dira.',
            deleteAccountConfirmTitle: 'Zure kontua ezabatu?',
            deleteAccountConfirmMessage: 'Zure datu, estatistika eta lorpen guztiak betiko ezabatuko dira. Ekintza hau ezin da desegin.',
            cancel: 'Utzi',
            confirm: 'Baieztatu',

            // Alertak
            enterUsername: 'Mesedez, sartu erabiltzaile izen bat',
            usernameLengthError: 'Izenak 2 eta 20 karaktere artean izan behar ditu',
            usernameExists: 'Badago izen hori duen erabiltzaile bat',
            loginToViewStats: 'Hasi saioa zure estatistikak ikusteko',

            // TTS
            ttsCorrect: 'Zuzena',
            ttsIncorrect: 'Okerra, saiatu berriro',
            ttsAchievementUnlocked: 'Lorpena desblokeatuta',
            ttsGameStarted: 'Jokoa hasita',
            ttsGameCompleted: 'Zorionak, erronka osatu duzu',
            ttsStreak: '{streak}ko segida',
            ttsResults: 'Erronka osatu duzu {correct} erantzun zuzenekin {minutes} minutu eta {seconds} segundotan. Zure zehaztasuna ehuneko {accuracy} izan da.',

            // TTS - Eragiketa matematikoak
            ttsMathTimes: 'bider',
            ttsMathDividedBy: 'zati',
            ttsMathPlus: 'gehi',
            ttsMathMinus: 'ken',
            ttsMathEquals: 'berdin',
            ttsMathQuestionMark: 'galdera ikurra',
            ttsMathUnknownX: 'X',

            // Lorpenak
            achievementNames: {
                first_correct: 'Lehen Urratsa',
                streak_5: 'Martxan',
                streak_10: 'Geldiezina',
                perfect_game: 'Perfekzionista',
                games_10: 'Ikasle Eskainia',
                games_50: 'Ikasketa Maisua',
                level_5: 'Eskalatzailea',
                level_10: 'Konkistatzailea',
                speed_demon: 'Abiadura Deabrua',
                all_operations: 'Denetarikoa',
                hundred_correct: 'Ehundarra',
                multiplication_master: 'Taulen Maisua',
                early_bird: 'Goiztiarra',
                night_owl: 'Gaueko Hontza',
                comeback_kid: 'Ez Etsi Inoiz'
            },
            achievementDescriptions: {
                first_correct: 'Erantzun zuzen zure lehen galdera',
                streak_5: 'Lortu 5 erantzun zuzeneko segida',
                streak_10: 'Lortu 10 erantzun zuzeneko segida',
                perfect_game: 'Osatu partida bat akatsik gabe',
                games_10: 'Osatu 10 partida',
                games_50: 'Osatu 50 partida',
                level_5: 'Osatu partida bat 5. mailan edo gorago',
                level_10: 'Osatu partida bat 10. mailan',
                speed_demon: 'Osatu 20 galdera 2 minutu baino gutxiagoan',
                all_operations: 'Osatu gutxienez eragiketa bakoitzeko partida bat',
                hundred_correct: 'Erantzun zuzen 100 galdera guztira',
                multiplication_master: 'Osatu 10 biderketa taulen partida',
                early_bird: 'Jokatu zure lehen partida goizeko 8ak baino lehen',
                night_owl: 'Jokatu partida bat gaueko 10ak eta gero',
                comeback_kid: 'Irabazi partida bat 3+ pista erabili ondoren'
            },
            achievementUnlockedTitle: 'Lorpena Desblokeatuta!',

            // Eragiketa adierazleak
            multiplicationTablesAll: 'Biderketa Taulak - Denak',
            tableOfNumber: '{number}ren Taula',
            operationLevel: '{operation} - {level}. Maila',

            // Oina
            signInWithGoogle: 'Sartu Googlerekin',
            signOut: 'Saioa itxi',
            developedBy: 'Games Hub | MathMaster v3.0'
        }
    },

    // ==================== MÉTODOS ====================

    /**
     * Inicializa el sistema de i18n
     */
    init() {
        this.loadLanguage();
    },

    /**
     * Carga el idioma guardado o detecta el del navegador
     */
    loadLanguage() {
        const saved = localStorage.getItem('mathmaster_language');
        if (saved && this.translations[saved]) {
            this.currentLanguage = saved;
        } else {
            // Detectar idioma del navegador
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('eu')) {
                this.currentLanguage = 'eu-ES';
            } else if (browserLang.startsWith('en')) {
                this.currentLanguage = 'en-US';
            } else {
                this.currentLanguage = 'es-ES';
            }
        }
        this.applyLanguage();
    },

    /**
     * Cambia el idioma actual
     * @param {string} lang - Código de idioma (es-ES, en-US, eu-ES)
     */
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('mathmaster_language', lang);
            this.applyLanguage();

            // Actualizar atributo lang del HTML
            document.documentElement.lang = lang.split('-')[0];

            return true;
        }
        return false;
    },

    /**
     * Obtiene una traducción por clave
     * @param {string} key - Clave de traducción (soporta notación punto: 'operations.suma')
     * @param {Object} params - Parámetros para interpolación
     * @returns {string} Texto traducido
     */
    t(key, params = {}) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback a español si no existe la clave
                value = this.translations['es-ES'];
                for (const fallbackKey of keys) {
                    if (value && typeof value === 'object' && fallbackKey in value) {
                        value = value[fallbackKey];
                    } else {
                        return key; // Devolver la clave si no existe
                    }
                }
                break;
            }
        }

        // Interpolación de parámetros
        if (typeof value === 'string' && params) {
            Object.keys(params).forEach(param => {
                value = value.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
            });
        }

        return value || key;
    },

    /**
     * Aplica las traducciones a todos los elementos con data-i18n
     */
    applyLanguage() {
        // Actualizar elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.t(key);

            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.placeholder = text;
            } else if (el.hasAttribute('title')) {
                el.title = text;
            } else if (el.hasAttribute('aria-label')) {
                el.setAttribute('aria-label', text);
            } else {
                el.textContent = text;
            }
        });

        // Actualizar elementos con data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Actualizar elementos con data-i18n-title
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });

        // Actualizar elementos con data-i18n-aria
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            el.setAttribute('aria-label', this.t(key));
        });

        // Disparar evento para que otros módulos actualicen sus textos
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    },

    /**
     * Obtiene el nombre de una operación traducido
     * @param {string} operation - Código de operación
     * @returns {string} Nombre traducido
     */
    getOperationName(operation) {
        return this.t(`operations.${operation}`);
    },

    /**
     * Obtiene la descripción de un nivel
     * @param {number} level - Número de nivel
     * @returns {Object} Objeto con name y description traducidos
     */
    getLevelInfo(level) {
        return this.t(`levels.${level}`);
    },

    /**
     * Obtiene el nombre de un logro traducido
     * @param {string} achievementId - ID del logro
     * @returns {string} Nombre traducido
     */
    getAchievementName(achievementId) {
        return this.t(`achievementNames.${achievementId}`);
    },

    /**
     * Obtiene la descripción de un logro traducida
     * @param {string} achievementId - ID del logro
     * @returns {string} Descripción traducida
     */
    getAchievementDescription(achievementId) {
        return this.t(`achievementDescriptions.${achievementId}`);
    },

    /**
     * Obtiene nombre y descripción de un logro traducidos
     * @param {string} achievementId - ID del logro
     * @returns {Object} Objeto con name y description traducidos
     */
    getAchievementInfo(achievementId) {
        return {
            name: this.t(`achievementNames.${achievementId}`),
            description: this.t(`achievementDescriptions.${achievementId}`)
        };
    },

    /**
     * Obtiene el idioma actual
     * @returns {string} Código de idioma actual
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    },

    /**
     * Obtiene la lista de idiomas disponibles
     * @returns {Object} Idiomas disponibles con nombre y bandera
     */
    getAvailableLanguages() {
        return this.availableLanguages;
    }
};

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', () => {
    MathMasterI18n.init();
});

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathMasterI18n;
}
