/**
 * euskera-EFC/data.js
 * Nor-Nori-Nork — Euskal aditz laguntzaile sistema
 *
 * Structure:
 *   EUSKERA_MODULE        → metadata + theory + vocabulary_topics
 *   EUSKERA_LEVELS        → exercises array (4 levels)
 *   EUSKERA_VOCAB_QUIZZES → vocabulary MCQ by topic
 */

// ─────────────────────────────────────────────────────────────────────────────
// MODULE METADATA + THEORY + VOCABULARY TOPICS
// ─────────────────────────────────────────────────────────────────────────────

const EUSKERA_MODULE = {
    id:          'euskera-nnk',
    title:       'Nor-Nori-Nork',
    icon:        '🏔️',
    lang:        'eu',
    uiLang:      'es',
    description: 'Domina el sistema de auxiliares del euskera: quién hace qué y a quién.',
    totalLevels: 4,
    xpReward:    150,

    // ── THEORY (child-friendly) ───────────────────────────────────────────────
    theory: {
        intro: `¿Sabes que en euskera UN SOLO VERBO puede decir
"YO te lo DOY" sin usar palabras separadas para "yo" y "te"?
Es como un código secreto que combina tres cosas a la vez.
¡Vamos a descubrirlo! 🔍`,

        analogy: {
            title: 'Imagínalo como un Lego de 3 piezas',
            description: `El auxiliar en euskera se construye juntando 3 piezas:`,
            pieces: [
                {
                    color: '🔴',
                    name: 'NORK',
                    question: '¿Quién lo hace?',
                    simple: 'El que da / envía / dice',
                    examples: ['Nik = Yo', 'Zuk = Tú', 'Hark = Él / Ella', 'Guk = Nosotros', 'Haiek = Ellos/Ellas']
                },
                {
                    color: '🟢',
                    name: 'NORI',
                    question: '¿A quién?',
                    simple: 'La persona que recibe algo',
                    examples: ['niri = a mí', 'zuri = a ti', 'hari = a él/ella', 'guri = a nosotros', 'haiei = a ellos/as']
                },
                {
                    color: '🔵',
                    name: 'NOR',
                    question: '¿El qué?',
                    simple: 'La cosa que se da/envía/muestra',
                    examples: ['oparia = el regalo', 'liburua = el libro', 'mezua = el mensaje']
                },
            ]
        },

        visual_examples: [
            {
                title: 'Ejemplo 1 — DIT',
                spanish: 'Él/Ella ME da el libro',
                basque: 'Hark liburua NIRI eman DIT',
                breakdown: { nork: 'Hark (él/ella) 🔴', nori: 'niri (a mí) 🟢', nor: 'liburua (el libro) 🔵' },
                result: 'DIT',
                mnemonic: 'DI-T → la T final es la pista de "a mí" (niri)'
            },
            {
                title: 'Ejemplo 2 — DIZUT',
                spanish: 'YO TE doy el regalo',
                basque: 'Nik oparia ZURI eman DIZUT',
                breakdown: { nork: 'Nik (yo) 🔴', nori: 'zuri (a ti) 🟢', nor: 'oparia (el regalo) 🔵' },
                result: 'DIZUT',
                mnemonic: 'DI-ZU-T → "zu" = a ti, "t" final = yo lo hago'
            },
            {
                title: 'Ejemplo 3 — DIO',
                spanish: 'Él/Ella LE da la carta',
                basque: 'Hark gutuna HARI eman DIO',
                breakdown: { nork: 'Hark (él/ella) 🔴', nori: 'hari (a él/ella) 🟢', nor: 'gutuna (la carta) 🔵' },
                result: 'DIO',
                mnemonic: 'DIO → d-io = io es la raíz del dativo de 3ª persona'
            },
        ],

        conjugation_table: {
            title: 'La tabla completa (NOR = hura, una cosa)',
            headers: ['NORK (hace) ↓ / NORI (recibe) →', 'niri (a mí)', 'zuri (a ti)', 'hari (a él/ella)', 'guri (a nos.)', 'zuei (a vos.)', 'haiei (a ellos)'],
            rows: [
                { nork: '🔴 Hark (él/ella)', cells: ['DIT',     'DIZU',   'DIO',   'DIGU',    'DIZUE',   'DIE']   },
                { nork: '🔴 Nik (yo)',        cells: ['—',       'DIZUT',  'DIOT',  'DIOGU',   'DIEZUT',  'DIET']  },
                { nork: '🔴 Zuk (tú)',        cells: ['DIDAZU',  '—',      'DIOZU', 'DIGUZU',  '—',       'DIEZU'] },
                { nork: '🔴 Guk (nos.)',      cells: ['DIGU',    'DIZUGU', 'DIOGU', '—',       'DIZUEGU', 'DIEGU'] },
                { nork: '🔴 Haiek (ellos)',   cells: ['DIDATE',  'DIZUTE', 'DIOTE', 'DIGUTE',  'DIZUETE', 'DIETE'] },
            ],
            note: '— significa que no es posible (no puedes darte algo a ti mismo)'
        },

        plurals: {
            title: '¿Y si son VARIAS cosas? El plural con -ZKI-',
            explanation: `Cuando das o envías VARIAS cosas (plural), se añade -zki- en el medio del auxiliar:`,
            examples: [
                {
                    singular: 'Nik oparia zuri eman DIZUT (un regalo → a ti)',
                    plural:   'Nik opariak zuri eman DIZKIZUT (varios regalos → a ti)'
                },
                {
                    singular: 'Hark liburua niri eman DIT (un libro → a mí)',
                    plural:   'Hark liburuak niri eman DIZKÍT (varios libros → a mí)'
                },
                {
                    singular: 'Guk mezua haiei bidali DIEGU (un mensaje → a ellos)',
                    plural:   'Guk mezuak haiei bidali DIZKIEGU (varios mensajes → a ellos)'
                },
            ],
            rule: 'Regla: Singular = DIT / DIZUT / DIO ... → Plural = DIZKIT / DIZKIZUT / DIZKIO ...'
        },

        memory_tricks: [
            '💡 Si la palabra tiene -ZU- en el medio → el destinatario eres TÚ (zuri)',
            '💡 Si termina en -T → lo hago YO (nik)',
            '💡 DIO / DIT / DIE → son los más básicos (hark + hari/niri/haiei)',
            '💡 -ZKI- en el medio = varias cosas (plural)',
        ]
    },

    // ── VOCABULARY TOPICS ─────────────────────────────────────────────────────
    vocabulary_topics: [
        {
            id: 'familia',
            label: '👨‍👩‍👧 Familia',
            words: [
                { eu: 'aita',       es: 'padre',      audio_text: 'aita'       },
                { eu: 'ama',        es: 'madre',       audio_text: 'ama'        },
                { eu: 'anaia',      es: 'hermano',     audio_text: 'anaia'      },
                { eu: 'arreba',     es: 'hermana',     audio_text: 'arreba'     },
                { eu: 'aitona',     es: 'abuelo',      audio_text: 'aitona'     },
                { eu: 'amona',      es: 'abuela',      audio_text: 'amona'      },
                { eu: 'semea',      es: 'hijo',        audio_text: 'semea'      },
                { eu: 'alaba',      es: 'hija',        audio_text: 'alaba'      },
                { eu: 'laguna',     es: 'amigo/a',     audio_text: 'laguna'     },
                { eu: 'irakaslea',  es: 'profesor/a',  audio_text: 'irakaslea'  },
            ]
        },
        {
            id: 'koloreak',
            label: '🌈 Koloreak (Colores)',
            words: [
                { eu: 'gorria',   es: 'rojo',     audio_text: 'gorria'   },
                { eu: 'urdina',   es: 'azul',     audio_text: 'urdina'   },
                { eu: 'berdea',   es: 'verde',    audio_text: 'berdea'   },
                { eu: 'horia',    es: 'amarillo', audio_text: 'horia'    },
                { eu: 'zuria',    es: 'blanco',   audio_text: 'zuria'    },
                { eu: 'beltza',   es: 'negro',    audio_text: 'beltza'   },
                { eu: 'laranja',  es: 'naranja',  audio_text: 'laranja'  },
                { eu: 'morea',    es: 'morado',   audio_text: 'morea'    },
            ]
        },
        {
            id: 'animaliak',
            label: '🐾 Animaliak (Animales)',
            words: [
                { eu: 'txakurra',  es: 'perro',    audio_text: 'txakurra'  },
                { eu: 'katua',     es: 'gato',     audio_text: 'katua'     },
                { eu: 'txoria',    es: 'pájaro',   audio_text: 'txoria'    },
                { eu: 'arraina',   es: 'pez',      audio_text: 'arraina'   },
                { eu: 'zaldia',    es: 'caballo',  audio_text: 'zaldia'    },
                { eu: 'behia',     es: 'vaca',     audio_text: 'behia'     },
                { eu: 'oiloa',     es: 'gallina',  audio_text: 'oiloa'     },
                { eu: 'hartza',    es: 'oso',      audio_text: 'hartza'    },
                { eu: 'lehoia',    es: 'león',     audio_text: 'lehoia'    },
                { eu: 'untxia',    es: 'conejo',   audio_text: 'untxia'    },
            ]
        },
        {
            id: 'gorputza',
            label: '🧍 Gorputza (Cuerpo)',
            words: [
                { eu: 'burua',     es: 'cabeza',        audio_text: 'burua'    },
                { eu: 'begiak',    es: 'ojos',          audio_text: 'begiak'   },
                { eu: 'sudurra',   es: 'nariz',         audio_text: 'sudurra'  },
                { eu: 'ahoa',      es: 'boca',          audio_text: 'ahoa'     },
                { eu: 'belarriak', es: 'orejas',        audio_text: 'belarriak'},
                { eu: 'eskuak',    es: 'manos',         audio_text: 'eskuak'   },
                { eu: 'hankak',    es: 'pies/piernas',  audio_text: 'hankak'   },
                { eu: 'bihotza',   es: 'corazón',       audio_text: 'bihotza'  },
            ]
        },
        {
            id: 'janaria',
            label: '🍎 Janaria (Comida)',
            words: [
                { eu: 'sagarra',   es: 'manzana',    audio_text: 'sagarra'   },
                { eu: 'ogia',      es: 'pan',        audio_text: 'ogia'      },
                { eu: 'esnea',     es: 'leche',      audio_text: 'esnea'     },
                { eu: 'arroza',    es: 'arroz',      audio_text: 'arroza'    },
                { eu: 'arrautza',  es: 'huevo',      audio_text: 'arrautza'  },
                { eu: 'gazta',     es: 'queso',      audio_text: 'gazta'     },
                { eu: 'oilaskoa',  es: 'pollo',      audio_text: 'oilaskoa'  },
                { eu: 'tomatea',   es: 'tomate',     audio_text: 'tomatea'   },
                { eu: 'ura',       es: 'agua',       audio_text: 'ura'       },
                { eu: 'goxua',     es: 'dulce/rico', audio_text: 'goxua'     },
            ]
        },
        {
            id: 'eskola',
            label: '🏫 Eskola (Escuela)',
            words: [
                { eu: 'liburua',     es: 'libro',      audio_text: 'liburua'    },
                { eu: 'arkatza',     es: 'lápiz',      audio_text: 'arkatza'    },
                { eu: 'boligrafoa',  es: 'bolígrafo',  audio_text: 'boligrafoa' },
                { eu: 'mahaiak',     es: 'mesas',      audio_text: 'mahaiak'    },
                { eu: 'aulkiak',     es: 'sillas',     audio_text: 'aulkiak'    },
                { eu: 'arbela',      es: 'pizarra',    audio_text: 'arbela'     },
                { eu: 'motxila',     es: 'mochila',    audio_text: 'motxila'    },
                { eu: 'ikaslea',     es: 'alumno/a',   audio_text: 'ikaslea'    },
            ]
        },
    ]
};

