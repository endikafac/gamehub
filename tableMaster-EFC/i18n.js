/**
 * TableMaster – i18n module
 * Translations: ES / EN / EU
 * Integrates with PlatformI18n and listens to platformLanguageChanged.
 */

const TableMasterI18n = {
    currentLanguage: 'es-ES',

    translations: {
        'es-ES': {
            // ── Meta ──
            gameTitle:           'TableMaster',
            gameSubtitle:        'Aprende y practica la multiplicación y la división',

            // ── Inicio ──
            learnMultiply:       'Aprender a multiplicar',
            learnMultiplyDesc:   'Conceptos, método paso a paso y trucos',
            learnDivide:         'Aprender a dividir',
            learnDivideDesc:     'Conceptos, método de la caja y trucos',
            practiceMultiply:    'Practicar multiplicación',
            practiceMultiplyDesc:'Ejercicios paso a paso con el método escrito',
            practiceDivide:      'Practicar división',
            practiceDivideDesc:  'Ejercicios paso a paso con la caja española',

            // ── Navegación ──
            back:                'Volver',
            startPractice:       'Empezar a practicar',
            next:                'Siguiente',
            previous:            'Anterior',

            // ── Niveles de práctica ──
            chooseLevel:         'Elige el nivel que quieres practicar:',
            level1Name:          'Nivel 1 – Sin llevadas',
            level1Example:       'Ej: 12 × 3 = ?',
            level2Name:          'Nivel 2 – Con llevadas',
            level2Example:       'Ej: 47 × 6 = ?',
            level3Name:          'Nivel 3 – × dos cifras (método)',
            level3Example:       'Ej: 34 × 12 = ?',
            level3bName:         'Nivel 3B – × dos cifras (productos parciales)',
            level3bExample:      'Ej: 34 × 12: calcula 34×2, 34×10 y suma',
            level4Name:          'Nivel 4 – División exacta',
            level4Example:       'Ej: 168 ÷ 6 = ?',
            level5Name:          'Nivel 5 – División con resto',
            level5Example:       'Ej: 17 ÷ 5 = 3 (resto 2)',
            level6Name:          'Nivel 6 – Cero en el cociente',
            level6Example:       'Ej: 408 ÷ 4 = 102',

            // ── Pantalla tabla completa ──
            fullTableTitle:      'Tablas completas',
            fullTableDesc:       'Cuadrícula interactiva 10×10 con todas las multiplicaciones',
            fullTableHint:       'Haz clic en una celda para verla destacada. Pasa el ratón para resaltar fila y columna.',

            // ── Práctica ──
            exercise:            'Ejercicio',
            score:               'Puntos',
            seeHint:             'Ver pista',
            nextExercise:        'Siguiente ejercicio',
            correct:             'Correcto',
            correctFb:           '¡Muy bien! Respuesta correcta.',
            wrongFb:             'Incorrecto. Revisa el paso e inténtalo de nuevo.',
            hintFb:              'Pista: ',
            checkThisStep:       'Comprueba este paso:',
            carry:               'llevas',
            carryNote:           '(te llevas',
            writeDigit:          'Escribe el dígito',
            writeResult:         'Escribe el resultado completo',

            // ── Resultado ──
            roundComplete:       '¡Ronda completada!',
            resultPerfect:       '¡Perfecto! ¡Todos correctos!',
            resultGood:          '¡Muy bien! Sigue practicando.',
            resultKeepTrying:    'Sigue practicando, ¡lo conseguirás!',
            playAgain:           'Repetir',
            goHome:              'Inicio',

            // ── Puntos ──
            seconds:             's',
            notSaved:            'Modo invitado. Los puntos no se guardan.',

            // ── Accesibilidad ──
            answerLabel:         'Tu respuesta',
        },

        'en-US': {
            gameTitle:           'TableMaster',
            gameSubtitle:        'Learn and practice multiplication and division',
            learnMultiply:       'Learn to multiply',
            learnMultiplyDesc:   'Concepts, step-by-step method and tricks',
            learnDivide:         'Learn to divide',
            learnDivideDesc:     'Concepts, long division method and tricks',
            practiceMultiply:    'Practice multiplication',
            practiceMultiplyDesc:'Step-by-step exercises with written method',
            practiceDivide:      'Practice division',
            practiceDivideDesc:  'Step-by-step exercises with long division',
            back:                'Back',
            startPractice:       'Start practicing',
            next:                'Next',
            previous:            'Previous',
            chooseLevel:         'Choose the level you want to practice:',
            level1Name:          'Level 1 – No carrying',
            level1Example:       'e.g. 12 × 3 = ?',
            level2Name:          'Level 2 – With carrying',
            level2Example:       'e.g. 47 × 6 = ?',
            level3Name:          'Level 3 – × two digits (method)',
            level3Example:       'e.g. 34 × 12 = ?',
            level3bName:         'Level 3B – × two digits (partial products)',
            level3bExample:      'e.g. 34 × 12: calculate 34×2, 34×10 and sum',
            level4Name:          'Level 4 – Exact division',
            level4Example:       'e.g. 168 ÷ 6 = ?',
            level5Name:          'Level 5 – Division with remainder',
            level5Example:       'e.g. 17 ÷ 5 = 3 (remainder 2)',
            level6Name:          'Level 6 – Zero in quotient',
            level6Example:       'e.g. 408 ÷ 4 = 102',

            // ── Full multiplication table ──
            fullTableTitle:      'Full tables',
            fullTableDesc:       'Interactive 10×10 grid with all multiplications',
            fullTableHint:       'Click a cell to highlight it. Hover to highlight row and column.',
            exercise:            'Exercise',
            score:               'Score',
            seeHint:             'See hint',
            nextExercise:        'Next exercise',
            correct:             'Correct',
            correctFb:           'Great! Correct answer.',
            wrongFb:             'Incorrect. Check this step and try again.',
            hintFb:              'Hint: ',
            checkThisStep:       'Check this step:',
            carry:               'carry',
            carryNote:           '(carry',
            writeDigit:          'Write the digit',
            writeResult:         'Write the final result',
            roundComplete:       'Round complete!',
            resultPerfect:       'Perfect! All correct!',
            resultGood:          'Well done! Keep practicing.',
            resultKeepTrying:    'Keep trying, you can do it!',
            playAgain:           'Play again',
            goHome:              'Home',
            seconds:             's',
            notSaved:            'Guest mode. Points are not saved.',
            answerLabel:         'Your answer',
        },

        'eu-ES': {
            gameTitle:           'TableMaster',
            gameSubtitle:        'Ikasi eta praktikatu biderketa eta zatiketa',
            learnMultiply:       'Biderkatzen ikasi',
            learnMultiplyDesc:   'Kontzeptuak, urratska metodoa eta trikimailuak',
            learnDivide:         'Zatiketaren ikasi',
            learnDivideDesc:     'Kontzeptuak, zatiketa metodoa eta trikimailuak',
            practiceMultiply:    'Biderketa praktikatu',
            practiceMultiplyDesc:'Urratska ariketak metodo idatziarekin',
            practiceDivide:      'Zatiketa praktikatu',
            practiceDivideDesc:  'Urratska ariketak zatiketa metodoarekin',
            back:                'Itzuli',
            startPractice:       'Praktikatzen hasi',
            next:                'Hurrengoa',
            previous:            'Aurrekoa',
            chooseLevel:         'Aukeratu praktikatu nahi duzun maila:',
            level1Name:          '1. maila – Eramanik gabe',
            level1Example:       'Ad.: 12 × 3 = ?',
            level2Name:          '2. maila – Eramanarekin',
            level2Example:       'Ad.: 47 × 6 = ?',
            level3Name:          '3. maila – × bi zifra (metodoa)',
            level3Example:       'Ad.: 34 × 12 = ?',
            level3bName:         '3B. maila – × bi zifra (zati-produktuak)',
            level3bExample:      'Ad.: 34 × 12: kalkulatu 34×2, 34×10 eta batu',
            level4Name:          '4. maila – Zatiketa zehatza',
            level4Example:       'Ad.: 168 ÷ 6 = ?',
            level5Name:          '5. maila – Zatiketa hondarrarekin',
            level5Example:       'Ad.: 17 ÷ 5 = 3 (hondarra 2)',
            level6Name:          '6. maila – Zeroa kozienetean',
            level6Example:       'Ad.: 408 ÷ 4 = 102',

            // ── Taula osoa ──
            fullTableTitle:      'Taula osoak',
            fullTableDesc:       '10×10 sareta interaktiboa biderketa guztiekin',
            fullTableHint:       'Sakatu zelula bat nabarmentzeko. Pasatu sagua errenkada eta zutabea argitzeko.',
            exercise:            'Ariketa',
            score:               'Puntuak',
            seeHint:             'Laguntza ikusi',
            nextExercise:        'Hurrengo ariketa',
            correct:             'Zuzena',
            correctFb:           'Oso ongi! Erantzun zuzena.',
            wrongFb:             'Okerra. Begiratu urratsa eta saiatu berriz.',
            hintFb:              'Laguntza: ',
            checkThisStep:       'Egiaztatu urrats hau:',
            carry:               'eraman',
            carryNote:           '(eraman',
            writeDigit:          'Idatzi zenbakia',
            writeResult:         'Idatzi azken emaitza',
            roundComplete:       'Txanda osatuta!',
            resultPerfect:       'Perfektua! Dena zuzen!',
            resultGood:          'Oso ongi! Jarraitu praktikatzen.',
            resultKeepTrying:    'Jarraitu saiatzen, lortuko duzu!',
            playAgain:           'Errepikatu',
            goHome:              'Hasiera',
            seconds:             's',
            notSaved:            'Gonbidatu modua. Puntuak ez dira gordetzen.',
            answerLabel:         'Zure erantzuna',
        },
    },

    init() {
        if (typeof PlatformI18n !== 'undefined') {
            this.currentLanguage = PlatformI18n.currentLanguage;
        }
        document.addEventListener('platformLanguageChanged', e => {
            this.currentLanguage = e.detail.language;
            if (typeof TableMasterGame !== 'undefined') {
                TableMasterGame.applyI18n();
            }
        });
    },

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
        }
    },

    t(key) {
        return this.translations[this.currentLanguage]?.[key]
            ?? this.translations['es-ES']?.[key]
            ?? key;
    },
};

// Patch PlatformI18n para sincronizar con el juego
(function patchPlatformI18n() {
    if (typeof PlatformI18n === 'undefined') return;
    const orig = PlatformI18n.setLanguage.bind(PlatformI18n);
    PlatformI18n.setLanguage = function(lang) {
        const result = orig(lang);
        TableMasterI18n.setLanguage(lang);
        return result;
    };
})();

TableMasterI18n.init();
