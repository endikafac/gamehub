/**
 * WordSearch - Game Logic
 * Interactive word-search game with multi-language support,
 * educational word popups, Firebase stats and achievements.
 */

/* ── i18n ─────────────────────────────────────────────────── */
const WS_I18N = {
    'es-ES': {
        gameTitle: 'WordSearch',
        gameSubtitle: 'Encuentra palabras y aprende',
        selectLevel: 'Elige el nivel',
        start: 'Empezar',
        wordsFound: 'Palabras',
        time: 'Tiempo',
        level: 'Nivel',
        quit: 'Salir',
        results: '¡Resultados!',
        wordsFoundLabel: 'palabras encontradas',
        timeTaken: 'Tiempo',
        score: 'Puntos',
        newRecord: '🏆 ¡Nuevo récord!',
        retry: 'Reintentar',
        next: 'Siguiente nivel',
        menu: 'Menú',
        stars1: '¡Bien hecho!',
        stars2: '¡Muy bien!',
        stars3: '¡Perfecto!',
        stats: '📊 Estadísticas',
        achievements: '🏆 Logros',
        synonyms: 'Sinónimos',
        antonyms: 'Antónimos',
        dismiss: 'Continuar',
        levelDesc: 'Selecciona un nivel para comenzar',
        allWords: 'Todas las categorías',
        categoriesLabel: 'Categorías',
        toFind: 'Palabras a encontrar',
        completed: '¡Sopa completada!',
        levelNames: [
            'Principiante', 'Fácil', 'Normal', 'Medio', 'Intermedio',
            'Avanzado', 'Difícil', 'Experto', 'Maestro', 'Leyenda'
        ],
        levelDescriptions: [
            'Cuadrícula 8×8 · 5 palabras · Animales y colores · Solo horizontal/vertical',
            'Cuadrícula 9×9 · 6 palabras · Animales y naturaleza · Solo horizontal/vertical',
            'Cuadrícula 10×10 · 7 palabras · Naturaleza, colores y escuela · 4 direcciones',
            'Cuadrícula 11×11 · 8 palabras · Escuela y cuerpo humano · 4 direcciones',
            'Cuadrícula 12×12 · 9 palabras · Comida, cuerpo y escuela · 8 direcciones',
            'Cuadrícula 13×13 · 10 palabras · Ciencia y naturaleza · 8 direcciones',
            'Cuadrícula 14×14 · 11 palabras · Vocabulario y ciencia · 8 direcciones',
            'Cuadrícula 15×15 · 12 palabras · Animales, vocabulario y ciencia · 8 direcciones',
            'Cuadrícula 16×16 · 13 palabras · Vocabulario, ciencia y cuerpo · 8 direcciones',
            'Cuadrícula 18×18 · 15 palabras · Todas las categorías · 8 direcciones'
        ],
        quitConfirm: '¿Salir del juego?',
        quitMsg: 'Se perderá el progreso actual.',
        cancel: 'Cancelar'
    },
    'en-US': {
        gameTitle: 'WordSearch',
        gameSubtitle: 'Find words and learn',
        selectLevel: 'Choose your level',
        start: 'Start',
        wordsFound: 'Words',
        time: 'Time',
        level: 'Level',
        quit: 'Quit',
        results: 'Results!',
        wordsFoundLabel: 'words found',
        timeTaken: 'Time',
        score: 'Score',
        newRecord: '🏆 New record!',
        retry: 'Try again',
        next: 'Next level',
        menu: 'Menu',
        stars1: 'Good job!',
        stars2: 'Very good!',
        stars3: 'Perfect!',
        stats: '📊 Stats',
        achievements: '🏆 Achievements',
        synonyms: 'Synonyms',
        antonyms: 'Antonyms',
        dismiss: 'Continue',
        levelDesc: 'Select a level to start',
        allWords: 'All categories',
        categoriesLabel: 'Categories',
        toFind: 'Words to find',
        completed: 'Word search completed!',
        levelNames: [
            'Beginner', 'Easy', 'Normal', 'Medium', 'Intermediate',
            'Advanced', 'Difficult', 'Expert', 'Master', 'Legend'
        ],
        levelDescriptions: [
            '8×8 grid · 5 words · Animals & colours · Horizontal/vertical only',
            '9×9 grid · 6 words · Animals & nature · Horizontal/vertical only',
            '10×10 grid · 7 words · Nature, colours & school · 4 directions',
            '11×11 grid · 8 words · School & body · 4 directions',
            '12×12 grid · 9 words · Food, body & school · 8 directions',
            '13×13 grid · 10 words · Science & nature · 8 directions',
            '14×14 grid · 11 words · Vocabulary & science · 8 directions',
            '15×15 grid · 12 words · Animals, vocabulary & science · 8 directions',
            '16×16 grid · 13 words · Vocabulary, science & body · 8 directions',
            '18×18 grid · 15 words · All categories · 8 directions'
        ],
        quitConfirm: 'Quit the game?',
        quitMsg: 'Current progress will be lost.',
        cancel: 'Cancel'
    },
    'eu-ES': {
        gameTitle: 'WordSearch',
        gameSubtitle: 'Aurkitu hitzak eta ikasi',
        selectLevel: 'Aukeratu maila',
        start: 'Hasi',
        wordsFound: 'Hitzak',
        time: 'Denbora',
        level: 'Maila',
        quit: 'Irten',
        results: 'Emaitzak!',
        wordsFoundLabel: 'hitz aurkitu',
        timeTaken: 'Denbora',
        score: 'Puntuak',
        newRecord: '🏆 Errekorra!',
        retry: 'Berritu',
        next: 'Hurrengo maila',
        menu: 'Menua',
        stars1: 'Ondo eginda!',
        stars2: 'Oso ondo!',
        stars3: 'Perfektua!',
        stats: '📊 Estatistikak',
        achievements: '🏆 Lorpenak',
        synonyms: 'Sinonimoak',
        antonyms: 'Antonimoak',
        dismiss: 'Jarraitu',
        levelDesc: 'Aukeratu maila hasteko',
        allWords: 'Kategoria guztiak',
        categoriesLabel: 'Kategoriak',
        toFind: 'Aurkitu beharreko hitzak',
        completed: 'Hitz-zopa osatuta!',
        levelNames: [
            'Hasiberria', 'Erraza', 'Normala', 'Ertaina', 'Bitartekoa',
            'Aurreratua', 'Zaila', 'Aditua', 'Maisua', 'Kondaira'
        ],
        levelDescriptions: [
            '8×8 sarea · 5 hitz · Animaliak eta koloreak · Horizontal/bertikala',
            '9×9 sarea · 6 hitz · Animaliak eta natura · Horizontal/bertikala',
            '10×10 sarea · 7 hitz · Natura, koloreak eta eskola · 4 norabide',
            '11×11 sarea · 8 hitz · Eskola eta gorputza · 4 norabide',
            '12×12 sarea · 9 hitz · Janaria, gorputza eta eskola · 8 norabide',
            '13×13 sarea · 10 hitz · Zientzia eta natura · 8 norabide',
            '14×14 sarea · 11 hitz · Hiztegia eta zientzia · 8 norabide',
            '15×15 sarea · 12 hitz · Animaliak, hiztegia eta zientzia · 8 norabide',
            '16×16 sarea · 13 hitz · Hiztegia, zientzia eta gorputza · 8 norabide',
            '18×18 sarea · 15 hitz · Kategoria guztiak · 8 norabide'
        ],
        quitConfirm: 'Jokoa utzi?',
        quitMsg: 'Uneko aurrerapena galduko da.',
        cancel: 'Utzi'
    }
};