// ─────────────────────────────────────────────────────────────────────────────
// LEVELS (4 total)
// ─────────────────────────────────────────────────────────────────────────────

const EUSKERA_LEVELS = [

    // ═══════════════════════════════════════════════════════════════════════
    // LEVEL 1 — Principiante: los auxiliares más usados
    // ═══════════════════════════════════════════════════════════════════════
    {
        id:          1,
        moduleId:    'euskera-nnk',
        type:        'mcq',
        title:       'Nivel fácil — Los más usados',
        subtitle:    'Solo los auxiliares más comunes: DIT, DIZU, DIO, DIZUT, DIOT',
        passingScore: 50,
        maxScore:     80,
        scoring: {
            correctPoints:   10,
            incorrectPoints: 0,
            timeLimitSecs:   25,
            timeBonusMax:    5,
            streakBonus:     true
        },
        exercises: [
            {
                id:          'l1-e01',
                sentence:    'Amak oparia niri eman ___.',
                translation: 'La madre me ha dado el regalo.',
                analysis:    { nork: 'amak (hark)', nori: 'niri', nor: 'oparia' },
                options:     ['DIT', 'DIZU', 'DIO', 'DIZUT'],
                answer:      'DIT',
                explanation: 'NORK=Hark (amak) · NORI=Niri → DIT'
            },
            {
                id:          'l1-e02',
                sentence:    'Nik oparia zuri eman ___.',
                translation: 'Yo te he dado el regalo.',
                analysis:    { nork: 'nik', nori: 'zuri', nor: 'oparia' },
                options:     ['DIT', 'DIZUT', 'DIOT', 'DIZU'],
                answer:      'DIZUT',
                explanation: 'NORK=Nik · NORI=Zuri → DIZUT'
            },
            {
                id:          'l1-e03',
                sentence:    'Hark liburua hari eman ___.',
                translation: 'Él/Ella le ha dado el libro.',
                analysis:    { nork: 'hark', nori: 'hari', nor: 'liburua' },
                options:     ['DIT', 'DIZUT', 'DIO', 'DIOT'],
                answer:      'DIO',
                explanation: 'NORK=Hark · NORI=Hari → DIO'
            },
            {
                id:          'l1-e04',
                sentence:    'Aitak mezua niri bidali ___.',
                translation: 'El padre me ha enviado el mensaje.',
                analysis:    { nork: 'aitak (hark)', nori: 'niri', nor: 'mezua' },
                options:     ['DIOT', 'DIO', 'DIT', 'DIZUT'],
                answer:      'DIT',
                explanation: 'NORK=Hark (aitak) · NORI=Niri → DIT'
            },
            {
                id:          'l1-e05',
                sentence:    'Nik gutuna hari idatzi ___.',
                translation: 'Yo le he escrito una carta.',
                analysis:    { nork: 'nik', nori: 'hari', nor: 'gutuna' },
                options:     ['DIT', 'DIO', 'DIOT', 'DIZUT'],
                answer:      'DIOT',
                explanation: 'NORK=Nik · NORI=Hari → DIOT'
            },
            {
                id:          'l1-e06',
                sentence:    'Hark dirua zuri eman ___.',
                translation: 'Él/Ella te ha dado dinero.',
                analysis:    { nork: 'hark', nori: 'zuri', nor: 'dirua' },
                options:     ['DIT', 'DIZU', 'DIO', 'DIZUT'],
                answer:      'DIZU',
                explanation: 'NORK=Hark · NORI=Zuri → DIZU'
            },
            {
                id:          'l1-e07',
                sentence:    'Nik liburua zuri ekarri ___.',
                translation: 'Yo te he traído el libro.',
                analysis:    { nork: 'nik', nori: 'zuri', nor: 'liburua' },
                options:     ['DIOT', 'DIT', 'DIZUT', 'DIZU'],
                answer:      'DIZUT',
                explanation: 'NORK=Nik · NORI=Zuri → DIZUT'
            },
            {
                id:          'l1-e08',
                sentence:    'Amak oparia hari eman ___.',
                translation: 'La madre le ha dado el regalo.',
                analysis:    { nork: 'amak (hark)', nori: 'hari', nor: 'oparia' },
                options:     ['DIT', 'DIZUT', 'DIO', 'DIOT'],
                answer:      'DIO',
                explanation: 'NORK=Hark (amak) · NORI=Hari → DIO'
            },
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LEVEL 2 — MCQ: selección múltiple con más auxiliares
    // ═══════════════════════════════════════════════════════════════════════
    {
        id:          2,
        moduleId:    'euskera-nnk',
        type:        'mcq',
        title:       'Aukeratu laguntzaile egokia',
        subtitle:    'Elige el auxiliar correcto para cada frase',
        passingScore: 60,
        maxScore:     100,
        scoring: {
            correctPoints:   10,
            incorrectPoints: 0,
            timeLimitSecs:   20,
            timeBonusMax:    5,
            streakBonus:     true
        },
        exercises: [
            {
                id: 'l2-e01',
                sentence:    'Hark liburua niri eman ___.',
                translation: 'Él/Ella me ha dado el libro.',
                analysis:    { nork: 'hark', nori: 'niri', nor: 'liburua' },
                options:     ['dit', 'dizu', 'diot', 'dio'],
                answer:      'dit',
                explanation: 'NORK=Hark · NORI=Niri → dit'
            },
            {
                id: 'l2-e02',
                sentence:    'Nik oparia zuri eman ___.',
                translation: 'Yo te he dado el regalo.',
                analysis:    { nork: 'nik', nori: 'zuri', nor: 'oparia' },
                options:     ['dit', 'dizut', 'diot', 'dizu'],
                answer:      'dizut',
                explanation: 'NORK=Nik · NORI=Zuri → dizut'
            },
            {
                id: 'l2-e03',
                sentence:    'Zuk mezua niri bidali ___.',
                translation: 'Tú me has enviado el mensaje.',
                analysis:    { nork: 'zuk', nori: 'niri', nor: 'mezua' },
                options:     ['dit', 'dizut', 'didazu', 'diozu'],
                answer:      'didazu',
                explanation: 'NORK=Zuk · NORI=Niri → didazu'
            },
            {
                id: 'l2-e04',
                sentence:    'Amak gutuna hari idatzi ___.',
                translation: 'La madre le ha escrito una carta.',
                analysis:    { nork: 'amak (hark)', nori: 'hari', nor: 'gutuna' },
                options:     ['dit', 'dio', 'diozu', 'diot'],
                answer:      'dio',
                explanation: 'NORK=Hark · NORI=Hari → dio'
            },
            {
                id: 'l2-e05',
                sentence:    'Nik dirua guri eman ___.',
                translation: 'Yo nos he dado dinero.',
                analysis:    { nork: 'nik', nori: 'guri', nor: 'dirua' },
                options:     ['digu', 'diogu', 'diegu', 'diot'],
                answer:      'diogu',
                explanation: 'NORK=Nik · NORI=Guri → diogu'
            },
            {
                id: 'l2-e06',
                sentence:    'Haiek argazkia zuei erakutsi ___.',
                translation: 'Ellos/as os han mostrado la foto.',
                analysis:    { nork: 'haiek', nori: 'zuei', nor: 'argazkia' },
                options:     ['diote', 'dizute', 'dizuete', 'diete'],
                answer:      'dizuete',
                explanation: 'NORK=Haiek · NORI=Zuei → dizuete'
            },
            {
                id: 'l2-e07',
                sentence:    'Guk liburua haiei eman ___.',
                translation: 'Nosotros les hemos dado el libro.',
                analysis:    { nork: 'guk', nori: 'haiei', nor: 'liburua' },
                options:     ['die', 'diegu', 'diote', 'diogu'],
                answer:      'diegu',
                explanation: 'NORK=Guk · NORI=Haiei → diegu'
            },
            {
                id: 'l2-e08',
                sentence:    'Zuk oparia hari erosi ___.',
                translation: 'Tú le has comprado el regalo.',
                analysis:    { nork: 'zuk', nori: 'hari', nor: 'oparia' },
                options:     ['diozu', 'diogu', 'dio', 'diot'],
                answer:      'diozu',
                explanation: 'NORK=Zuk · NORI=Hari → diozu'
            },
            {
                id: 'l2-e09',
                sentence:    'Haiek mezua niri bidali ___.',
                translation: 'Ellos/as me han enviado el mensaje.',
                analysis:    { nork: 'haiek', nori: 'niri', nor: 'mezua' },
                options:     ['dit', 'didate', 'die', 'diot'],
                answer:      'didate',
                explanation: 'NORK=Haiek · NORI=Niri → didate'
            },
            {
                id: 'l2-e10',
                sentence:    'Hark dirua guri eman ___.',
                translation: 'Él/Ella nos ha dado dinero.',
                analysis:    { nork: 'hark', nori: 'guri', nor: 'dirua' },
                options:     ['digu', 'diogu', 'diot', 'dizugu'],
                answer:      'digu',
                explanation: 'NORK=Hark · NORI=Guri → digu'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LEVEL 3 — Fill-in-the-blank: escribe el auxiliar
    // ═══════════════════════════════════════════════════════════════════════
    {
        id:          3,
        moduleId:    'euskera-nnk',
        type:        'fill-blank',
        title:       'Bete hutsunea',
        subtitle:    'Escribe el auxiliar que falta en cada frase',
        passingScore: 65,
        maxScore:     100,
        scoring: {
            correctPoints:      15,
            incorrectPoints:    0,
            accentTolerance:    true,
            timeLimitSecs:      30,
            timeBonusMax:       5,
            streakBonus:        true
        },
        exercises: [
            {
                id:       'l3-e01',
                before:   'Irakasleek ikasleei gauza asko irakatsi',
                blank:    '___',
                after:    '.',
                answer:   'diete',
                hint:     'NORK = irakasleek (haiek), NORI = ikasleei (haiei)',
                translation: 'Los profesores les han enseñado muchas cosas a los alumnos.'
            },
            {
                id:       'l3-e02',
                before:   'Nik zuri argazkia bidali',
                blank:    '___',
                after:    '.',
                answer:   'dizut',
                hint:     'NORK = Nik, NORI = Zuri',
                translation: 'Te he enviado la foto.'
            },
            {
                id:       'l3-e03',
                before:   'Amak oparia guri eman',
                blank:    '___',
                after:    '.',
                answer:   'digu',
                hint:     'NORK = amak (hark), NORI = guri',
                translation: 'La madre nos ha dado el regalo.'
            },
            {
                id:       'l3-e04',
                before:   'Zuk gutun bat hari idatzi',
                blank:    '___',
                after:    '?',
                answer:   'diozu',
                hint:     'NORK = Zuk, NORI = Hari',
                translation: '¿Le has escrito una carta?'
            },
            {
                id:       'l3-e05',
                before:   'Lagunak dirua niri eman',
                blank:    '___',
                after:    '.',
                answer:   'dit',
                hint:     'NORK = lagunak (hark), NORI = niri',
                translation: 'El amigo me ha dado dinero.'
            },
            {
                id:       'l3-e06',
                before:   'Guk mezua zuei bidali',
                blank:    '___',
                after:    '.',
                answer:   'dizuegu',
                hint:     'NORK = Guk, NORI = Zuei',
                translation: 'Os hemos enviado el mensaje.'
            },
            {
                id:       'l3-e07',
                before:   'Hark liburua niri ekarri',
                blank:    '___',
                after:    '.',
                answer:   'dit',
                hint:     'NORK = Hark, NORI = Niri',
                translation: 'Él/Ella me ha traído el libro.'
            },
            {
                id:       'l3-e08',
                before:   'Nik argazkia haiei erakutsi',
                blank:    '___',
                after:    '.',
                answer:   'diet',
                hint:     'NORK = Nik, NORI = Haiei',
                translation: 'Les he mostrado la foto.'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LEVEL 4 — Listening comprehension
    // ═══════════════════════════════════════════════════════════════════════
    {
        id:          4,
        moduleId:    'euskera-nnk',
        type:        'listening',
        title:       'Entzumen-ulermena',
        subtitle:    'Escucha el texto y responde las preguntas',
        passingScore: 70,
        maxScore:     100,
        scoring: {
            correctPoints:   20,
            incorrectPoints: -5,
            timeLimitSecs:   0,
            streakBonus:     false
        },
        passages: [
            {
                id:         'l4-p01',
                audio_text: `Gaur goizean Iker etxera etorri da. Amari opari bat ekarri dio eta anaiaren eskutitz bat niri eman dit. Guk ere Ikerri opariak erosi dizkiogu. Lagunei mezuak bidali dizkiegu. Pozik gaude!`,
                text_es:    `Esta mañana Iker ha venido a casa. Le ha traído un regalo a la madre y me ha dado una carta de mi hermano. Nosotros también le hemos comprado regalos a Iker. Les hemos enviado mensajes a los amigos. ¡Estamos contentos!`,
                questions: [
                    {
                        id:          'l4-p01-q01',
                        question:    '¿Qué auxiliar aparece en "Amari opari bat ekarri dio"?',
                        options:     ['dit', 'dio', 'diot', 'diozu'],
                        answer:      'dio',
                        explanation: 'NORK=Ikerrek (hark) · NORI=Amari (hari) → dio'
                    },
                    {
                        id:          'l4-p01-q02',
                        question:    '¿Qué persona es el sujeto (NORK) en "niri eman dit"?',
                        options:     ['Nik', 'Hark (Iker)', 'Guk', 'Zuk'],
                        answer:      'Hark (Iker)',
                        explanation: 'El sujeto es Iker → Hark. La acción va hacia niri (a mí).'
                    },
                    {
                        id:          'l4-p01-q03',
                        question:    '"Guk Ikerri opariak erosi dizkiogu" — ¿cuál es el NORI?',
                        options:     ['Guk', 'Ikerri', 'opariak', 'dizkiogu'],
                        answer:      'Ikerri',
                        explanation: 'Ikerri = a Iker = NORI (dativo). Guk = NORK, opariak = NOR.'
                    },
                    {
                        id:          'l4-p01-q04',
                        question:    'En "Lagunei mezuak bidali dizkiegu", ¿qué indica el morfema "-egu" en "dizkiegu"?',
                        options:     [
                            'Nosotros somos los que actúan (NORK=Guk)',
                            'El objeto es plural',
                            'El destinatario son ellos',
                            'El tiempo es pasado'
                        ],
                        answer:      'Nosotros somos los que actúan (NORK=Guk)',
                        explanation: 'El sufijo -egu marca NORK=Guk (nosotros). -zki- marca NOR plural, -ie- marca NORI=Haiei.'
                    },
                    {
                        id:          'l4-p01-q05',
                        question:    '¿Cuántos auxiliares diferentes del sistema NNK aparecen en el texto?',
                        options:     ['2', '3', '4', '5'],
                        answer:      '4',
                        explanation: 'Aparecen: dio (ekarri amari), dit (eman niri), dizkiogu (erosi Ikerri), dizkiegu (bidali lagunei) — 4 formas distintas.'
                    }
                ]
            }
        ]
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// VOCABULARY QUIZZES (MCQ by topic, ~8 questions each)
// ─────────────────────────────────────────────────────────────────────────────

const EUSKERA_VOCAB_QUIZZES = {
    familia: [
        { eu: 'ama',       options: ['madre', 'padre', 'hermana', 'abuela'],       answer: 'madre'     },
        { eu: 'aita',      options: ['hermano', 'padre', 'abuelo', 'amigo'],       answer: 'padre'     },
        { eu: 'anaia',     options: ['hermana', 'hermano', 'hijo', 'amigo'],       answer: 'hermano'   },
        { eu: 'arreba',    options: ['hermana', 'hermano', 'hija', 'abuela'],      answer: 'hermana'   },
        { eu: 'aitona',    options: ['padre', 'abuelo', 'hermano', 'tío'],         answer: 'abuelo'    },
        { eu: 'amona',     options: ['madre', 'abuela', 'hermana', 'tía'],         answer: 'abuela'    },
        { eu: 'semea',     options: ['hija', 'hijo', 'hermano', 'padre'],          answer: 'hijo'      },
        { eu: 'laguna',    options: ['hermano', 'profesor/a', 'amigo/a', 'padre'], answer: 'amigo/a'   },
    ],
    koloreak: [
        { eu: 'gorria',   options: ['azul', 'rojo', 'verde', 'amarillo'],   answer: 'rojo'      },
        { eu: 'urdina',   options: ['azul', 'verde', 'negro', 'morado'],    answer: 'azul'      },
        { eu: 'berdea',   options: ['amarillo', 'verde', 'naranja', 'rojo'],answer: 'verde'     },
        { eu: 'horia',    options: ['blanco', 'amarillo', 'azul', 'negro'], answer: 'amarillo'  },
        { eu: 'zuria',    options: ['negro', 'blanco', 'rojo', 'verde'],    answer: 'blanco'    },
        { eu: 'beltza',   options: ['negro', 'morado', 'azul', 'verde'],    answer: 'negro'     },
        { eu: 'laranja',  options: ['rojo', 'naranja', 'amarillo', 'azul'], answer: 'naranja'   },
        { eu: 'morea',    options: ['verde', 'azul', 'morado', 'negro'],    answer: 'morado'    },
    ],
    animaliak: [
        { eu: 'txakurra',  options: ['gato', 'perro', 'pájaro', 'pez'],       answer: 'perro'   },
        { eu: 'katua',     options: ['gato', 'perro', 'conejo', 'vaca'],      answer: 'gato'    },
        { eu: 'txoria',    options: ['pez', 'caballo', 'pájaro', 'gallina'],  answer: 'pájaro'  },
        { eu: 'arraina',   options: ['pez', 'conejo', 'oso', 'gato'],         answer: 'pez'     },
        { eu: 'zaldia',    options: ['vaca', 'caballo', 'perro', 'oso'],      answer: 'caballo' },
        { eu: 'behia',     options: ['gallina', 'vaca', 'caballo', 'conejo'], answer: 'vaca'    },
        { eu: 'hartza',    options: ['oso', 'león', 'perro', 'caballo'],      answer: 'oso'     },
        { eu: 'untxia',    options: ['gato', 'conejo', 'pájaro', 'vaca'],     answer: 'conejo'  },
    ],
    gorputza: [
        { eu: 'burua',     options: ['nariz', 'cabeza', 'boca', 'corazón'],      answer: 'cabeza'       },
        { eu: 'begiak',    options: ['orejas', 'ojos', 'manos', 'boca'],         answer: 'ojos'         },
        { eu: 'sudurra',   options: ['nariz', 'boca', 'orejas', 'cabeza'],       answer: 'nariz'        },
        { eu: 'ahoa',      options: ['ojos', 'boca', 'manos', 'nariz'],          answer: 'boca'         },
        { eu: 'belarriak', options: ['pies', 'orejas', 'manos', 'ojos'],         answer: 'orejas'       },
        { eu: 'eskuak',    options: ['pies/piernas', 'manos', 'ojos', 'nariz'],  answer: 'manos'        },
        { eu: 'hankak',    options: ['manos', 'pies/piernas', 'boca', 'ojos'],   answer: 'pies/piernas' },
        { eu: 'bihotza',   options: ['nariz', 'cabeza', 'corazón', 'manos'],     answer: 'corazón'      },
    ],
    janaria: [
        { eu: 'sagarra',   options: ['pan', 'manzana', 'leche', 'huevo'],      answer: 'manzana'    },
        { eu: 'ogia',      options: ['pan', 'arroz', 'queso', 'agua'],         answer: 'pan'        },
        { eu: 'esnea',     options: ['agua', 'leche', 'huevo', 'pollo'],       answer: 'leche'      },
        { eu: 'arroza',    options: ['pan', 'arroz', 'queso', 'tomate'],       answer: 'arroz'      },
        { eu: 'arrautza',  options: ['queso', 'huevo', 'pan', 'manzana'],      answer: 'huevo'      },
        { eu: 'gazta',     options: ['queso', 'leche', 'agua', 'arroz'],       answer: 'queso'      },
        { eu: 'oilaskoa',  options: ['huevo', 'pollo', 'manzana', 'pan'],      answer: 'pollo'      },
        { eu: 'tomatea',   options: ['tomate', 'agua', 'arroz', 'queso'],      answer: 'tomate'     },
    ],
    eskola: [
        { eu: 'liburua',    options: ['bolígrafo', 'libro', 'mochila', 'lápiz'],     answer: 'libro'     },
        { eu: 'arkatza',    options: ['lápiz', 'bolígrafo', 'sillas', 'mesas'],      answer: 'lápiz'     },
        { eu: 'boligrafoa', options: ['mochila', 'lápiz', 'bolígrafo', 'pizarra'],   answer: 'bolígrafo' },
        { eu: 'mahaiak',    options: ['sillas', 'mesas', 'pizarra', 'mochilas'],     answer: 'mesas'     },
        { eu: 'aulkiak',    options: ['mesas', 'sillas', 'pizarra', 'libros'],       answer: 'sillas'    },
        { eu: 'arbela',     options: ['libro', 'mochila', 'pizarra', 'lápiz'],       answer: 'pizarra'   },
        { eu: 'motxila',    options: ['bolígrafo', 'mochila', 'silla', 'libro'],     answer: 'mochila'   },
        { eu: 'ikaslea',    options: ['profesor/a', 'alumno/a', 'libro', 'mochila'], answer: 'alumno/a'  },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────────────────────
if (typeof module !== 'undefined') {
    module.exports = { EUSKERA_MODULE, EUSKERA_LEVELS, EUSKERA_VOCAB_QUIZZES };
}
