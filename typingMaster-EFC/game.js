/**
 * TypeMaster - Game Logic
 * Character-by-character typing game with WPM measurement,
 * accuracy tracking, virtual keyboard, and Firebase stats.
 */

/* ── i18n ─────────────────────────────────────────────────── */
const I18N = {
    'es-ES': {
        gameTitle: 'TypeMaster',
        gameSubtitle: 'Aprende a escribir rápido',
        selectLevel: 'Elige el nivel',
        start: 'Empezar',
        wpm: 'PPM',
        accuracy: 'Precisión',
        time: 'Tiempo',
        progress: 'Progreso',
        restart: 'Reintentar',
        next: 'Siguiente nivel',
        results: '¡Resultado!',
        stars1: 'Bien hecho',
        stars2: '¡Muy bien!',
        stars3: '¡Perfecto!',
        errors: 'Errores',
        score: 'Puntos',
        newRecord: '🏆 ¡Nuevo récord!',
        menu: 'Menú',
        startTyping: 'Comienza a escribir...',
        quit: 'Salir',
        level: 'Nivel',
        stats: '📊 Estadísticas',
        achievements: '🏆 Logros',
        levelNames: [
            'Fila central', 'Palabras simples', 'Frases cortas', 'Mayúsculas',
            'Números', 'Acentos', 'Frases completas', 'Velocidad I', 'Velocidad II', 'Velocidad máxima'
        ],
        levelDescriptions: [
            'Teclado español. Fila central: A S D F G H J K L Ñ. Índice izquierdo en F, índice derecho en J.',
            'Escribe palabras simples con todas las letras (sin mayúsculas ni acentos)',
            'Practica frases cortas con signos de puntuación básicos',
            'Introduce el uso de mayúsculas con la tecla Shift',
            'Practica números y signos de puntuación (1-9, ., !, ?)',
            'Domina los acentos y la ñ (á, é, í, ó, ú, ñ)',
            'Frases completas con todos los caracteres',
            'Textos cortos — objetivo: 20 PPM',
            'Párrafos medianos — objetivo: 35 PPM',
            'Textos largos — objetivo: 50 PPM o más'
        ],
        keyboardHint: 'Teclado español: mano izquierda en A S D F — mano derecha en J K L Ñ. Los colores indican qué dedo usar.'
    },
    'en-US': {
        gameTitle: 'TypeMaster',
        gameSubtitle: 'Learn to type fast',
        selectLevel: 'Choose your level',
        start: 'Start',
        wpm: 'WPM',
        accuracy: 'Accuracy',
        time: 'Time',
        progress: 'Progress',
        restart: 'Try again',
        next: 'Next level',
        results: 'Results!',
        stars1: 'Good job',
        stars2: 'Very good!',
        stars3: 'Perfect!',
        errors: 'Errors',
        score: 'Score',
        newRecord: '🏆 New record!',
        menu: 'Menu',
        startTyping: 'Start typing...',
        quit: 'Quit',
        level: 'Level',
        stats: '📊 Stats',
        achievements: '🏆 Achievements',
        levelNames: [
            'Home row', 'Simple words', 'Short sentences', 'Capitals',
            'Numbers', 'Accents', 'Full sentences', 'Speed I', 'Speed II', 'Max speed'
        ],
        levelDescriptions: [
            'Spanish keyboard. Home row: A S D F G H J K L Ñ. Left index on F, right index on J.',
            'Type simple words using all letters (no capitals or accents)',
            'Practice short sentences with basic punctuation',
            'Introduce the use of capitals with the Shift key',
            'Practice numbers and punctuation (1-9, ., !, ?)',
            'Master accented letters and punctuation',
            'Complete sentences with all characters',
            'Short texts — target: 20 WPM',
            'Medium paragraphs — target: 35 WPM',
            'Long texts — target: 50+ WPM'
        ],
        keyboardHint: 'Spanish keyboard: left hand on A S D F — right hand on J K L Ñ. Colors show which finger to use.'
    },
    'eu-ES': {
        gameTitle: 'TypeMaster',
        gameSubtitle: 'Ikasi azkar idazten',
        selectLevel: 'Aukeratu maila',
        start: 'Hasi',
        wpm: 'KPM',
        accuracy: 'Zehaztasuna',
        time: 'Denbora',
        progress: 'Aurrerapena',
        restart: 'Berriz saiatu',
        next: 'Hurrengo maila',
        results: 'Emaitza!',
        stars1: 'Ondo egina',
        stars2: 'Oso ondo!',
        stars3: 'Perfektua!',
        errors: 'Akatsak',
        score: 'Puntuak',
        newRecord: '🏆 Errekor berria!',
        menu: 'Menua',
        startTyping: 'Hasi idazten...',
        quit: 'Irten',
        level: 'Maila',
        stats: '📊 Estatistikak',
        achievements: '🏆 Lorpenak',
        levelNames: [
            'Erdiko ilara', 'Hitz errazak', 'Esaldi laburrak', 'Letra larriak',
            'Zenbakiak', 'Azentoak', 'Esaldi osoak', 'Abiadura I', 'Abiadura II', 'Gehieneko abiadura'
        ],
        levelDescriptions: [
            'Gaztelaniako teklatua. Erdiko ilara: A S D F G H J K L Ñ. Ezkerreko erakuslea F-n, eskuinekoa J-n.',
            'Idatzi hitz errazak letra guztiekin (letra larririk edo azenturik gabe)',
            'Praktikatu esaldi laburrak oinarrizko puntuazioarekin',
            'Sartu letra larriak Shift teklarekin erabiliz',
            'Praktikatu zenbakiak eta puntuazioa (1-9, ., !, ?)',
            'Menperatu azentodun letrak eta bereizgarriak',
            'Esaldi osoak karaktere guztiekin',
            'Testu laburrak — helburua: 20 KPM',
            'Paragrafo ertainak — helburua: 35 KPM',
            'Testu luzeak — helburua: 50+ KPM'
        ],
        keyboardHint: 'Gaztelaniako teklatua: ezkerreko eskua A S D F-n — eskuinekoa J K L Ñ-n. Koloreen arabera zein hatz erabili.'
    }
};