/* ── Level Configuration ──────────────────────────────────── */
const WS_LEVELS = {
    1:  { size: 8,  words: 5,  dirs: 2, category: ['animales', 'colores'] },
    2:  { size: 9,  words: 6,  dirs: 2, category: ['animales', 'naturaleza'] },
    3:  { size: 10, words: 7,  dirs: 4, category: ['naturaleza', 'colores', 'escuela'] },
    4:  { size: 11, words: 8,  dirs: 4, category: ['escuela', 'cuerpo'] },
    5:  { size: 12, words: 9,  dirs: 8, category: ['comida', 'cuerpo', 'escuela'] },
    6:  { size: 13, words: 10, dirs: 8, category: ['ciencia', 'naturaleza'] },
    7:  { size: 14, words: 11, dirs: 8, category: ['vocabulario', 'ciencia'] },
    8:  { size: 15, words: 12, dirs: 8, category: ['animales', 'vocabulario', 'ciencia'] },
    9:  { size: 16, words: 13, dirs: 8, category: ['vocabulario', 'ciencia', 'cuerpo'] },
    10: { size: 18, words: 15, dirs: 8, category: null }
};

/* ── 8 directions: [dRow, dCol] ───────────────────────────── */
const DIRS8 = [[0,1],[1,0],[1,1],[1,-1],[0,-1],[-1,0],[-1,-1],[-1,1]];

/* ── Grid Generation ──────────────────────────────────────── */
function wsNormalize(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
}

