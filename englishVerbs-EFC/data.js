/**
 * englishVerbs-EFC/data.js
 * English Irregular Verbs — 3-level progressive module
 *
 * Structure:
 *   IRREGULAR_VERBS        → full verb table (70+ verbs with group)
 *   GROUP_INFO             → group metadata (label, color, desc, example)
 *   ENGLISH_MODULE         → module metadata
 *   ENGLISH_LEVELS         → exercises array (3 levels)
 *   ENGLISH_GROUP_EXERCISES → MCQ exercises grouped by verb pattern
 *
 * Firestore paths (seeded by scripts/seed-content.js):
 *   /modules/english-irregular-verbs              → ENGLISH_MODULE (without levels)
 *   /modules/english-irregular-verbs/levels/1-3   → each level object
 */

// ─────────────────────────────────────────────────────────────────────────────
// GROUP INFO
// ─────────────────────────────────────────────────────────────────────────────

const GROUP_INFO = {
    'A-A-A': {
        label:   'Iguales los tres',
        color:   '#22c55e',
        desc:    'Infinitivo = Pasado = Participio. ¡Los más fáciles!',
        example: 'cut → cut → cut'
    },
    'A-B-A': {
        label:   'Infinitivo = Participio',
        color:   '#3b82f6',
        desc:    'El pasado cambia, pero el participio es igual al infinitivo.',
        example: 'come → came → come'
    },
    'A-B-B': {
        label:   'Pasado = Participio',
        color:   '#f59e0b',
        desc:    'El infinitivo cambia, pero pasado y participio son iguales.',
        example: 'make → made → made'
    },
    'A-B-C': {
        label:   'Los tres distintos',
        color:   '#ef4444',
        desc:    'Las tres formas son completamente diferentes. ¡Hay que memorizarlos!',
        example: 'go → went → gone'
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// VERB TABLE (70+ high-frequency irregular verbs)
// ─────────────────────────────────────────────────────────────────────────────

const IRREGULAR_VERBS = [
    // ── A-A-A group (same all three forms) ──────────────────────────────────
    { infinitive: 'bet',    past_simple: 'bet',        past_participle: 'bet',        meaning_es: 'apostar',           audio_text: 'bet, bet, bet',                   group: 'A-A-A' },
    { infinitive: 'burst',  past_simple: 'burst',      past_participle: 'burst',      meaning_es: 'estallar',          audio_text: 'burst, burst, burst',             group: 'A-A-A' },
    { infinitive: 'cast',   past_simple: 'cast',       past_participle: 'cast',       meaning_es: 'lanzar',            audio_text: 'cast, cast, cast',                group: 'A-A-A' },
    { infinitive: 'cost',   past_simple: 'cost',       past_participle: 'cost',       meaning_es: 'costar',            audio_text: 'cost, cost, cost',                group: 'A-A-A' },
    { infinitive: 'cut',    past_simple: 'cut',        past_participle: 'cut',        meaning_es: 'cortar',            audio_text: 'cut, cut, cut',                   group: 'A-A-A' },
    { infinitive: 'hit',    past_simple: 'hit',        past_participle: 'hit',        meaning_es: 'golpear',           audio_text: 'hit, hit, hit',                   group: 'A-A-A' },
    { infinitive: 'hurt',   past_simple: 'hurt',       past_participle: 'hurt',       meaning_es: 'doler/herir',       audio_text: 'hurt, hurt, hurt',                group: 'A-A-A' },
    { infinitive: 'let',    past_simple: 'let',        past_participle: 'let',        meaning_es: 'dejar',             audio_text: 'let, let, let',                   group: 'A-A-A' },
    { infinitive: 'put',    past_simple: 'put',        past_participle: 'put',        meaning_es: 'poner',             audio_text: 'put, put, put',                   group: 'A-A-A' },
    { infinitive: 'quit',   past_simple: 'quit',       past_participle: 'quit',       meaning_es: 'dejar/rendirse',    audio_text: 'quit, quit, quit',                group: 'A-A-A' },
    { infinitive: 'read',   past_simple: 'read',       past_participle: 'read',       meaning_es: 'leer',              audio_text: 'read, read, read',                group: 'A-A-A' },
    { infinitive: 'set',    past_simple: 'set',        past_participle: 'set',        meaning_es: 'establecer',        audio_text: 'set, set, set',                   group: 'A-A-A' },
    { infinitive: 'shut',   past_simple: 'shut',       past_participle: 'shut',       meaning_es: 'cerrar',            audio_text: 'shut, shut, shut',                group: 'A-A-A' },
    { infinitive: 'split',  past_simple: 'split',      past_participle: 'split',      meaning_es: 'dividir',           audio_text: 'split, split, split',             group: 'A-A-A' },
    { infinitive: 'spread', past_simple: 'spread',     past_participle: 'spread',     meaning_es: 'extender',          audio_text: 'spread, spread, spread',          group: 'A-A-A' },

    // ── A-B-A group (infinitive = participle) ───────────────────────────────
    { infinitive: 'become', past_simple: 'became',     past_participle: 'become',     meaning_es: 'llegar a ser',      audio_text: 'become, became, become',          group: 'A-B-A' },
    { infinitive: 'come',   past_simple: 'came',       past_participle: 'come',       meaning_es: 'venir',             audio_text: 'come, came, come',                group: 'A-B-A' },
    { infinitive: 'run',    past_simple: 'ran',        past_participle: 'run',        meaning_es: 'correr',            audio_text: 'run, ran, run',                   group: 'A-B-A' },

    // ── A-B-B group (past = participle) ─────────────────────────────────────
    { infinitive: 'bring',       past_simple: 'brought',    past_participle: 'brought',    meaning_es: 'traer',             audio_text: 'bring, brought, brought',         group: 'A-B-B' },
    { infinitive: 'build',       past_simple: 'built',      past_participle: 'built',      meaning_es: 'construir',         audio_text: 'build, built, built',             group: 'A-B-B' },
    { infinitive: 'buy',         past_simple: 'bought',     past_participle: 'bought',     meaning_es: 'comprar',           audio_text: 'buy, bought, bought',             group: 'A-B-B' },
    { infinitive: 'catch',       past_simple: 'caught',     past_participle: 'caught',     meaning_es: 'atrapar',           audio_text: 'catch, caught, caught',           group: 'A-B-B' },
    { infinitive: 'feel',        past_simple: 'felt',       past_participle: 'felt',       meaning_es: 'sentir',            audio_text: 'feel, felt, felt',                group: 'A-B-B' },
    { infinitive: 'fight',       past_simple: 'fought',     past_participle: 'fought',     meaning_es: 'luchar',            audio_text: 'fight, fought, fought',           group: 'A-B-B' },
    { infinitive: 'find',        past_simple: 'found',      past_participle: 'found',      meaning_es: 'encontrar',         audio_text: 'find, found, found',              group: 'A-B-B' },
    { infinitive: 'get',         past_simple: 'got',        past_participle: 'got',        meaning_es: 'obtener',           audio_text: 'get, got, got',                   group: 'A-B-B' },
    { infinitive: 'have',        past_simple: 'had',        past_participle: 'had',        meaning_es: 'tener',             audio_text: 'have, had, had',                  group: 'A-B-B' },
    { infinitive: 'hear',        past_simple: 'heard',      past_participle: 'heard',      meaning_es: 'oír',               audio_text: 'hear, heard, heard',              group: 'A-B-B' },
    { infinitive: 'hold',        past_simple: 'held',       past_participle: 'held',       meaning_es: 'sostener',          audio_text: 'hold, held, held',                group: 'A-B-B' },
    { infinitive: 'keep',        past_simple: 'kept',       past_participle: 'kept',       meaning_es: 'guardar',           audio_text: 'keep, kept, kept',                group: 'A-B-B' },
    { infinitive: 'lay',         past_simple: 'laid',       past_participle: 'laid',       meaning_es: 'poner (huevos)',     audio_text: 'lay, laid, laid',                 group: 'A-B-B' },
    { infinitive: 'lead',        past_simple: 'led',        past_participle: 'led',        meaning_es: 'liderar',           audio_text: 'lead, led, led',                  group: 'A-B-B' },
    { infinitive: 'leave',       past_simple: 'left',       past_participle: 'left',       meaning_es: 'dejar/irse',        audio_text: 'leave, left, left',               group: 'A-B-B' },
    { infinitive: 'lend',        past_simple: 'lent',       past_participle: 'lent',       meaning_es: 'prestar',           audio_text: 'lend, lent, lent',                group: 'A-B-B' },
    { infinitive: 'lose',        past_simple: 'lost',       past_participle: 'lost',       meaning_es: 'perder',            audio_text: 'lose, lost, lost',                group: 'A-B-B' },
    { infinitive: 'make',        past_simple: 'made',       past_participle: 'made',       meaning_es: 'hacer/fabricar',    audio_text: 'make, made, made',                group: 'A-B-B' },
    { infinitive: 'mean',        past_simple: 'meant',      past_participle: 'meant',      meaning_es: 'significar',        audio_text: 'mean, meant, meant',              group: 'A-B-B' },
    { infinitive: 'meet',        past_simple: 'met',        past_participle: 'met',        meaning_es: 'conocer',           audio_text: 'meet, met, met',                  group: 'A-B-B' },
    { infinitive: 'pay',         past_simple: 'paid',       past_participle: 'paid',       meaning_es: 'pagar',             audio_text: 'pay, paid, paid',                 group: 'A-B-B' },
    { infinitive: 'say',         past_simple: 'said',       past_participle: 'said',       meaning_es: 'decir',             audio_text: 'say, said, said',                 group: 'A-B-B' },
    { infinitive: 'sell',        past_simple: 'sold',       past_participle: 'sold',       meaning_es: 'vender',            audio_text: 'sell, sold, sold',                group: 'A-B-B' },
    { infinitive: 'send',        past_simple: 'sent',       past_participle: 'sent',       meaning_es: 'enviar',            audio_text: 'send, sent, sent',                group: 'A-B-B' },
    { infinitive: 'sit',         past_simple: 'sat',        past_participle: 'sat',        meaning_es: 'sentarse',          audio_text: 'sit, sat, sat',                   group: 'A-B-B' },
    { infinitive: 'sleep',       past_simple: 'slept',      past_participle: 'slept',      meaning_es: 'dormir',            audio_text: 'sleep, slept, slept',             group: 'A-B-B' },
    { infinitive: 'spend',       past_simple: 'spent',      past_participle: 'spent',      meaning_es: 'gastar',            audio_text: 'spend, spent, spent',             group: 'A-B-B' },
    { infinitive: 'stand',       past_simple: 'stood',      past_participle: 'stood',      meaning_es: 'estar de pie',      audio_text: 'stand, stood, stood',             group: 'A-B-B' },
    { infinitive: 'teach',       past_simple: 'taught',     past_participle: 'taught',     meaning_es: 'enseñar',           audio_text: 'teach, taught, taught',           group: 'A-B-B' },
    { infinitive: 'tell',        past_simple: 'told',       past_participle: 'told',       meaning_es: 'contar/decir',      audio_text: 'tell, told, told',                group: 'A-B-B' },
    { infinitive: 'think',       past_simple: 'thought',    past_participle: 'thought',    meaning_es: 'pensar',            audio_text: 'think, thought, thought',         group: 'A-B-B' },
    { infinitive: 'understand',  past_simple: 'understood', past_participle: 'understood', meaning_es: 'entender',          audio_text: 'understand, understood, understood', group: 'A-B-B' },
    { infinitive: 'win',         past_simple: 'won',        past_participle: 'won',        meaning_es: 'ganar',             audio_text: 'win, won, won',                   group: 'A-B-B' },

    // ── A-B-C group (all different) ──────────────────────────────────────────
    { infinitive: 'be',      past_simple: 'was/were',   past_participle: 'been',       meaning_es: 'ser/estar',         audio_text: 'be, was were, been',              group: 'A-B-C' },
    { infinitive: 'begin',   past_simple: 'began',      past_participle: 'begun',      meaning_es: 'comenzar',          audio_text: 'begin, began, begun',             group: 'A-B-C' },
    { infinitive: 'break',   past_simple: 'broke',      past_participle: 'broken',     meaning_es: 'romper',            audio_text: 'break, broke, broken',            group: 'A-B-C' },
    { infinitive: 'choose',  past_simple: 'chose',      past_participle: 'chosen',     meaning_es: 'elegir',            audio_text: 'choose, chose, chosen',           group: 'A-B-C' },
    { infinitive: 'do',      past_simple: 'did',        past_participle: 'done',       meaning_es: 'hacer',             audio_text: 'do, did, done',                   group: 'A-B-C' },
    { infinitive: 'draw',    past_simple: 'drew',       past_participle: 'drawn',      meaning_es: 'dibujar',           audio_text: 'draw, drew, drawn',               group: 'A-B-C' },
    { infinitive: 'drink',   past_simple: 'drank',      past_participle: 'drunk',      meaning_es: 'beber',             audio_text: 'drink, drank, drunk',             group: 'A-B-C' },
    { infinitive: 'drive',   past_simple: 'drove',      past_participle: 'driven',     meaning_es: 'conducir',          audio_text: 'drive, drove, driven',            group: 'A-B-C' },
    { infinitive: 'eat',     past_simple: 'ate',        past_participle: 'eaten',      meaning_es: 'comer',             audio_text: 'eat, ate, eaten',                 group: 'A-B-C' },
    { infinitive: 'fall',    past_simple: 'fell',       past_participle: 'fallen',     meaning_es: 'caer',              audio_text: 'fall, fell, fallen',              group: 'A-B-C' },
    { infinitive: 'fly',     past_simple: 'flew',       past_participle: 'flown',      meaning_es: 'volar',             audio_text: 'fly, flew, flown',                group: 'A-B-C' },
    { infinitive: 'forget',  past_simple: 'forgot',     past_participle: 'forgotten',  meaning_es: 'olvidar',           audio_text: 'forget, forgot, forgotten',       group: 'A-B-C' },
    { infinitive: 'give',    past_simple: 'gave',       past_participle: 'given',      meaning_es: 'dar',               audio_text: 'give, gave, given',               group: 'A-B-C' },
    { infinitive: 'go',      past_simple: 'went',       past_participle: 'gone',       meaning_es: 'ir',                audio_text: 'go, went, gone',                  group: 'A-B-C' },
    { infinitive: 'grow',    past_simple: 'grew',       past_participle: 'grown',      meaning_es: 'crecer',            audio_text: 'grow, grew, grown',               group: 'A-B-C' },
    { infinitive: 'know',    past_simple: 'knew',       past_participle: 'known',      meaning_es: 'saber/conocer',     audio_text: 'know, knew, known',               group: 'A-B-C' },
    { infinitive: 'ride',    past_simple: 'rode',       past_participle: 'ridden',     meaning_es: 'montar',            audio_text: 'ride, rode, ridden',              group: 'A-B-C' },
    { infinitive: 'ring',    past_simple: 'rang',       past_participle: 'rung',       meaning_es: 'sonar',             audio_text: 'ring, rang, rung',                group: 'A-B-C' },
    { infinitive: 'see',     past_simple: 'saw',        past_participle: 'seen',       meaning_es: 'ver',               audio_text: 'see, saw, seen',                  group: 'A-B-C' },
    { infinitive: 'sing',    past_simple: 'sang',       past_participle: 'sung',       meaning_es: 'cantar',            audio_text: 'sing, sang, sung',                group: 'A-B-C' },
    { infinitive: 'speak',   past_simple: 'spoke',      past_participle: 'spoken',     meaning_es: 'hablar',            audio_text: 'speak, spoke, spoken',            group: 'A-B-C' },
    { infinitive: 'steal',   past_simple: 'stole',      past_participle: 'stolen',     meaning_es: 'robar',             audio_text: 'steal, stole, stolen',            group: 'A-B-C' },
    { infinitive: 'swim',    past_simple: 'swam',       past_participle: 'swum',       meaning_es: 'nadar',             audio_text: 'swim, swam, swum',                group: 'A-B-C' },
    { infinitive: 'take',    past_simple: 'took',       past_participle: 'taken',      meaning_es: 'tomar/coger',       audio_text: 'take, took, taken',               group: 'A-B-C' },
    { infinitive: 'throw',   past_simple: 'threw',      past_participle: 'thrown',     meaning_es: 'lanzar',            audio_text: 'throw, threw, thrown',            group: 'A-B-C' },
    { infinitive: 'wake',    past_simple: 'woke',       past_participle: 'woken',      meaning_es: 'despertar',         audio_text: 'wake, woke, woken',               group: 'A-B-C' },
    { infinitive: 'wear',    past_simple: 'wore',       past_participle: 'worn',       meaning_es: 'llevar puesto',     audio_text: 'wear, wore, worn',                group: 'A-B-C' },
    { infinitive: 'write',   past_simple: 'wrote',      past_participle: 'written',    meaning_es: 'escribir',          audio_text: 'write, wrote, written',           group: 'A-B-C' },
];

// ─────────────────────────────────────────────────────────────────────────────
// MODULE METADATA
// ─────────────────────────────────────────────────────────────────────────────

const ENGLISH_MODULE = {
    id:          'english-irregular-verbs',
    title:       'Irregular Verbs',
    icon:        '🇬🇧',
    lang:        'en',
    uiLang:      'es',
    description: 'Aprende los verbos irregulares más usados del inglés en 3 niveles.',
    totalLevels: 3,
    xpReward:    150,

    verbs: IRREGULAR_VERBS,

    // Quick-reference groups for study card view
    groups: {
        'A-A-A': { label: 'Iguales los tres',       color: '#22c55e', example: 'cut - cut - cut' },
        'A-B-A': { label: 'Infinitivo = Participio', color: '#3b82f6', example: 'come - came - come' },
        'A-B-B': { label: 'Pasado = Participio',     color: '#f59e0b', example: 'make - made - made' },
        'A-B-C': { label: 'Los tres distintos',      color: '#ef4444', example: 'go - went - gone' }
    }
};

// ─────────────────────────────────────────────────────────────────────────────
// LEVELS
// ─────────────────────────────────────────────────────────────────────────────

const ENGLISH_LEVELS = [

    // ═══════════════════════════════════════════════════════════════════════
    // LEVEL 1 — Matching: A-B-B group only (beginner-friendly)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id:          1,
        moduleId:    'english-irregular-verbs',
        type:        'matching',
        title:       'Match the Verbs',
        subtitle:    'Une cada verbo con su forma en pasado simple (grupo A-B-B)',
        passingScore: 60,
        maxScore:     100,
        scoring: {
            correctPoints:   10,
            incorrectPoints: -2,
            timeLimitSecs:   0,
            totalTimeSecs:   120,
            timeBonusMax:    20,
            streakBonus:     false
        },
        rounds: [
            {
                id: 'l1-r01',
                left:  ['make', 'get', 'buy', 'find', 'leave'],
                right: ['made', 'got', 'bought', 'found', 'left'],
                answers: { make: 'made', get: 'got', buy: 'bought', find: 'found', leave: 'left' }
            },
            {
                id: 'l1-r02',
                left:  ['say', 'tell', 'think', 'bring', 'hear'],
                right: ['said', 'told', 'thought', 'brought', 'heard'],
                answers: { say: 'said', tell: 'told', think: 'thought', bring: 'brought', hear: 'heard' }
            },
            {
                id: 'l1-r03',
                left:  ['keep', 'lose', 'sleep', 'teach', 'win'],
                right: ['kept', 'lost', 'slept', 'taught', 'won'],
                answers: { keep: 'kept', lose: 'lost', sleep: 'slept', teach: 'taught', win: 'won' }
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LEVEL 2 — Fill-blank: A-B-C group (intermediate)
    // ═══════════════════════════════════════════════════════════════════════
    {
        id:          2,
        moduleId:    'english-irregular-verbs',
        type:        'fill-blank',
        title:       'Complete the Sentence',
        subtitle:    'Escribe la forma correcta del verbo entre paréntesis',
        passingScore: 65,
        maxScore:     100,
        scoring: {
            correctPoints:     15,
            incorrectPoints:   0,
            caseInsensitive:   true,
            timeLimitSecs:     40,
            timeBonusMax:      5,
            streakBonus:       true
        },
        exercises: [
            {
                id:          'l2-e01',
                tense:       'past simple',
                before:      'Yesterday, Maria',
                blank:       '___',
                after:       'to the park with her dog. (go)',
                verb:        'go',
                answer:      'went',
                translation: 'Ayer, María fue al parque con su perro.',
                explanation: 'Past Simple of "go" → went (A-B-C group)'
            },
            {
                id:          'l2-e02',
                tense:       'past simple',
                before:      'She',
                blank:       '___',
                after:       'a beautiful song at the concert. (sing)',
                verb:        'sing',
                answer:      'sang',
                translation: 'Ella cantó una canción preciosa en el concierto.',
                explanation: '"sing" → sang → sung. Past Simple = sang.'
            },
            {
                id:          'l2-e03',
                tense:       'present perfect',
                before:      'I have never',
                blank:       '___',
                after:       'in the ocean. (swim)',
                verb:        'swim',
                answer:      'swum',
                translation: 'Nunca he nadado en el océano.',
                explanation: 'Present Perfect uses Past Participle: swim → swum.'
            },
            {
                id:          'l2-e04',
                tense:       'past simple',
                before:      'He',
                blank:       '___',
                after:       'his homework before dinner. (do)',
                verb:        'do',
                answer:      'did',
                translation: 'Él hizo sus deberes antes de cenar.',
                explanation: '"do" → did (Past Simple). Past Participle = done.'
            },
            {
                id:          'l2-e05',
                tense:       'present perfect',
                before:      'They have already',
                blank:       '___',
                after:       'the book three times. (read)',
                verb:        'read',
                answer:      'read',
                translation: 'Ellos ya han leído el libro tres veces.',
                explanation: '"read" is A-A-A: infinitive = past simple = past participle = read.'
            },
            {
                id:          'l2-e06',
                tense:       'past simple',
                before:      'She',
                blank:       '___',
                after:       'a postcard to her grandmother. (write)',
                verb:        'write',
                answer:      'wrote',
                translation: 'Ella escribió una postal a su abuela.',
                explanation: '"write" → wrote → written. Past Simple = wrote.'
            },
            {
                id:          'l2-e07',
                tense:       'present perfect',
                before:      'We have',
                blank:       '___',
                after:       'all the sandwiches! (eat)',
                verb:        'eat',
                answer:      'eaten',
                translation: '¡Hemos comido todos los bocadillos!',
                explanation: '"eat" → ate → eaten. Past Participle = eaten.'
            },
            {
                id:          'l2-e08',
                tense:       'past simple',
                before:      'My dad',
                blank:       '___',
                after:       'me a new bicycle for my birthday. (give)',
                verb:        'give',
                answer:      'gave',
                translation: 'Mi padre me dio una bicicleta nueva para mi cumpleaños.',
                explanation: '"give" → gave → given. Past Simple = gave (A-B-C).'
            },
            {
                id:          'l2-e09',
                tense:       'present perfect',
                before:      'Have you ever',
                blank:       '___',
                after:       'to another country? (go)',
                verb:        'go',
                answer:      'gone',
                translation: '¿Has ido alguna vez a otro país?',
                explanation: 'Present Perfect: have + gone (past participle of go).'
            },
            {
                id:          'l2-e10',
                tense:       'past simple',
                before:      'The bird',
                blank:       '___',
                after:       'away when we approached. (fly)',
                verb:        'fly',
                answer:      'flew',
                translation: 'El pájaro voló cuando nos acercamos.',
                explanation: '"fly" → flew → flown. Past Simple = flew (A-B-C).'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // LEVEL 3 — Audio Quiz: story with embedded irregular verbs + questions
    // ═══════════════════════════════════════════════════════════════════════
    {
        id:          3,
        moduleId:    'english-irregular-verbs',
        type:        'audio-quiz',
        title:       'Story Listening Quiz',
        subtitle:    'Escucha la historia y responde qué verbos irregulares se usaron',
        passingScore: 70,
        maxScore:     100,
        scoring: {
            correctPoints:   20,
            incorrectPoints: -5,
            timeLimitSecs:   0,
            streakBonus:     false
        },
        stories: [
            {
                id:         'l3-s01',
                title:      'A Summer Adventure',
                audio_text: `Last summer, my family went to the mountains for a week.
We woke up early every morning and ran along the river.
One day, my sister found a small injured bird and brought it home.
She gave it water and food, and it drank and ate everything.
We wrote a letter to a vet and sent it by email.
The vet came the next day, saw the bird, and said it would be fine.
We felt very happy. It was the best summer we had ever known.`,
                text_es:    `El verano pasado, mi familia fue a las montañas durante una semana.
Nos levantábamos temprano cada mañana y corríamos junto al río.
Un día, mi hermana encontró un pájaro pequeño herido y lo trajo a casa.
Le dio agua y comida, y él bebió y comió todo.
Escribimos una carta al veterinario y la enviamos por email.
El veterinario vino al día siguiente, vio al pájaro y dijo que estaría bien.
Nos sentimos muy felices. Fue el mejor verano que habíamos conocido.`,
                irregular_verbs_used: ['go→went', 'run→ran', 'find→found', 'bring→brought',
                                       'give→gave', 'drink→drank', 'eat→ate', 'write→wrote',
                                       'come→came', 'see→saw', 'say→said', 'know→known'],
                questions: [
                    {
                        id:       'l3-s01-q01',
                        question: 'What is the Past Simple of the verb used for "fue" (to go) in the story?',
                        options:  ['gone', 'went', 'goed', 'goes'],
                        answer:   'went',
                        explanation: '"go" is A-B-C: go → went → gone. Past Simple = went.'
                    },
                    {
                        id:       'l3-s01-q02',
                        question: 'The sister "encontró" a bird. Which verb and form was used?',
                        options:  ['find – found', 'find – found (PP)', 'find – finded', 'found – founds'],
                        answer:   'find – found',
                        explanation: '"find → found → found" is A-B-B. Past Simple = found.'
                    },
                    {
                        id:       'l3-s01-q03',
                        question: 'Two verbs appear together: the bird "bebió y comió". What are their Past Simples?',
                        options:  [
                            'drinked and eated',
                            'drank and ate',
                            'drunk and eaten',
                            'drank and eaten'
                        ],
                        answer:   'drank and ate',
                        explanation: 'Past Simple: drink→drank · eat→ate. (drunk/eaten are past participles)'
                    },
                    {
                        id:       'l3-s01-q04',
                        question: '"We wrote a letter" — what is the Past Participle of "write"?',
                        options:  ['wrote', 'writed', 'written', 'writ'],
                        answer:   'written',
                        explanation: '"write" → wrote (PS) → written (PP). Group A-B-C.'
                    },
                    {
                        id:       'l3-s01-q05',
                        question: 'How many A-B-B verbs (past = participle) appear in the story?',
                        options:  ['2', '3', '4', '5'],
                        answer:   '3',
                        explanation: 'A-B-B verbs in the story: bring→brought, find→found, say→said (3 verbs).'
                    }
                ]
            },
            {
                id:         'l3-s02',
                title:      'The School Play',
                audio_text: `Last month, our school did a theatre play.
I got the main role and spoke in front of 200 people.
My mum brought flowers and gave them to me after the show.
My friends said I was amazing.
I had never sung in public before, but I sang perfectly.
We all felt proud and slept very well that night.`,
                text_es:    `El mes pasado, nuestro colegio hizo una obra de teatro.
Yo conseguí el papel principal y hablé ante 200 personas.
Mi madre trajo flores y me las dio después del espectáculo.
Mis amigos dijeron que fui increíble.
Nunca había cantado en público, pero canté perfectamente.
Todos nos sentimos orgullosos y dormimos muy bien esa noche.`,
                irregular_verbs_used: ['do→did', 'get→got', 'speak→spoke', 'bring→brought',
                                       'give→gave', 'say→said', 'sing→sang', 'sleep→slept'],
                questions: [
                    {
                        id:       'l3-s02-q01',
                        question: '"Our school did a play" — what group does "do" belong to?',
                        options:  ['A-A-A', 'A-B-A', 'A-B-B', 'A-B-C'],
                        answer:   'A-B-C',
                        explanation: '"do → did → done": all three forms are different → A-B-C.'
                    },
                    {
                        id:       'l3-s02-q02',
                        question: '"I got the main role" — what is the Past Participle of "get"?',
                        options:  ['gotten/got', 'get', 'getten', 'gotten only'],
                        answer:   'gotten/got',
                        explanation: '"get → got → got" (British English). Both got and gotten are accepted as Past Participle.'
                    },
                    {
                        id:       'l3-s02-q03',
                        question: '"My friends said I was amazing" — "said" is Past Simple of...',
                        options:  ['see', 'say', 'send', 'sit'],
                        answer:   'say',
                        explanation: '"say → said → said". Group A-B-B: past simple = past participle = said.'
                    },
                    {
                        id:       'l3-s02-q04',
                        question: '"I had never sung" — "sung" is the ___ form of "sing".',
                        options:  ['infinitive', 'past simple', 'past participle', 'gerund'],
                        answer:   'past participle',
                        explanation: '"sing → sang → sung". "sung" is the Past Participle (used with have/had).'
                    },
                    {
                        id:       'l3-s02-q05',
                        question: 'Which two verbs in the story share the SAME past simple and past participle?',
                        options:  [
                            'bring and give',
                            'bring and say (both → -ought/-aid)',
                            'bring and sleep (both A-B-B)',
                            'speak and sing (both A-B-C)'
                        ],
                        answer:   'bring and sleep (both A-B-B)',
                        explanation: 'A-B-B: bring→brought→brought · sleep→slept→slept. Their past simple = past participle.'
                    }
                ]
            }
        ]
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// GROUP PRACTICE EXERCISES (5 MCQ per group)
// ─────────────────────────────────────────────────────────────────────────────

const ENGLISH_GROUP_EXERCISES = {
    'A-A-A': [
        {
            sentence:    'Be careful! You might ___ yourself. (hurt)',
            answer:      'hurt',
            options:     ['hurted', 'hurt', 'hurts', 'hurting'],
            explanation: '"hurt" is A-A-A: infinitive = past simple = past participle = hurt.'
        },
        {
            sentence:    'I ___ my finger while cooking last night. (cut)',
            answer:      'cut',
            options:     ['cutted', 'cuts', 'cut', 'cutting'],
            explanation: '"cut" is A-A-A: all three forms are cut.'
        },
        {
            sentence:    'She has already ___ the document. (read)',
            answer:      'read',
            options:     ['readed', 'red', 'read', 'reads'],
            explanation: '"read" is A-A-A: past participle = read (same spelling, different pronunciation).'
        },
        {
            sentence:    'The window ___ open during the storm. (let)',
            answer:      'let',
            options:     ['letted', 'let', 'leted', 'lets'],
            explanation: '"let" is A-A-A: let → let → let.'
        },
        {
            sentence:    'They ___ the bill between five people. (split)',
            answer:      'split',
            options:     ['splitted', 'splits', 'split', 'splitting'],
            explanation: '"split" is A-A-A: split → split → split.'
        }
    ],
    'A-B-A': [
        {
            sentence:    'She ___ home very late last night. (come)',
            answer:      'came',
            options:     ['come', 'comes', 'came', 'comed'],
            explanation: '"come" is A-B-A: come → came → come. Past Simple = came.'
        },
        {
            sentence:    'He ___ 10 km before breakfast. (run)',
            answer:      'ran',
            options:     ['runned', 'run', 'ran', 'runs'],
            explanation: '"run" is A-B-A: run → ran → run. Past Simple = ran.'
        },
        {
            sentence:    'She has ___ a doctor since last year. (become)',
            answer:      'become',
            options:     ['became', 'become', 'becomed', 'becomes'],
            explanation: '"become" is A-B-A: become → became → become. Participle = become.'
        },
        {
            sentence:    'Have you ___ to see me? I missed you! (come)',
            answer:      'come',
            options:     ['came', 'comed', 'come', 'comes'],
            explanation: 'Present Perfect uses Past Participle: come → came → come. PP = come.'
        },
        {
            sentence:    'The marathon ___ were exhausted at the finish line. (run)',
            answer:      'run',
            options:     ['ran', 'run', 'runned', 'running'],
            explanation: '"have run" — Past Participle of run is run (A-B-A group).'
        }
    ],
    'A-B-B': [
        {
            sentence:    'She ___ her keys at home and missed the bus. (leave)',
            answer:      'left',
            options:     ['leaved', 'left', 'leave', 'leaving'],
            explanation: '"leave" is A-B-B: leave → left → left. Past Simple = left.'
        },
        {
            sentence:    'I have never ___ a match before! (win)',
            answer:      'won',
            options:     ['winned', 'won', 'win', 'winning'],
            explanation: '"win" is A-B-B: win → won → won. Past Participle = won.'
        },
        {
            sentence:    'She ___ me how to play the guitar. (teach)',
            answer:      'taught',
            options:     ['teached', 'thought', 'taught', 'teaching'],
            explanation: '"teach" is A-B-B: teach → taught → taught. Past Simple = taught.'
        },
        {
            sentence:    'He ___ the bus just in time this morning. (catch)',
            answer:      'caught',
            options:     ['catched', 'caught', 'catch', 'catching'],
            explanation: '"catch" is A-B-B: catch → caught → caught. Past Simple = caught.'
        },
        {
            sentence:    'They have ___ a new library in the city centre. (build)',
            answer:      'built',
            options:     ['builded', 'build', 'built', 'building'],
            explanation: '"build" is A-B-B: build → built → built. Past Participle = built.'
        }
    ],
    'A-B-C': [
        {
            sentence:    'She ___ her favourite dress to the party. (wear)',
            answer:      'wore',
            options:     ['weared', 'worn', 'wore', 'wear'],
            explanation: '"wear" is A-B-C: wear → wore → worn. Past Simple = wore.'
        },
        {
            sentence:    'The glass ___ when it fell off the table. (break)',
            answer:      'broke',
            options:     ['breaked', 'broken', 'broke', 'breaking'],
            explanation: '"break" is A-B-C: break → broke → broken. Past Simple = broke.'
        },
        {
            sentence:    'She has never ___ a horse in her life. (ride)',
            answer:      'ridden',
            options:     ['rode', 'rided', 'ridden', 'rides'],
            explanation: '"ride" is A-B-C: ride → rode → ridden. Past Participle = ridden.'
        },
        {
            sentence:    'He ___ to work every day for twenty years. (drive)',
            answer:      'drove',
            options:     ['drived', 'driven', 'drove', 'drives'],
            explanation: '"drive" is A-B-C: drive → drove → driven. Past Simple = drove.'
        },
        {
            sentence:    'My parents have ___ a lot since I was born. (grow)',
            answer:      'grown',
            options:     ['growed', 'grew', 'grown', 'growing'],
            explanation: '"grow" is A-B-C: grow → grew → grown. Past Participle = grown.'
        }
    ]
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────────────────────
if (typeof module !== 'undefined') {
    module.exports = { ENGLISH_MODULE, ENGLISH_LEVELS, IRREGULAR_VERBS, GROUP_INFO, ENGLISH_GROUP_EXERCISES };
}