/* ── Spanish keyboard layout QWERTY ES ────────────────────── *
 *  Row 2 (QWERTY): q w e r t y u i o p
 *  Row 3 (home):   a s d f g h j k l ñ
 *  Row 4 (bottom): < z x c v b n m , . -
 *
 *  Finger assignments (home row):
 *    Left  pinky  → a   Left  ring → s   Left  mid → d
 *    Left  index  → f g
 *    Right index  → j h
 *    Right mid    → k   Right ring → l   Right pinky → ñ
 * ──────────────────────────────────────────────────────────── */
const KEYBOARD_ROWS = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
    ['<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'],
    [' ']
];

/* 0=left-pinky  1=left-ring  2=left-mid  3=left-idx
   4=right-idx   5=right-mid  6=right-ring  7=right-pinky  8=thumb */
const FINGER_MAP = {
    // Numbers (same finger as letter underneath)
    '1': 0, '2': 1, '3': 2, '4': 3, '5': 3,
    '6': 4, '7': 4, '8': 5, '9': 6, '0': 7,
    // QWERTY row
    'q': 0, 'w': 1, 'e': 2, 'r': 3, 't': 3,
    'y': 4, 'u': 4, 'i': 5, 'o': 6, 'p': 7,
    // Home row  a s d f g | h j k l ñ
    'a': 0, 's': 1, 'd': 2, 'f': 3, 'g': 3,
    'h': 4, 'j': 4, 'k': 5, 'l': 6, 'ñ': 7,
    // Bottom row  < z x c v b | n m , . -
    '<': 0, 'z': 0, 'x': 1, 'c': 2, 'v': 3, 'b': 3,
    'n': 4, 'm': 4, ',': 5, '.': 6, '-': 7,
    // Space
    ' ': 8
};

const FINGER_CLASSES = [
    'ty-finger-left-pinky','ty-finger-left-ring','ty-finger-left-mid','ty-finger-left-idx',
    'ty-finger-right-idx','ty-finger-right-mid','ty-finger-right-ring','ty-finger-right-pinky',
    'ty-finger-thumb'
];