function wsBuildGrid(size, wordList, numDirs) {
    const grid = Array.from({length: size}, () => Array(size).fill(''));
    const placed = [];
    const dirs = DIRS8.slice(0, numDirs);

    for (const entry of wordList) {
        const w = entry.word;
        if (w.length > size) continue;
        let ok = false;
        for (let attempt = 0; attempt < 250 && !ok; attempt++) {
            const dir = dirs[Math.floor(Math.random() * dirs.length)];
            const r0  = Math.floor(Math.random() * size);
            const c0  = Math.floor(Math.random() * size);
            const r1  = r0 + dir[0] * (w.length - 1);
            const c1  = c0 + dir[1] * (w.length - 1);
            if (r1 < 0 || r1 >= size || c1 < 0 || c1 >= size) continue;
            let canPlace = true;
            for (let i = 0; i < w.length && canPlace; i++) {
                const cell = grid[r0 + dir[0]*i][c0 + dir[1]*i];
                if (cell !== '' && cell !== w[i]) canPlace = false;
            }
            if (canPlace) {
                for (let i = 0; i < w.length; i++) {
                    grid[r0 + dir[0]*i][c0 + dir[1]*i] = w[i];
                }
                placed.push({ entry, row: r0, col: c0, dir, len: w.length, found: false, colorIndex: -1 });
                ok = true;
            }
        }
    }

    const FILL = 'AAAEEEIIIOOUULLLNNNRRRSSTTDCMPFGHBVQYZ';
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = FILL[Math.floor(Math.random() * FILL.length)];
            }
        }
    }
    return { grid, placed };
}

/* ── Line Cells ───────────────────────────────────────────── */
function wsLineCells(r0, c0, r1, c1) {
    const dr = r1 - r0, dc = c1 - c0;
    const len = Math.max(Math.abs(dr), Math.abs(dc));
    if (len === 0) return [{r: r0, c: c0}];
    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;
    const sr = dr === 0 ? 0 : dr / Math.abs(dr);
    const sc = dc === 0 ? 0 : dc / Math.abs(dc);
    const cells = [];
    for (let i = 0; i <= len; i++) cells.push({r: r0 + sr*i, c: c0 + sc*i});
    return cells;
}

/* ── Main Game Object ─────────────────────────────────────── */
const WordSearchGame = {
    _level: 1,
    _grid: [],
    _placed: [],
    _found: 0,
    _startTime: null,
    _timerInterval: null,
    _dragging: false,
    _startCell: null,
    _currentSelection: [],
    _totalWordsFound: 0,
    _completedLevels: [],
    _bestTimes: {},
    _popupTimeout: null,
    _lang: 'es-ES',

    /* ── Public entry point ─────────────────────────────── */
    init() {
        this._lang = (typeof PlatformI18n !== 'undefined')
            ? PlatformI18n.currentLanguage
            : (localStorage.getItem('games_hub_language') || 'es-ES');

        this._loadProgress();
        this._buildLevelGrid();
        this._bindHomeEvents();
        this._showScreen('home');

        // React to language changes
        document.addEventListener('platformLanguageChanged', () => {
            this._lang = PlatformI18n.currentLanguage;
            this._updateHomeTexts();
            if (this._currentScreen === 'game') this._updateGameTexts();
        });
    },

    /* ── i18n helper ────────────────────────────────────── */
    _t(key) {
        const dict = WS_I18N[this._lang] || WS_I18N['es-ES'];
        return dict[key] ?? WS_I18N['es-ES'][key] ?? key;
    },

    _langCode() {
        if (this._lang.startsWith('en')) return 'en';
        if (this._lang.startsWith('eu')) return 'eu';
        return 'es';
    },

    /* ── Screen management ──────────────────────────────── */
    _currentScreen: 'home',

    _showScreen(name) {
        this._currentScreen = name;
        ['home', 'game', 'results'].forEach(s => {
            const el = document.getElementById(`ws-screen-${s}`);
            if (el) {
                el.classList.toggle('active', s === name);
            }
        });
        const active = document.getElementById(`ws-screen-${name}`);
        if (active) {
            // Move focus to the new screen for screen reader announcement
            if (!active.hasAttribute('tabindex')) active.setAttribute('tabindex', '-1');
            active.focus({ preventScroll: true });
        }
    },

    /* ── Progress persistence ───────────────────────────── */
    _loadProgress() {
        try {
            const raw = localStorage.getItem('games_hub_ws_progress');
            if (raw) {
                const data = JSON.parse(raw);
                this._completedLevels = data.completedLevels || [];
                this._bestTimes       = data.bestTimes       || {};
                this._totalWordsFound = data.totalWordsFound  || 0;
                this._level           = Math.min(Math.max(data.lastLevel || 1, 1), 10);
            }
        } catch {}
    },

    _saveProgress() {
        try {
            localStorage.setItem('games_hub_ws_progress', JSON.stringify({
                completedLevels: this._completedLevels,
                bestTimes:       this._bestTimes,
                totalWordsFound: this._totalWordsFound,
                lastLevel:       this._level
            }));
        } catch {}
    },

    /* ── Home screen ────────────────────────────────────── */
    _buildLevelGrid() {
        const container = document.getElementById('ws-level-grid');
        if (!container) return;
        container.innerHTML = '';
        for (let lv = 1; lv <= 10; lv++) {
            const btn = document.createElement('button');
            btn.className = 'ws-level-btn' +
                (this._completedLevels.includes(lv) ? ' completed' : '') +
                (lv === this._level ? ' selected' : '');
            btn.textContent = lv;
            btn.dataset.level = lv;
            btn.setAttribute('role', 'option');
            btn.setAttribute('aria-selected', lv === this._level ? 'true' : 'false');
            btn.addEventListener('click', () => this._selectLevel(lv));
            container.appendChild(btn);
        }
        this._updateLevelDesc(this._level);
    },

    _selectLevel(lv) {
        this._level = lv;
        document.querySelectorAll('.ws-level-btn').forEach(btn => {
            const isSelected = parseInt(btn.dataset.level) === lv;
            btn.classList.toggle('selected', isSelected);
            btn.setAttribute('aria-selected', String(isSelected));
        });
        this._updateLevelDesc(lv);
        const startBtn = document.getElementById('ws-start-btn');
        if (startBtn) startBtn.disabled = false;
    },

    _updateLevelDesc(lv) {
        const dict = WS_I18N[this._lang] || WS_I18N['es-ES'];
        const desc = document.getElementById('ws-level-desc');
        if (desc) {
            const cfg = WS_LEVELS[lv];
            const name = dict.levelNames[lv - 1] || `Nivel ${lv}`;
            const descText = dict.levelDescriptions[lv - 1] || '';
            const bestKey = `lv${lv}`;
            const bestTime = this._bestTimes[bestKey];
            const bestHtml = bestTime
                ? `<span class="ws-best-time">⏱ ${this._t('newRecord')}: ${this._formatTime(bestTime)}</span>`
                : '';
            desc.innerHTML = `<strong>${name}</strong><br>${descText}${bestHtml}`;
        }
    },

    _updateHomeTexts() {
        const dict = WS_I18N[this._lang] || WS_I18N['es-ES'];
        const titleEl = document.getElementById('ws-game-title');
        if (titleEl) titleEl.innerHTML = `🔍 Word<span>Search</span>`;
        const subtitleEl = document.getElementById('ws-game-subtitle');
        if (subtitleEl) subtitleEl.textContent = dict.gameSubtitle;
        const sectionTitle = document.getElementById('ws-section-title');
        if (sectionTitle) sectionTitle.textContent = dict.selectLevel;
        const startBtn = document.getElementById('ws-start-btn');
        if (startBtn) startBtn.textContent = dict.start;
        const statsBtn = document.getElementById('ws-stats-btn');
        if (statsBtn) statsBtn.textContent = dict.stats;
        const achievBtn = document.getElementById('ws-achievements-btn');
        if (achievBtn) achievBtn.textContent = dict.achievements;
        this._updateLevelDesc(this._level);
    },

    _bindHomeEvents() {
        const startBtn = document.getElementById('ws-start-btn');
        startBtn?.addEventListener('click', () => this.startGame());

        const statsBtn = document.getElementById('ws-stats-btn');
        statsBtn?.addEventListener('click', () => {
            const root = (typeof PlatformHeader !== 'undefined') ? PlatformHeader._opts?.rootPath || '../' : '../';
            window.location.href = root + 'platform/stats.html';
        });

        const achievBtn = document.getElementById('ws-achievements-btn');
        achievBtn?.addEventListener('click', () => {
            const root = (typeof PlatformHeader !== 'undefined') ? PlatformHeader._opts?.rootPath || '../' : '../';
            window.location.href = root + 'platform/achievements.html';
        });

        this._updateHomeTexts();
    },

    /* ── Game Start ─────────────────────────────────────── */
    startGame() {
        const cfg = WS_LEVELS[this._level];
        if (!cfg) return;

        // Show loading indicator while building grid
        const loading = document.getElementById('ws-loading');
        const gridContainer = document.getElementById('ws-grid-container');
        if (loading) loading.classList.remove('hidden');
        if (gridContainer) gridContainer.style.visibility = 'hidden';

        // Pick words for this level
        let pool;
        if (cfg.category === null) {
            pool = [...WS_WORDS];
        } else {
            pool = WS_WORDS.filter(w => cfg.category.includes(w.category));
        }

        // Shuffle and take exactly cfg.words words (filter by length < size)
        const shuffled = pool.sort(() => Math.random() - 0.5);
        const valid = shuffled.filter(w => w.word.length <= cfg.size && w.word.length >= 3);
        const selected = valid.slice(0, cfg.words);

        const { grid, placed } = wsBuildGrid(cfg.size, selected, cfg.dirs);
        this._grid   = grid;
        this._placed = placed;
        this._found  = 0;

        this._renderGrid(cfg.size);
        this._renderWordList();
        this._updateGameTexts();

        // Hide loading indicator, reveal grid
        if (loading) loading.classList.add('hidden');
        if (gridContainer) gridContainer.style.visibility = '';

        this._startTime = Date.now();
        clearInterval(this._timerInterval);
        this._timerInterval = setInterval(() => this._tick(), 1000);

        this._showScreen('game');
    },

    /* ── Grid Rendering ─────────────────────────────────── */
    _renderGrid(size) {
        const container = document.getElementById('ws-grid-container');
        if (!container) return;

        const vw = Math.min(window.innerWidth, 600);
        const maxGridPx = vw - 32;
        const rawCell = Math.floor(maxGridPx / size);
        const cellSize = Math.min(36, Math.max(24, rawCell));
        // If cells would be smaller than 28px, use 28px with horizontal scroll
        const useScroll = rawCell < 28;
        const effectiveCellSize = useScroll ? 28 : cellSize;

        container.innerHTML = '';
        const gridEl = document.createElement('div');
        gridEl.className = 'ws-grid';
        gridEl.id = 'ws-grid';
        gridEl.style.gridTemplateColumns = `repeat(${size}, ${effectiveCellSize}px)`;
        gridEl.style.gridTemplateRows    = `repeat(${size}, ${effectiveCellSize}px)`;
        gridEl.setAttribute('aria-label', 'Cuadrícula de la sopa de letras');
        gridEl.setAttribute('role', 'grid');

        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                const cell = document.createElement('div');
                cell.className = 'ws-cell';
                cell.style.width  = `${effectiveCellSize}px`;
                cell.style.height = `${effectiveCellSize}px`;
                cell.style.fontSize = `${Math.max(10, effectiveCellSize * 0.45)}px`;
                cell.textContent = this._grid[r][c];
                cell.dataset.r = r;
                cell.dataset.c = c;
                cell.setAttribute('role', 'gridcell');
                cell.setAttribute('aria-label', `${this._grid[r][c]} fila ${r+1} columna ${c+1}`);

                // Pointer events (handles both mouse and touch)
                cell.addEventListener('pointerdown', e => { e.preventDefault(); this._onCellDown(r, c); });

                gridEl.appendChild(cell);
            }
        }

        // End drag anywhere in document
        document.addEventListener('pointerup', () => this._onCellUp(), { once: false });

        if (useScroll) {
            container.style.overflowX = 'auto';
            container.style.webkitOverflowScrolling = 'touch';
        } else {
            container.style.overflowX = '';
        }

        container.appendChild(gridEl);
    },

    /* ── Word List Rendering ────────────────────────────── */
    _renderWordList() {
        const container = document.getElementById('ws-word-list');
        if (!container) return;
        container.innerHTML = '';
        this._placed.forEach((p, idx) => {
            const chip = document.createElement('span');
            chip.className = 'ws-word-chip' + (p.found ? ` found found-${p.colorIndex}` : '');
            chip.textContent = p.entry.display;
            chip.dataset.wordIdx = idx;
            chip.id = `ws-chip-${idx}`;
            container.appendChild(chip);
        });
    },

    /* ── HUD update ─────────────────────────────────────── */
    _updateGameTexts() {
        const levelBadge = document.getElementById('ws-level-badge');
        if (levelBadge) levelBadge.textContent = `${this._t('level')} ${this._level}`;

        const wordsLbl = document.getElementById('ws-words-lbl');
        if (wordsLbl) wordsLbl.textContent = this._t('wordsFound');

        const timeLbl = document.getElementById('ws-time-lbl');
        if (timeLbl) timeLbl.textContent = this._t('time');

        this._updateWordsHud();
    },

    _updateWordsHud() {
        const wordsVal = document.getElementById('ws-words-val');
        if (wordsVal) wordsVal.textContent = `${this._found}/${this._placed.length}`;
    },

    /* ── Timer ──────────────────────────────────────────── */
    _tick() {
        const elapsed = Math.floor((Date.now() - this._startTime) / 1000);
        const timeEl = document.getElementById('ws-time-val');
        if (timeEl) timeEl.textContent = this._formatTime(elapsed);
    },

    _formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    },

    /* ── Selection handling (Pointer Events) ─────────────── */
    _onCellDown(r, c) {
        this._dragging    = true;
        this._startCell   = {r, c};
        this._currentSelection = [{r, c}];
        this._highlightSelection([{r, c}]);

        // Document-level pointermove for touch drag (pointerenter doesn't fire on touch)
        this._onPointerMoveBound = this._onPointerMove.bind(this);
        document.addEventListener('pointermove', this._onPointerMoveBound, {passive: false});
    },

    _onPointerMove(e) {
        if (!this._dragging) return;
        e.preventDefault();
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (!el || !el.classList.contains('ws-cell')) return;
        const r = parseInt(el.dataset.r, 10);
        const c = parseInt(el.dataset.c, 10);
        if (!isNaN(r) && !isNaN(c)) {
            this._onCellEnter(r, c);
        }
    },

    _onCellEnter(r, c) {
        if (!this._dragging || !this._startCell) return;
        const cells = wsLineCells(this._startCell.r, this._startCell.c, r, c);
        if (cells) {
            this._currentSelection = cells;
            this._highlightSelection(cells);
        } else {
            // Not a valid direction, only show start cell
            this._currentSelection = [this._startCell];
            this._highlightSelection([this._startCell]);
        }
    },

    _onCellUp() {
        if (!this._dragging) return;
        this._dragging = false;
        if (this._onPointerMoveBound) {
            document.removeEventListener('pointermove', this._onPointerMoveBound);
            this._onPointerMoveBound = null;
        }
        if (this._currentSelection.length >= 2) {
            this._checkAndMarkWord();
        } else {
            this._highlightSelection([]);
        }
        this._currentSelection = [];
        this._startCell = null;
    },

    /* ── Visual Highlighting ────────────────────────────── */
    _highlightSelection(cells) {
        // Remove all .selecting from existing cells
        document.querySelectorAll('.ws-cell.selecting').forEach(el => el.classList.remove('selecting'));

        const cellSet = new Set(cells.map(({r, c}) => `${r}_${c}`));
        cellSet.forEach(key => {
            const [r, c] = key.split('_');
            const el = document.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
            if (el && !el.classList.contains('found-0') && !this._isCellFound(parseInt(r), parseInt(c))) {
                el.classList.add('selecting');
            }
        });
    },

    _isCellFound(r, c) {
        for (const p of this._placed) {
            if (!p.found) continue;
            for (let i = 0; i < p.len; i++) {
                const pr = p.row + p.dir[0] * i;
                const pc = p.col + p.dir[1] * i;
                if (pr === r && pc === c) return true;
            }
        }
        return false;
    },

    /* ── Match Check ────────────────────────────────────── */
    _checkAndMarkWord() {
        const cells = this._currentSelection;
        const selected = cells.map(({r, c}) => this._grid[r][c]).join('');

        let matched = null;
        for (const p of this._placed) {
            if (p.found) continue;
            const forward  = p.entry.word;
            const backward = forward.split('').reverse().join('');
            if (selected === forward || selected === backward) {
                matched = p;
                break;
            }
        }

        // Clear selecting
        document.querySelectorAll('.ws-cell.selecting').forEach(el => el.classList.remove('selecting'));

        if (matched) {
            const colorIndex = this._found;
            matched.found       = true;
            matched.colorIndex  = colorIndex;
            this._found++;
            this._totalWordsFound++;

            // Mark cells with color
            for (let i = 0; i < matched.len; i++) {
                const r = matched.row + matched.dir[0] * i;
                const c = matched.col + matched.dir[1] * i;
                const el = document.querySelector(`.ws-cell[data-r="${r}"][data-c="${c}"]`);
                if (el) {
                    el.className = `ws-cell found-${colorIndex}`;
                }
            }

            // Update chip
            const chip = document.getElementById(`ws-chip-${this._placed.indexOf(matched)}`);
            if (chip) chip.className = `ws-word-chip found found-${colorIndex}`;

            this._updateWordsHud();

            // Announce to screen readers
            const announce = document.getElementById('ws-sr-announce');
            if (announce) {
                const word = matched.entry.display || matched.entry.word;
                announce.textContent = '';
                // Small timeout so the DOM change triggers the live region
                setTimeout(() => { announce.textContent = `\u2713 ${word}`; }, 50);
            }

            // Show popup after delay
            this._popupTimeout = setTimeout(() => this._showWordPopup(matched), 320);

        }
    },

    /* ── Word Popup ─────────────────────────────────────── */
    _showWordPopup(placement) {
        const entry = placement.entry;
        const lc    = this._langCode();
        const data  = entry[lc] || entry.es;

        const overlay = document.createElement('div');
        overlay.className = 'ws-popup-overlay';
        overlay.id = 'ws-popup-overlay';

        const synText = data.syn && data.syn.length
            ? `<p class="ws-popup-syn">≈ ${data.syn.join(', ')}</p>`
            : '';
        const antText = data.ant && data.ant.length
            ? `<p class="ws-popup-ant">↔ ${data.ant.join(', ')}</p>`
            : '';

        overlay.innerHTML = `
            <div class="ws-popup" role="dialog" aria-modal="true" aria-label="${entry.display}">
                <div class="ws-popup-emoji">${entry.emoji}</div>
                <h2 class="ws-popup-word">${entry.display}</h2>
                <p class="ws-popup-category">${entry.category}</p>
                <p class="ws-popup-def">${data.def}</p>
                ${synText}
                ${antText}
                <button class="ws-btn ws-btn-primary ws-popup-dismiss" id="ws-popup-dismiss">
                    ${this._t('dismiss')}
                </button>
            </div>
        `;

        document.body.appendChild(overlay);

        const dismiss = () => {
            overlay.remove();
            // Check if all words are found
            if (this._found >= this._placed.length) {
                setTimeout(() => this._finishGame(), 300);
            }
        };

        document.getElementById('ws-popup-dismiss')?.addEventListener('click', dismiss);
        overlay.addEventListener('click', e => { if (e.target === overlay) dismiss(); });

        // Auto-dismiss after 6 seconds if user doesn't interact
        setTimeout(() => {
            if (document.getElementById('ws-popup-overlay')) dismiss();
        }, 6000);
    },

    /* ── Finish Game ────────────────────────────────────── */
    _finishGame() {
        clearInterval(this._timerInterval);
        if (this._popupTimeout) clearTimeout(this._popupTimeout);

        const elapsed = Math.floor((Date.now() - this._startTime) / 1000);
        const total   = this._placed.length;
        const found   = this._found;
        const pct     = found / Math.max(1, total);
        const completed = found >= total;

        // Stars
        const timeLimit = this._level * 30 + 60;
        let stars;
        if (completed && elapsed <= timeLimit) stars = 3;
        else if (completed)                    stars = 2;
        else if (pct >= 0.6)                   stars = 1;
        else                                   stars = 0;

        // Score
        const score = Math.round(found * 100 * (1 + (this._level - 1) * 0.2) * (completed ? 1.5 : 1));

        // Best time check
        const bestKey = `lv${this._level}`;
        let newRecord = false;
        if (completed) {
            if (!this._bestTimes[bestKey] || elapsed < this._bestTimes[bestKey]) {
                this._bestTimes[bestKey] = elapsed;
                newRecord = true;
            }
            if (!this._completedLevels.includes(this._level)) {
                this._completedLevels.push(this._level);
            }
        }

        this._saveProgress();
        this._buildLevelGrid();

        // Save stats to Firebase (async, non-blocking)
        this._saveStats({ found, total, elapsed, level: this._level, score, completed, stars }).then(newAchievements => {
            this._renderResults({ found, total, elapsed, score, stars, newRecord, newAchievements });
        });
    },

    /* ── Stats save ─────────────────────────────────────── */
    async _saveStats({ found, total, elapsed, level, score, completed }) {
        const gameResult = {
            correctAnswers: found,
            totalAttempts:  total,
            totalQuestions: total,
            bestStreak:     found,
            elapsedSeconds: elapsed,
            level,
            wordsFound:     found,
            completed,
            operation:      'wordsearch'
        };

        let newAchievements = [];

        if (typeof PlatformAuth !== 'undefined' && typeof PlatformFirestore !== 'undefined') {
            const user = PlatformAuth.currentUser;

            if (user) {
                try {
                    const { stats } = await PlatformFirestore.updateGameStats(user.uid, 'wordSearch', gameResult);
                    stats.totalCorrect = (stats.totalCorrect || 0) + found;

                    if (typeof PlatformAchievements !== 'undefined') {
                        const achData = await PlatformFirestore.getAchievements(user.uid, 'wordSearch');
                        const achResult = {
                            wordsFound:  found,
                            completed,
                            elapsed,
                            level,
                            points:      score
                        };
                        const profile = await PlatformFirestore.getOrCreateProfile(user.uid, user);
                        newAchievements = PlatformAchievements.checkGameAchievements(
                            'wordSearch', achResult, { ...stats, ...achData }, profile
                        );

                        for (const id of newAchievements) {
                            await PlatformFirestore.unlockAchievement(user.uid, 'wordSearch', id);
                        }
                    }
                } catch (err) {
                    console.warn('[WordSearch] Firebase save error:', err);
                }
            }
        }

        return newAchievements;
    },

    /* ── Results screen ─────────────────────────────────── */
    _renderResults({ found, total, elapsed, score, stars, newRecord, newAchievements }) {
        const starsEl = document.getElementById('ws-stars');
        if (starsEl) {
            starsEl.textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
            const msgs = [this._t('stars1'), this._t('stars1'), this._t('stars2'), this._t('stars3')];
            starsEl.setAttribute('aria-label', msgs[Math.min(stars, 3)]);
        }

        const wordsEl = document.getElementById('ws-final-words');
        if (wordsEl) wordsEl.textContent = `${found} / ${total}`;

        const wordsLbl = document.getElementById('ws-result-words-lbl');
        if (wordsLbl) wordsLbl.textContent = this._t('wordsFoundLabel');

        const timeEl = document.getElementById('ws-final-time');
        if (timeEl) timeEl.textContent = this._formatTime(elapsed);

        const timeLbl = document.getElementById('ws-result-time-lbl');
        if (timeLbl) timeLbl.textContent = this._t('timeTaken');

        const scoreEl = document.getElementById('ws-final-score');
        if (scoreEl) scoreEl.textContent = score.toLocaleString();

        const scoreLbl = document.getElementById('ws-result-score-lbl');
        if (scoreLbl) scoreLbl.textContent = this._t('score');

        const recordEl = document.getElementById('ws-new-record');
        if (recordEl) recordEl.classList.toggle('hidden', !newRecord);

        const titleEl = document.getElementById('ws-result-title');
        if (titleEl) titleEl.textContent = this._t('results');

        // Achievements
        const achEl = document.getElementById('ws-achievements-unlocked');
        if (achEl) {
            if (newAchievements && newAchievements.length > 0) {
                achEl.classList.remove('hidden');
                achEl.innerHTML = newAchievements.map(id => {
                    const def = (typeof PlatformAchievements !== 'undefined')
                        ? PlatformAchievements.getById(id)
                        : null;
                    return def
                        ? `<span class="ws-achievement-badge" style="border-color:${PlatformAchievements.RARITY_COLOR[def.rarity]}">${def.icon} ${def.name}</span>`
                        : `<span class="ws-achievement-badge">${id}</span>`;
                }).join('');
            } else {
                achEl.classList.add('hidden');
            }
        }

        // Buttons
        const retryBtn = document.getElementById('ws-retry-btn');
        if (retryBtn) retryBtn.textContent = this._t('retry');
        const nextBtn  = document.getElementById('ws-next-btn');
        if (nextBtn) {
            nextBtn.textContent = this._t('next');
            nextBtn.disabled = this._level >= 10;
        }
        const menuBtn  = document.getElementById('ws-menu-btn');
        if (menuBtn)  menuBtn.textContent  = this._t('menu');

        this._showScreen('results');
    },

    /* ── Quit ───────────────────────────────────────────── */
    _quitGame() {
        // Only show confirm if a game is actually running
        const gridExists = !!document.getElementById('ws-grid');
        if (gridExists && this._placed && this._placed.length > 0 && this._found < this._placed.length) {
            this._showQuitConfirm();
        } else {
            this._doQuit();
        }
    },

    _showQuitConfirm() {
        const modal = document.getElementById('ws-quit-modal');
        if (!modal) {
            // Fallback: quit directly
            this._doQuit();
            return;
        }
        // Update texts with i18n
        const titleEl = document.getElementById('ws-quit-title');
        if (titleEl) titleEl.textContent = this._t('quitConfirm');
        const msgEl = document.getElementById('ws-quit-msg');
        if (msgEl) msgEl.textContent = this._t('quitMsg');

        const trigger = document.activeElement;
        modal.classList.remove('hidden');
        // Focus first button
        const cancelBtn = document.getElementById('ws-quit-cancel');
        const okBtn = document.getElementById('ws-quit-ok');
        if (cancelBtn) {
            cancelBtn.textContent = this._t('cancel');
            setTimeout(() => cancelBtn.focus(), 0);
        }
        if (okBtn) okBtn.textContent = this._t('quit');

        // Focus trap
        const trapFn = e => {
            if (e.key !== 'Tab') return;
            const focusable = [cancelBtn, okBtn].filter(Boolean);
            if (!focusable.length) return;
            const first = focusable[0], last = focusable[focusable.length - 1];
            if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
            else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
        };
        modal.addEventListener('keydown', trapFn);

        const close = () => {
            modal.classList.add('hidden');
            modal.removeEventListener('keydown', trapFn);
            if (trigger) trigger.focus();
        };

        cancelBtn?.addEventListener('click', close, { once: true });
        okBtn?.addEventListener('click', () => { close(); this._doQuit(); }, { once: true });
        modal.addEventListener('keydown', e => { if (e.key === 'Escape') close(); }, { once: true });
    },

    _doQuit() {
        clearInterval(this._timerInterval);
        if (this._popupTimeout) clearTimeout(this._popupTimeout);
        document.getElementById('ws-popup-overlay')?.remove();
        this._showScreen('home');
        this._updateHomeTexts();
    }
};

/* ── DOM initialization ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    // Quit button
    document.getElementById('ws-quit-btn')?.addEventListener('click', () => {
        WordSearchGame._quitGame();
    });

    // Pointer up on document (end drag)
    document.addEventListener('pointerup', () => {
        WordSearchGame._onCellUp();
    });

    // Results buttons
    document.getElementById('ws-retry-btn')?.addEventListener('click', () => {
        WordSearchGame.startGame();
    });
    document.getElementById('ws-next-btn')?.addEventListener('click', () => {
        if (WordSearchGame._level < 10) {
            WordSearchGame._selectLevel(WordSearchGame._level + 1);
        }
        WordSearchGame.startGame();
    });
    document.getElementById('ws-menu-btn')?.addEventListener('click', () => {
        WordSearchGame._showScreen('home');
        WordSearchGame._updateHomeTexts();
    });
});