/* ── Non-printable keys to ignore ─────────────────────────── */
const IGNORED_KEYS = new Set([
    'Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab',
    'Escape', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Backspace', 'Delete', 'Enter', 'Home', 'End', 'PageUp', 'PageDown',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    'Dead', 'Unidentified', 'ContextMenu', 'NumLock', 'ScrollLock',
    'PrintScreen', 'Pause', 'Insert'
]);

/* ── Main game object ─────────────────────────────────────── */
const TypeMasterGame = {

    state: {
        level: 1,
        lang: 'es-ES',
        text: '',
        chars: [],          // [{char, state}]  state: 'pending'|'correct'|'wrong'|'current'
        pos: 0,
        errors: 0,
        totalKeys: 0,
        correctKeys: 0,
        startTime: null,
        elapsed: 0,
        timerInterval: null,
        wpm: 0,
        accuracy: 100,
        gameStarted: false,
        gameOver: false,
        selectedLevel: null,
        bestWpm: {}         // { 'level_1': 45, ... }
    },

    /* ── Init ────────────────────────────────────────────── */

    init() {
        this._loadSaved();
        this._detectLanguage();
        this._buildLevelGrid();
        this._bindEvents();
        this._updateStaticUI();
    },

    _loadSaved() {
        for (let i = 1; i <= 10; i++) {
            const val = parseInt(localStorage.getItem(`typemaster_best_level_${i}`), 10);
            if (!isNaN(val) && val > 0) {
                this.state.bestWpm[`level_${i}`] = val;
            }
        }
    },

    _detectLanguage() {
        const candidates = [
            localStorage.getItem('games_hub_language'),
            typeof PlatformI18n !== 'undefined' ? PlatformI18n.currentLanguage : null,
            navigator.language
        ];
        const supported = ['es-ES', 'en-US', 'eu-ES'];
        for (const c of candidates) {
            if (!c) continue;
            if (supported.includes(c)) { this.state.lang = c; return; }
            if (c.startsWith('eu')) { this.state.lang = 'eu-ES'; return; }
            if (c.startsWith('en')) { this.state.lang = 'en-US'; return; }
        }
        this.state.lang = 'es-ES';
    },

    _t(key) {
        const dict = I18N[this.state.lang] || I18N['es-ES'];
        return dict[key] !== undefined ? dict[key] : (I18N['es-ES'][key] || key);
    },

    /* ── Static UI text ─────────────────────────────────── */

    _updateStaticUI() {
        this._setText('ty-game-title',    this._t('gameTitle'));
        this._setText('ty-game-subtitle', this._t('gameSubtitle'));
        this._setText('ty-section-title', this._t('selectLevel'));
        this._setText('ty-start-btn',     this._t('start'));
        this._setText('ty-stats-btn',     this._t('stats'));
        this._setText('ty-achievements-btn', this._t('achievements'));
        this._setText('ty-wpm-lbl',  this._t('wpm'));
        this._setText('ty-acc-lbl',  this._t('accuracy'));
        this._setText('ty-time-lbl', this._t('time'));
        this._setText('ty-quit-btn', this._t('quit'));
        this._setText('ty-input-hint', this._t('startTyping'));

        const langLabels = { 'es-ES': 'Español', 'en-US': 'English', 'eu-ES': 'Euskara' };
        this._setText('ty-lang-info', langLabels[this.state.lang] || this.state.lang);

        this._buildLevelGrid();
    },

    _setText(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    },

    /* ── Level grid ─────────────────────────────────────── */

    _buildLevelGrid() {
        const grid = document.getElementById('ty-level-grid');
        if (!grid) return;
        grid.innerHTML = '';
        const names = this._t('levelNames');

        for (let i = 1; i <= 10; i++) {
            const btn = document.createElement('button');
            btn.className = 'ty-level-btn';
            btn.textContent = String(i);
            btn.setAttribute('aria-label', `${this._t('level')} ${i}: ${names[i - 1]}`);
            btn.dataset.level = i;

            if (this.state.bestWpm[`level_${i}`]) btn.classList.add('completed');

            const isLocked = i > 1 && !this.state.bestWpm[`level_${i - 1}`];
            if (isLocked) {
                btn.classList.add('locked');
                btn.setAttribute('aria-disabled', 'true');
                btn.setAttribute('title', 'Completa el nivel anterior primero');
            }

            btn.addEventListener('click', () => {
                if (!btn.classList.contains('locked')) this._selectLevel(i);
            });
            grid.appendChild(btn);
        }
    },

    _selectLevel(level) {
        this.state.selectedLevel = level;

        document.querySelectorAll('.ty-level-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (parseInt(btn.dataset.level, 10) === level) btn.classList.add('selected');
        });

        // Description
        const descEl = document.getElementById('ty-level-desc');
        if (descEl) {
            const names = this._t('levelNames');
            const descs = this._t('levelDescriptions');
            descEl.innerHTML =
                `<div class="ty-level-name">${names[level - 1]}</div>` +
                `<div>${descs[level - 1]}</div>`;
        }

        // Keyboard hint only for level 1
        const hintEl = document.getElementById('ty-home-kb-hint');
        if (hintEl) {
            if (level === 1) {
                hintEl.textContent = this._t('keyboardHint');
                hintEl.classList.remove('hidden');
            } else {
                hintEl.classList.add('hidden');
            }
        }

        // Best WPM
        const bestEl = document.getElementById('ty-best-wpm');
        if (bestEl) {
            const best = this.state.bestWpm[`level_${level}`];
            if (best) {
                bestEl.innerHTML = `Mejor: <span>${best} ${this._t('wpm')}</span>`;
                bestEl.style.display = 'block';
            } else {
                bestEl.style.display = 'none';
            }
        }

        const startBtn = document.getElementById('ty-start-btn');
        if (startBtn) startBtn.disabled = false;
    },

    /* ── Event binding ──────────────────────────────────── */

    _boundKeydown: null,

    _bindEvents() {
        const on = (id, fn) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('click', fn.bind(this));
        };

        on('ty-start-btn', () => {
            if (this.state.selectedLevel) this._startLevel(this.state.selectedLevel);
        });
        on('ty-quit-btn',   () => this._quitGame());
        on('ty-retry-btn',  () => this._startLevel(this.state.level));
        on('ty-next-btn',   () => {
            const next = Math.min(this.state.level + 1, 10);
            this._startLevel(next);
        });
        on('ty-menu-btn',   () => this._showHome());
        on('ty-stats-btn',  () => { window.location.href = '../platform/achievements.html'; });
        on('ty-achievements-btn', () => { window.location.href = '../platform/achievements.html'; });

        document.addEventListener('platformLanguageChanged', () => {
            this._detectLanguage();
            this._updateStaticUI();
        });
    },

    _attachKeydown() {
        this._detachKeydown();
        this._boundKeydown = (e) => this._handleKeypress(e);
        document.addEventListener('keydown', this._boundKeydown);

        // Mobile keyboard support via hidden input
        const mobileInput = document.getElementById('ty-mobile-input');
        if (mobileInput) {
            mobileInput.value = '';
            setTimeout(() => mobileInput.focus(), 100);
            this._mobileInputBound = () => {
                const val = mobileInput.value;
                if (!val) return;
                const key = val[val.length - 1];
                mobileInput.value = '';
                this._handleKeypress({ key, preventDefault: () => {} });
            };
            mobileInput.addEventListener('input', this._mobileInputBound);

            this._mobileKeydownBound = (e) => {
                if (e.key === 'Backspace') {
                    this._handleKeypress({ key: 'Backspace', preventDefault: () => {} });
                }
            };
            mobileInput.addEventListener('keydown', this._mobileKeydownBound);
        }
    },

    _detachKeydown() {
        if (this._boundKeydown) {
            document.removeEventListener('keydown', this._boundKeydown);
            this._boundKeydown = null;
        }
        const mobileInput = document.getElementById('ty-mobile-input');
        if (mobileInput) {
            if (this._mobileInputBound) {
                mobileInput.removeEventListener('input', this._mobileInputBound);
                this._mobileInputBound = null;
            }
            if (this._mobileKeydownBound) {
                mobileInput.removeEventListener('keydown', this._mobileKeydownBound);
                this._mobileKeydownBound = null;
            }
        }
    },

    /* ── Screen navigation ──────────────────────────────── */

    _showScreen(id) {
        document.querySelectorAll('.ty-screen').forEach(s => s.classList.remove('active'));
        const el = document.getElementById(id);
        if (el) {
            el.classList.add('active');
            el.scrollIntoView({ behavior: 'instant', block: 'start' });
            // Move focus to the new screen for screen reader announcement
            if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
            el.focus({ preventScroll: true });
        }
    },

    _showHome() {
        this._stopTimer();
        this._detachKeydown();
        this.state.gameStarted = false;
        this.state.gameOver    = false;
        this._buildLevelGrid();
        this._showScreen('ty-home');
    },

    /* ── Start level ─────────────────────────────────────── */

    _startLevel(level) {
        this._stopTimer();

        Object.assign(this.state, {
            level,
            pos: 0, errors: 0, totalKeys: 0, correctKeys: 0,
            startTime: null, elapsed: 0, wpm: 0, accuracy: 100,
            gameStarted: false, gameOver: false
        });

        const text = this._pickText(level);
        this.state.text  = text;
        this.state.chars = Array.from(text).map(ch => ({ char: ch, state: 'pending' }));
        if (this.state.chars.length > 0) this.state.chars[0].state = 'current';

        this._setText('ty-level-badge',
            `${this._t('level')} ${level} — ${this._t('levelNames')[level - 1]}`);
        this._setText('ty-wpm-val',  '0');
        this._setText('ty-acc-val',  '100%');
        this._setText('ty-time-val', '0:00');
        this._setText('ty-input-hint', this._t('startTyping'));

        const bar = document.getElementById('ty-progress');
        if (bar) bar.style.width = '0%';

        // Virtual keyboard: levels 1-3 only
        const kbWrap = document.getElementById('ty-keyboard-wrap');
        if (kbWrap) {
            if (level <= 3) {
                kbWrap.classList.remove('hidden');
                this._buildKeyboard();
            } else {
                kbWrap.classList.add('hidden');
            }
        }

        this._renderText();
        this._showScreen('ty-game');
        this._attachKeydown();

        if (level <= 3 && this.state.chars.length > 0) {
            this._renderKeyboard(this.state.chars[0].char);
        }
    },

    _pickText(level) {
        const data = TYPING_TEXTS[level];
        if (!data) return 'Error: nivel no encontrado.';
        const pool = level === 1
            ? data.all
            : (data[this.state.lang] || data['es-ES'] || []);
        if (!pool || !pool.length) return 'Error: sin textos.';
        return pool[Math.floor(Math.random() * pool.length)];
    },

    /* ── Keypress handler ───────────────────────────────── */

    _handleKeypress(e) {
        if (this.state.gameOver) return;
        if (IGNORED_KEYS.has(e.key)) return;
        if (e.ctrlKey || e.metaKey || e.altKey) return;

        const current = this.state.chars[this.state.pos];
        if (!current) return;

        // Prevent spacebar scroll
        if (e.key === ' ') e.preventDefault();

        // Start timer on first keypress
        if (!this.state.gameStarted) {
            this.state.gameStarted = true;
            this.state.startTime   = Date.now();
            this._startTimer();
            this._setText('ty-input-hint', '');
        }

        this.state.totalKeys++;

        if (e.key === current.char) {
            current.state = 'correct';
            this.state.correctKeys++;
        } else {
            current.state = 'wrong';
            this.state.errors++;
        }

        this.state.pos++;
        if (this.state.pos < this.state.chars.length) {
            this.state.chars[this.state.pos].state = 'current';
        }

        // Accuracy
        this.state.accuracy = Math.round((this.state.correctKeys / this.state.totalKeys) * 100);

        // Live WPM
        if (this.state.startTime) {
            const sec = (Date.now() - this.state.startTime) / 1000;
            if (sec >= 2) this.state.wpm = this._calcWpm(this.state.correctKeys, sec);
        }

        this._renderText();
        this._updateHud();

        const pct = Math.round((this.state.pos / this.state.chars.length) * 100);
        const bar = document.getElementById('ty-progress');
        if (bar) bar.style.width = `${pct}%`;

        if (this.state.level <= 3 && this.state.pos < this.state.chars.length) {
            this._renderKeyboard(this.state.chars[this.state.pos].char);
        }

        if (this.state.pos >= this.state.chars.length) this._finishGame();
    },

    /* ── WPM ─────────────────────────────────────────────── */

    _calcWpm(correctChars, elapsedSeconds) {
        if (elapsedSeconds < 0.5) return 0;
        return Math.round((correctChars / 5) / (elapsedSeconds / 60));
    },

    /* ── Timer ───────────────────────────────────────────── */

    _startTimer() {
        this._stopTimer();
        this.state.timerInterval = setInterval(() => {
            if (!this.state.startTime || this.state.gameOver) return;
            this.state.elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
            this._renderTimer();
        }, 300);
    },

    _stopTimer() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
            this.state.timerInterval = null;
        }
    },

    _renderTimer() {
        const s  = this.state.elapsed;
        const mm = String(Math.floor(s / 60));
        const ss = String(s % 60).padStart(2, '0');
        this._setText('ty-time-val', `${mm}:${ss}`);
    },

    /* ── HUD ─────────────────────────────────────────────── */

    _updateHud() {
        this._setText('ty-wpm-val', String(this.state.wpm));
        this._setText('ty-acc-val', `${this.state.accuracy}%`);
        this._renderTimer();
    },

    /* ── Text rendering ──────────────────────────────────── */

    _renderText() {
        const area = document.getElementById('ty-text-display');
        if (!area) return;

        const frag = document.createDocumentFragment();
        this.state.chars.forEach((ch, idx) => {
            const span = document.createElement('span');
            span.className = `ty-char ${ch.state}`;
            if (ch.char === ' ') {
                span.textContent = '\u00A0';
                span.classList.add('ty-space');
            } else {
                span.textContent = ch.char;
            }
            span.dataset.idx = idx;
            frag.appendChild(span);
        });

        area.innerHTML = '';
        area.appendChild(frag);

        const curSpan = area.querySelector('.ty-char.current');
        if (curSpan) {
            const aRect = area.getBoundingClientRect();
            const sRect = curSpan.getBoundingClientRect();
            if (sRect.bottom > aRect.bottom - 8 || sRect.top < aRect.top + 8) {
                curSpan.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }
    },

    /* ── Virtual keyboard ────────────────────────────────── */

    _buildKeyboard() {
        const wrap = document.getElementById('ty-keyboard-wrap');
        if (!wrap) return;
        wrap.innerHTML = '';

        // Spanish keyboard labels
        const KEY_LABELS = { 'ñ': 'Ñ', '<': '<>', ',': ',', '.': '.', '-': '-', ' ': 'ESP' };

        KEYBOARD_ROWS.forEach(row => {
            const rowEl = document.createElement('div');
            rowEl.className = 'ty-kb-row';
            row.forEach(key => {
                const keyEl = document.createElement('div');
                keyEl.className = 'ty-key';
                const fi = FINGER_MAP[key];
                if (fi !== undefined) keyEl.classList.add(FINGER_CLASSES[fi]);
                if (key === ' ') keyEl.classList.add('space');
                keyEl.textContent = KEY_LABELS[key] || key.toUpperCase();
                keyEl.dataset.key = key;
                rowEl.appendChild(keyEl);
            });
            wrap.appendChild(rowEl);
        });
    },

    _renderKeyboard(targetChar) {
        const wrap = document.getElementById('ty-keyboard-wrap');
        if (!wrap || wrap.classList.contains('hidden')) return;
        wrap.querySelectorAll('.ty-key').forEach(k => k.classList.remove('current-key'));
        if (!targetChar) return;
        const lower = targetChar.toLowerCase();
        wrap.querySelectorAll('.ty-key').forEach(k => {
            if (k.dataset.key === lower) k.classList.add('current-key');
        });
    },

    /* ── Score ───────────────────────────────────────────── */

    _calculateScore(wpm, accuracy, level) {
        const base      = wpm * 5;
        const accBonus  = accuracy >= 98 ? 100 : accuracy >= 95 ? 70 : accuracy >= 90 ? 40 : 0;
        const levelMult = 1 + (level - 1) * 0.2;
        return Math.round((base + accBonus) * levelMult);
    },

    _calcStars(wpm, accuracy, level) {
        const targetWpm = level * 5 + 10;
        if (accuracy >= 95 && wpm >= targetWpm) return 3;
        if (accuracy >= 85) return 2;
        return 1;
    },

    /* ── Finish ──────────────────────────────────────────── */

    _finishGame() {
        this.state.gameOver = true;
        this._stopTimer();
        this._detachKeydown();

        const elapsed = this.state.startTime
            ? (Date.now() - this.state.startTime) / 1000 : 1;
        this.state.elapsed = Math.round(elapsed);

        const finalWpm = this._calcWpm(this.state.correctKeys, elapsed);
        const finalAcc = this.state.accuracy;
        const stars    = this._calcStars(finalWpm, finalAcc, this.state.level);
        const score    = this._calculateScore(finalWpm, finalAcc, this.state.level);

        const bestKey  = `level_${this.state.level}`;
        const prevBest = this.state.bestWpm[bestKey] || 0;
        const isNewRecord = finalWpm > prevBest;
        if (isNewRecord && finalWpm > 0) {
            this.state.bestWpm[bestKey] = finalWpm;
            localStorage.setItem(`typemaster_best_level_${this.state.level}`, String(finalWpm));
        }

        const unlocked   = this._checkAchievements(finalWpm, finalAcc, this.state.level);
        const gameResult = {
            level:           this.state.level,
            wpm:             finalWpm,
            accuracy:        finalAcc,
            elapsedSeconds:  this.state.elapsed,
            errors:          this.state.errors,
            totalKeys:       this.state.totalKeys,
            correctKeys:     this.state.correctKeys,
            stars,
            score,
            correctAnswers:  this.state.correctKeys,
            totalQuestions:  Math.max(1, this.state.totalKeys),
            totalAttempts:   Math.max(1, this.state.totalKeys),
            bestStreak:      0,
            operation:       'typing',
            unlockedAchievements: unlocked
        };

        this._saveStats(gameResult);
        this._showResults({ finalWpm, finalAcc, stars, score, elapsed: this.state.elapsed, isNewRecord, unlocked });
    },

    /* ── Achievements ────────────────────────────────────── */

    _checkAchievements(wpm, accuracy, level) {
        const newly = [];
        const check = (id) => {
            if (!localStorage.getItem(`typemaster_ach_${id}`)) {
                localStorage.setItem(`typemaster_ach_${id}`, '1');
                newly.push(id);
                if (typeof PlatformFirestore !== 'undefined' &&
                    typeof PlatformAuth      !== 'undefined' && PlatformAuth.currentUser) {
                    PlatformFirestore.unlockAchievement(
                        PlatformAuth.currentUser.uid, 'typingMaster', id
                    ).catch(() => {});
                }
            }
        };
        check('ty_first');
        if (wpm      >= 20)  check('ty_wpm20');
        if (wpm      >= 40)  check('ty_wpm40');
        if (wpm      >= 60)  check('ty_wpm60');
        if (accuracy === 100) check('ty_perfect');
        if (level    >= 10)  check('ty_level10');
        return newly;
    },

    /* ── Firebase save ───────────────────────────────────── */

    async _saveStats(gameResult) {
        try {
            if (typeof PlatformAuth      !== 'undefined' &&
                typeof PlatformFirestore !== 'undefined') {
                const user = PlatformAuth.currentUser;
                if (user) {
                    await PlatformFirestore.updateGameStats(user.uid, 'typingMaster', gameResult);
                }
            }
        } catch (err) {
            console.warn('TypeMaster: could not save stats', err);
        }
    },

    /* ── Results screen ──────────────────────────────────── */

    _showResults({ finalWpm, finalAcc, stars, score, elapsed, isNewRecord, unlocked }) {
        this._setText('ty-result-title', this._t('results'));
        this._setText('ty-stars', '⭐'.repeat(stars) + '☆'.repeat(3 - stars));
        this._setText('ty-final-wpm', String(finalWpm));
        this._setText('ty-final-wpm-lbl', this._t('wpm'));
        this._setText('ty-final-acc', `${finalAcc}%`);

        const mm = Math.floor(elapsed / 60);
        const ss = String(elapsed % 60).padStart(2, '0');
        this._setText('ty-final-time', `${mm}:${ss}`);
        this._setText('ty-final-score', String(score));
        this._setText('ty-final-errors', String(this.state.errors));

        this._setText('ty-result-acc-lbl',   this._t('accuracy'));
        this._setText('ty-result-time-lbl',  this._t('time'));
        this._setText('ty-result-score-lbl', this._t('score'));
        this._setText('ty-result-err-lbl',   this._t('errors'));

        const recEl = document.getElementById('ty-new-record');
        if (recEl) {
            if (isNewRecord && finalWpm > 0) {
                recEl.textContent = this._t('newRecord');
                recEl.classList.remove('hidden');
            } else {
                recEl.classList.add('hidden');
            }
        }

        const achEl = document.getElementById('ty-achievements-unlocked');
        if (achEl) {
            if (unlocked.length > 0) {
                const LABELS = {
                    ty_first:   `⌨️ Primera sesión`,
                    ty_wpm20:   `🚀 20 ${this._t('wpm')}`,
                    ty_wpm40:   `⚡ 40 ${this._t('wpm')}`,
                    ty_wpm60:   `🔥 60 ${this._t('wpm')}`,
                    ty_perfect: `✨ 100% ${this._t('accuracy')}`,
                    ty_level10: `👑 ${this._t('level')} 10`
                };
                achEl.innerHTML = unlocked.map(id =>
                    `<span class="ty-achievement-badge">${LABELS[id] || id}</span>`
                ).join('');
                achEl.classList.remove('hidden');
            } else {
                achEl.classList.add('hidden');
            }
        }

        this._setText('ty-retry-btn', this._t('restart'));
        this._setText('ty-menu-btn',  this._t('menu'));

        const nextBtn = document.getElementById('ty-next-btn');
        if (nextBtn) {
            nextBtn.textContent   = this._t('next');
            nextBtn.style.display = this.state.level < 10 ? '' : 'none';
        }

        this._showScreen('ty-result');
    },

    /* ── Quit ─────────────────────────────────────────────── */

    _quitGame() {
        const gameIsActive = this.state.gameStarted && !this.state.gameOver && this.state.startTime;
        if (gameIsActive) {
            this._showQuitConfirm();
        } else {
            this._doQuit();
        }
    },

    _showQuitConfirm() {
        const modal = document.getElementById('ty-quit-modal');
        if (!modal) { this._doQuit(); return; }
        const trigger = document.activeElement;
        modal.classList.remove('hidden');
        const cancelBtn = document.getElementById('ty-quit-cancel');
        const okBtn     = document.getElementById('ty-quit-ok');
        setTimeout(() => cancelBtn?.focus(), 0);

        const trapFn = e => {
            if (e.key !== 'Tab') return;
            const nodes = [cancelBtn, okBtn].filter(Boolean);
            const first = nodes[0], last = nodes[nodes.length - 1];
            if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
            else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
        };
        modal.addEventListener('keydown', trapFn);
        const close = () => {
            modal.classList.add('hidden');
            modal.removeEventListener('keydown', trapFn);
            trigger?.focus();
        };
        cancelBtn?.addEventListener('click', close, { once: true });
        okBtn?.addEventListener('click', () => { close(); this._doQuit(); }, { once: true });
        modal.addEventListener('keydown', e => { if (e.key === 'Escape') close(); }, { once: true });
    },

    _doQuit() {
        this._stopTimer();
        this._detachKeydown();
        this.state.gameOver = true;
        this._showHome();
    }
};
