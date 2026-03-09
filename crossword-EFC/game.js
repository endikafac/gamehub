/**
 * Crossword - Game Logic
 * Educational crossword puzzle with 10 levels, multi-language support,
 * Firebase stats, achievements and localStorage progress persistence.
 */

/* ── Level configuration ─────────────────────────────────── */
const CW_LEVELS = [
    { level: 1,  size: 9,  target: 6,  minLen: 3, maxLen: 5  },
    { level: 2,  size: 9,  target: 7,  minLen: 3, maxLen: 6  },
    { level: 3,  size: 11, target: 8,  minLen: 3, maxLen: 7  },
    { level: 4,  size: 11, target: 9,  minLen: 4, maxLen: 7  },
    { level: 5,  size: 11, target: 10, minLen: 4, maxLen: 8  },
    { level: 6,  size: 13, target: 11, minLen: 4, maxLen: 9  },
    { level: 7,  size: 13, target: 12, minLen: 4, maxLen: 10 },
    { level: 8,  size: 13, target: 13, minLen: 5, maxLen: 11 },
    { level: 9,  size: 15, target: 14, minLen: 5, maxLen: 12 },
    { level: 10, size: 15, target: 15, minLen: 5, maxLen: 15 },
];

/* ── Category list ───────────────────────────────────────── */
const CW_CATEGORIES = [
    { key: 'all',        es: 'Todas las categorías', en: 'All categories',    eu: 'Kategoria guztiak' },
    { key: 'animales',   es: 'Animales',              en: 'Animals',           eu: 'Animaliak'         },
    { key: 'geografia',  es: 'Geografía',             en: 'Geography',         eu: 'Geografia'         },
    { key: 'biologia',   es: 'Biología',              en: 'Biology',           eu: 'Biologia'          },
    { key: 'astronomia', es: 'Astronomía',            en: 'Astronomy',         eu: 'Astronomia'        },
    { key: 'historia',   es: 'Historia',              en: 'History',           eu: 'Historia'          },
    { key: 'cultura',    es: 'Cultura',               en: 'Culture',           eu: 'Kultura'           },
    { key: 'deportes',   es: 'Deportes',              en: 'Sports',            eu: 'Kirola'            },
    { key: 'ciencia',    es: 'Ciencia',               en: 'Science',           eu: 'Zientzia'          },
    { key: 'tecnologia', es: 'Tecnología',            en: 'Technology',        eu: 'Teknologia'        },
    { key: 'naturaleza', es: 'Naturaleza',            en: 'Nature',            eu: 'Natura'            },
    { key: 'comida',     es: 'Comida',                en: 'Food',              eu: 'Janaria'           },
    { key: 'verbos',     es: 'Verbos',                en: 'Verbs',             eu: 'Aditzak'           },
];

/* ── i18n strings ────────────────────────────────────────── */
const CW_I18N = {
    'es-ES': {
        selectLevel:   'Elige el nivel',
        selectCategory:'Categoría:',
        start:         'Empezar',
        checkWord:     'Verificar palabra',
        checkAll:      'Verificar todo',
        revealWord:    'Revelar palabra',
        across:        'HORIZONTAL',
        down:          'VERTICAL',
        clueLabel:     'Pista:',
        acrossClues:   'Horizontales',
        downClues:     'Verticales',
        quit:          'Salir',
        results:       '¡Resultados!',
        wordsFound:    'palabras correctas',
        totalWords:    'de',
        timeLbl:       'Tiempo',
        scoreLbl:      'Puntos',
        levelLbl:      'Nivel',
        wordsTxt:      'Palabras',
        retry:         'Reintentar',
        next:          'Siguiente nivel',
        menu:          'Menú',
        newRecord:     '🏆 ¡Nuevo récord!',
        generating:    'Generando crucigrama...',
        noWords:       'No hay suficientes palabras para este nivel y categoría.',
        stats:         '📊 Estadísticas',
        achievements:  '🏆 Logros',
        yourBest:      'Tu mejor tiempo',
        quitConfirmTitle: '¿Salir del crucigrama?',
        quitConfirmMsg:   'Se perderá el progreso actual.',
        quitCancel:       'Cancelar',
    },
    'en-US': {
        selectLevel:   'Choose level',
        selectCategory:'Category:',
        start:         'Start',
        checkWord:     'Check word',
        checkAll:      'Check all',
        revealWord:    'Reveal word',
        across:        'ACROSS',
        down:          'DOWN',
        clueLabel:     'Clue:',
        acrossClues:   'Across',
        downClues:     'Down',
        quit:          'Quit',
        results:       'Results!',
        wordsFound:    'correct words',
        totalWords:    'of',
        timeLbl:       'Time',
        scoreLbl:      'Points',
        levelLbl:      'Level',
        wordsTxt:      'Words',
        retry:         'Retry',
        next:          'Next level',
        menu:          'Menu',
        newRecord:     '🏆 New record!',
        generating:    'Generating crossword...',
        noWords:       'Not enough words for this level and category.',
        stats:         '📊 Statistics',
        achievements:  '🏆 Achievements',
        yourBest:      'Your best time',
        quitConfirmTitle: 'Quit crossword?',
        quitConfirmMsg:   'Current progress will be lost.',
        quitCancel:       'Cancel',
    },
    'eu-ES': {
        selectLevel:   'Aukeratu maila',
        selectCategory:'Kategoria:',
        start:         'Hasi',
        checkWord:     'Egiaztatu hitza',
        checkAll:      'Egiaztatu guztia',
        revealWord:    'Erakutsi hitza',
        across:        'HORIZONTALA',
        down:          'BERTIKALA',
        clueLabel:     'Pista:',
        acrossClues:   'Horizontalak',
        downClues:     'Bertikalak',
        quit:          'Irten',
        results:       'Emaitzak!',
        wordsFound:    'hitz zuzenak',
        totalWords:    'tik',
        timeLbl:       'Denbora',
        scoreLbl:      'Puntuak',
        levelLbl:      'Maila',
        wordsTxt:      'Hitzak',
        retry:         'Berritu',
        next:          'Hurrengo maila',
        menu:          'Menua',
        newRecord:     '🏆 Errekorra!',
        generating:    'Gurutzegrama sortzen...',
        noWords:       'Ez dago hitz nahikorik maila eta kategoria honetarako.',
        stats:         '📊 Estatistikak',
        achievements:  '🏆 Lorpenak',
        yourBest:      'Zure denborarik onena',
        quitConfirmTitle: 'Gurutzegrametik irten?',
        quitConfirmMsg:   'Oraingo aurreratzea galduko da.',
        quitCancel:       'Utzi',
    },
};

/* ── Main game object ─────────────────────────────────────── */
const CrosswordGame = {
    // Config state
    _level:      1,
    _category:   'all',
    _lang:       'es-ES',

    // Puzzle state
    _grid:       null,   // NxN array of letters (null = black)
    _placed:     [],     // [{entry, r0, c0, dir, word, number}, ...]
    _userGrid:   null,   // NxN user-entered letters (null = empty)
    _N:          9,

    // Selection state
    _selR:    -1,
    _selC:    -1,
    _selDir:  'ACROSS',
    _selWord: null,

    // Timer
    _timer:     null,
    _elapsed:   0,
    _started:   false,
    _completed: false,

    // Score flags
    _usedCheck:  false,
    _usedReveal: false,
    _score:      0,
    _correctWords: 0,

    // Misc
    _hiddenInput:      null,
    _currentScreen:    'home',
    _currentTabDir:    'ACROSS',
    _completedLevels:  [],
    _bestTimes:        {},

    /* ── Public entry point ─────────────────────────────── */
    init() {
        this._lang = (typeof PlatformI18n !== 'undefined')
            ? PlatformI18n.currentLanguage
            : (localStorage.getItem('games_hub_language') || 'es-ES');

        this._loadGlobalProgress();
        this._buildCategorySelect();
        this._buildLevelGrid();
        this._bindHomeEvents();
        this._updateHomeTexts();
        this._showScreen('home');
        this._initHiddenInput();

        document.addEventListener('platformLanguageChanged', () => {
            this._lang = (typeof PlatformI18n !== 'undefined')
                ? PlatformI18n.currentLanguage
                : 'es-ES';
            this._buildCategorySelect();
            this._buildLevelGrid();
            this._updateHomeTexts();
            if (this._currentScreen === 'game') {
                this._updateGameTexts();
                this._renderClueList('ACROSS');
                this._renderClueList('DOWN');
                this._updateClueBar();
            }
            if (this._currentScreen === 'results') this._updateResultTexts?.();
        });
    },

    /* ── i18n helper ────────────────────────────────────── */
    _t(key) {
        const dict = CW_I18N[this._lang] || CW_I18N['es-ES'];
        return dict[key] ?? (CW_I18N['es-ES'][key] ?? key);
    },

    _langCode() {
        if (this._lang.startsWith('en')) return 'en';
        if (this._lang.startsWith('eu')) return 'eu';
        return 'es';
    },

    /* ── Screen management ──────────────────────────────── */
    _showScreen(name) {
        this._currentScreen = name;
        ['home', 'game', 'results'].forEach(s => {
            const el = document.getElementById('cw-screen-' + s);
            if (el) el.classList.toggle('active', s === name);
        });
        const active = document.getElementById('cw-screen-' + name);
        if (active) {
            // Move focus to the new screen for screen reader announcement
            if (!active.hasAttribute('tabindex')) active.setAttribute('tabindex', '-1');
            active.focus({ preventScroll: true });
        }
    },

    /* ── Global progress (level completion + best times) ── */
    _loadGlobalProgress() {
        try {
            const raw = localStorage.getItem('games_hub_cw_progress');
            if (raw) {
                const data = JSON.parse(raw);
                this._completedLevels = data.completedLevels || [];
                this._bestTimes       = data.bestTimes       || {};
                this._level           = Math.min(Math.max(data.lastLevel || 1, 1), 10);
            }
        } catch (_) { /* ignore */ }
    },

    _saveGlobalProgress() {
        try {
            localStorage.setItem('games_hub_cw_progress', JSON.stringify({
                completedLevels: this._completedLevels,
                bestTimes:       this._bestTimes,
                lastLevel:       this._level,
            }));
        } catch (_) { /* ignore */ }
    },

    /* ── Session progress (userGrid during a game) ──────── */
    _saveSessionProgress() {
        if (!this._userGrid) return;
        try {
            localStorage.setItem(
                'cw_progress_' + this._level + '_' + this._category,
                JSON.stringify({ userGrid: this._userGrid, elapsed: this._elapsed })
            );
        } catch (_) { /* ignore */ }
    },

    _loadSessionProgress() {
        try {
            const raw = localStorage.getItem('cw_progress_' + this._level + '_' + this._category);
            if (raw) return JSON.parse(raw);
        } catch (_) { /* ignore */ }
        return null;
    },

    _clearSessionProgress() {
        try {
            localStorage.removeItem('cw_progress_' + this._level + '_' + this._category);
        } catch (_) { /* ignore */ }
    },

    /* ── Category selector ──────────────────────────────── */
    _buildCategorySelect() {
        const sel = document.getElementById('cw-category-select');
        if (!sel) return;
        sel.innerHTML = '';
        const lc = this._langCode();
        CW_CATEGORIES.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat.key;
            opt.textContent = cat[lc] || cat.es;
            if (cat.key === this._category) opt.selected = true;
            sel.appendChild(opt);
        });
        sel.addEventListener('change', () => {
            this._category = sel.value;
        });
    },

    _updateCategorySelect() {
        const sel = document.getElementById('cw-category-select');
        if (!sel) return;
        const lc = this._langCode();
        Array.from(sel.options).forEach((opt, i) => {
            opt.textContent = CW_CATEGORIES[i][lc] || CW_CATEGORIES[i].es;
        });
    },

    /* ── Level grid ─────────────────────────────────────── */
    _buildLevelGrid() {
        const container = document.getElementById('cw-level-grid');
        if (!container) return;
        container.innerHTML = '';

        for (let lv = 1; lv <= 10; lv++) {
            const btn = document.createElement('button');
            btn.className = 'cw-level-btn' +
                (this._completedLevels.includes(lv) ? ' completed' : '') +
                (lv === this._level ? ' selected' : '');
            btn.textContent = lv;
            btn.dataset.level = lv;
            btn.setAttribute('role', 'option');
            btn.setAttribute('aria-selected', lv === this._level ? 'true' : 'false');
            btn.addEventListener('click', () => this._selectLevel(lv));
            container.appendChild(btn);
        }

        const startBtn = document.getElementById('cw-start-btn');
        if (startBtn) startBtn.disabled = false;
    },

    _selectLevel(lv) {
        this._level = lv;
        document.querySelectorAll('.cw-level-btn').forEach(btn => {
            const sel = parseInt(btn.dataset.level) === lv;
            btn.classList.toggle('selected', sel);
            btn.setAttribute('aria-selected', String(sel));
        });
        const startBtn = document.getElementById('cw-start-btn');
        if (startBtn) startBtn.disabled = false;
    },

    /* ── Home texts ─────────────────────────────────────── */
    _updateHomeTexts() {
        const catLabel = document.getElementById('cw-cat-label');
        if (catLabel) catLabel.textContent = this._t('selectCategory');

        const sectionTitle = document.getElementById('cw-level-section-title');
        if (sectionTitle) sectionTitle.textContent = this._t('selectLevel');

        const startBtn = document.getElementById('cw-start-btn');
        if (startBtn) startBtn.textContent = this._t('start');

        const statsBtn = document.getElementById('cw-stats-btn');
        if (statsBtn) statsBtn.textContent = this._t('stats');

        const achBtn = document.getElementById('cw-achievements-btn');
        if (achBtn) achBtn.textContent = this._t('achievements');

        this._updateCategorySelect();
    },

    /* ── Home events ────────────────────────────────────── */
    _bindHomeEvents() {
        const startBtn = document.getElementById('cw-start-btn');
        startBtn?.addEventListener('click', () => this._startGame(this._level, this._category));

        const statsBtn = document.getElementById('cw-stats-btn');
        statsBtn?.addEventListener('click', () => {
            const root = (typeof PlatformHeader !== 'undefined')
                ? (PlatformHeader._opts?.rootPath || '../')
                : '../';
            window.location.href = root + 'platform/stats.html';
        });

        const achBtn = document.getElementById('cw-achievements-btn');
        achBtn?.addEventListener('click', () => {
            const root = (typeof PlatformHeader !== 'undefined')
                ? (PlatformHeader._opts?.rootPath || '../')
                : '../';
            window.location.href = root + 'platform/achievements.html';
        });

        const quitBtn = document.getElementById('cw-quit-btn');
        quitBtn?.addEventListener('click', () => this._quitGame());

        const checkWordBtn = document.getElementById('cw-check-word-btn');
        checkWordBtn?.addEventListener('click', () => this._checkWord());

        const checkAllBtn = document.getElementById('cw-check-all-btn');
        checkAllBtn?.addEventListener('click', () => this._checkAll());

        const revealBtn = document.getElementById('cw-reveal-btn');
        revealBtn?.addEventListener('click', () => this._revealWord());

        const retryBtn = document.getElementById('cw-retry-btn');
        retryBtn?.addEventListener('click', () => this._startGame(this._level, this._category));

        const nextBtn = document.getElementById('cw-next-btn');
        nextBtn?.addEventListener('click', () => {
            if (this._level < 10) this._selectLevel(this._level + 1);
            this._startGame(this._level, this._category);
        });

        const menuBtn = document.getElementById('cw-menu-btn');
        menuBtn?.addEventListener('click', () => {
            this._showScreen('home');
            this._buildLevelGrid();
            this._updateHomeTexts();
        });

        const tabAcross = document.getElementById('cw-tab-across');
        tabAcross?.addEventListener('click', () => this._switchTab('ACROSS'));

        const tabDown = document.getElementById('cw-tab-down');
        tabDown?.addEventListener('click', () => this._switchTab('DOWN'));
    },

    /* ── Start game ─────────────────────────────────────── */
    _startGame(level, category) {
        const cfg = CW_LEVELS[level - 1];
        if (!cfg) return;

        this._level    = level;
        this._category = category;
        this._N        = cfg.size;

        // Filter clues
        let pool = (typeof CW_CLUES !== 'undefined') ? CW_CLUES : [];
        if (category !== 'all') {
            pool = pool.filter(c => c.category === category);
        }
        pool = pool.filter(c => c.word.length >= cfg.minLen && c.word.length <= cfg.maxLen);

        if (pool.length < Math.min(cfg.target, 5)) {
            this._showError(this._t('noWords'));
            return;
        }

        // Show generating indicator
        this._showScreen('game');
        document.getElementById('cw-screen-game')?.setAttribute('aria-busy', 'true');
        const container = document.getElementById('cw-grid-container');
        if (container) {
            container.innerHTML = '<div class="cw-generating" aria-live="polite"><div class="cw-generating-spinner"></div><br>' +
                this._t('generating') + '</div>';
        }

        // Defer heavy generation to next tick so the spinner appears
        setTimeout(() => {
            const result = cwBuild(pool, cfg.size, cfg.target, 30);

            if (!result) {
                document.getElementById('cw-screen-game')?.removeAttribute('aria-busy');
                if (container) {
                    container.innerHTML = '<div class="cw-error-msg">' + this._t('noWords') + '</div>';
                }
                setTimeout(() => {
                    this._showScreen('home');
                    this._buildLevelGrid();
                    this._updateHomeTexts();
                }, 2500);
                return;
            }

            this._grid    = result.grid;
            this._placed  = result.placed;
            this._N       = cfg.size;

            // Initialize user grid
            this._userGrid = Array.from({ length: cfg.size }, () => Array(cfg.size).fill(null));

            // Attempt to restore saved progress
            const saved = this._loadSessionProgress();
            if (saved && saved.userGrid &&
                saved.userGrid.length === cfg.size &&
                saved.userGrid[0].length === cfg.size) {
                this._userGrid = saved.userGrid;
                this._elapsed  = saved.elapsed || 0;
            } else {
                this._elapsed = 0;
            }

            // Reset flags
            this._usedCheck   = false;
            this._usedReveal  = false;
            this._score       = 0;
            this._correctWords = 0;
            this._selR        = -1;
            this._selC        = -1;
            this._selDir      = 'ACROSS';
            this._selWord     = null;
            this._completed   = false;
            this._currentTabDir = 'ACROSS';

            // Render
            document.getElementById('cw-screen-game')?.removeAttribute('aria-busy');
            this._renderGrid();
            this._renderClueList();
            this._updateGameTexts();
            this._updateWordsCount();

            // Start timer
            this._started = true;
            clearInterval(this._timer);
            const startMs = Date.now() - this._elapsed * 1000;
            this._timer = setInterval(() => {
                this._elapsed = Math.floor((Date.now() - startMs) / 1000);
                const el = document.getElementById('cw-time-val');
                if (el) el.textContent = this._formatTime(this._elapsed);
                this._saveSessionProgress();
            }, 1000);

            // Select first word
            if (this._placed.length > 0) {
                this._selectWord(this._placed[0]);
            }

            // Restore correct visual state from saved progress
            if (saved && saved.userGrid) {
                this._reapplyUserGrid();
            }

            this._updateWordsCount();
        }, 30);
    },

    /* ── Re-apply saved user grid letters to DOM ────────── */
    _reapplyUserGrid() {
        for (let r = 0; r < this._N; r++) {
            for (let c = 0; c < this._N; c++) {
                const letter = this._userGrid[r][c];
                if (letter) {
                    const cell = document.querySelector('.cw-cell[data-r="' + r + '"][data-c="' + c + '"]');
                    if (cell) {
                        let span = cell.querySelector('.cw-letter');
                        if (!span) {
                            span = document.createElement('span');
                            span.className = 'cw-letter';
                            cell.appendChild(span);
                        }
                        span.textContent = letter;
                    }
                }
            }
        }
        // Recount correct words
        this._correctWords = 0;
        this._placed.forEach(p => {
            if (this._isWordComplete(p)) {
                this._correctWords++;
                this._markWordCorrect(p);
            }
        });
    },

    /* ── Render grid ────────────────────────────────────── */
    _renderGrid() {
        const container = document.getElementById('cw-grid-container');
        if (!container) return;
        container.innerHTML = '';

        const wrap = document.createElement('div');
        wrap.className = 'cw-grid-wrap';

        const gridWidth = Math.min(480, window.innerWidth - 32);
        const cellSize  = Math.floor(gridWidth / this._N);

        const gridEl = document.createElement('div');
        gridEl.className = 'cw-grid';
        gridEl.id = 'cw-grid';
        gridEl.style.setProperty('--cw-n', this._N);
        gridEl.style.width  = (cellSize * this._N + (this._N - 1) * 2) + 'px';
        gridEl.style.height = (cellSize * this._N + (this._N - 1) * 2) + 'px';
        gridEl.setAttribute('role', 'application');
        gridEl.setAttribute('aria-label', 'Crucigrama');

        // Build set of starting positions with their numbers
        const numMap = {};
        this._placed.forEach(p => {
            const key = p.r0 + ',' + p.c0;
            if (numMap[key] === undefined) numMap[key] = p.number;
        });

        const fontSize = Math.max(9, Math.floor(cellSize * 0.5)) + 'px';

        for (let r = 0; r < this._N; r++) {
            for (let c = 0; c < this._N; c++) {
                const cell = document.createElement('div');
                cell.className = 'cw-cell';
                cell.dataset.r = r;
                cell.dataset.c = c;
                cell.style.width  = cellSize + 'px';
                cell.style.height = cellSize + 'px';

                if (this._grid[r][c] === null) {
                    cell.classList.add('black');
                } else {
                    cell.classList.add('white');

                    const numKey = r + ',' + c;
                    if (numMap[numKey] !== undefined) {
                        const numSpan = document.createElement('span');
                        numSpan.className = 'cw-num';
                        numSpan.textContent = numMap[numKey];
                        numSpan.style.fontSize = Math.max(7, Math.floor(cellSize * 0.28)) + 'px';
                        cell.appendChild(numSpan);
                    }

                    // User letter if any
                    const letter = this._userGrid[r][c];
                    if (letter) {
                        const span = document.createElement('span');
                        span.className = 'cw-letter';
                        span.textContent = letter;
                        span.style.fontSize = fontSize;
                        cell.appendChild(span);
                    }

                    cell.setAttribute('tabindex', '0');
                    cell.addEventListener('click', () => this._onCellClick(r, c));
                    cell.addEventListener('keydown', e => {
                        if (e.key.length === 1 && /[a-záéíóúñA-ZÁÉÍÓÚÑ]/i.test(e.key)) {
                            this._onCellClick(r, c);
                            this._inputLetter(e.key.toUpperCase(), r, c);
                            e.preventDefault();
                        } else if (e.key === 'Backspace' || e.key === 'Delete') {
                            this._onCellClick(r, c);
                            this._inputLetter('', r, c);
                            e.preventDefault();
                        } else if (e.key === 'ArrowRight') { this._moveFocus(r, c, 0, 1); e.preventDefault(); }
                        else if (e.key === 'ArrowLeft')    { this._moveFocus(r, c, 0, -1); e.preventDefault(); }
                        else if (e.key === 'ArrowDown')    { this._moveFocus(r, c, 1, 0); e.preventDefault(); }
                        else if (e.key === 'ArrowUp')      { this._moveFocus(r, c, -1, 0); e.preventDefault(); }
                    });
                }

                gridEl.appendChild(cell);
            }
        }

        wrap.appendChild(gridEl);
        container.appendChild(wrap);
    },

    /* ── Render clue list ───────────────────────────────── */
    _renderClueList() {
        this._updateClueListForDir(this._currentTabDir);
        this._updateTabButtons();
    },

    _updateClueListForDir(dir) {
        const listEl = document.getElementById('cw-clue-list');
        if (!listEl) return;
        listEl.innerHTML = '';

        const lc = this._langCode();
        const filtered = this._placed.filter(p => p.dir === dir);
        filtered.sort((a, b) => a.number - b.number);

        filtered.forEach(p => {
            const clueText = p.entry[lc]?.clue || p.entry.es?.clue || '';
            const item = document.createElement('div');
            item.className = 'cw-clue-item';
            item.dataset.r = p.r0;
            item.dataset.c = p.c0;
            item.dataset.dir = p.dir;
            if (this._isWordComplete(p)) item.classList.add('done');
            if (this._selWord === p) item.classList.add('active');

            item.innerHTML =
                '<span class="cw-clue-num-badge">' + p.number + '</span>' +
                '<span class="cw-clue-word-display">(' + p.word.length + ')</span>' +
                '<span>' + clueText + '</span>';

            item.addEventListener('click', () => {
                this._selDir = p.dir;
                this._selectWord(p);
                if (this._hiddenInput) this._hiddenInput.focus();
            });

            listEl.appendChild(item);
        });
    },

    _updateTabButtons() {
        const tabAcross = document.getElementById('cw-tab-across');
        const tabDown   = document.getElementById('cw-tab-down');
        if (tabAcross) {
            tabAcross.textContent = this._t('acrossClues');
            tabAcross.classList.toggle('active', this._currentTabDir === 'ACROSS');
        }
        if (tabDown) {
            tabDown.textContent = this._t('downClues');
            tabDown.classList.toggle('active', this._currentTabDir === 'DOWN');
        }
    },

    _switchTab(dir) {
        this._currentTabDir = dir;
        this._updateClueListForDir(dir);
        this._updateTabButtons();
    },

    /* ── Cell click ─────────────────────────────────────── */
    _onCellClick(r, c) {
        if (this._grid[r][c] === null) return;

        if (r === this._selR && c === this._selC) {
            // Same cell: toggle direction if both ACROSS and DOWN words pass through
            const hasAcross = this._placed.some(p => p.dir === 'ACROSS' &&
                p.r0 === r && c >= p.c0 && c < p.c0 + p.word.length);
            const hasDown   = this._placed.some(p => p.dir === 'DOWN' &&
                p.c0 === c && r >= p.r0 && r < p.r0 + p.word.length);
            if (hasAcross && hasDown) {
                this._selDir = this._selDir === 'ACROSS' ? 'DOWN' : 'ACROSS';
            }
        } else {
            this._selR = r;
            this._selC = c;
        }

        // Find word in selected direction that contains (r,c)
        let found = this._placed.find(p =>
            p.dir === this._selDir &&
            this._cellInWord(r, c, p)
        );

        if (!found) {
            // Try the other direction
            const otherDir = this._selDir === 'ACROSS' ? 'DOWN' : 'ACROSS';
            found = this._placed.find(p =>
                p.dir === otherDir &&
                this._cellInWord(r, c, p)
            );
            if (found) this._selDir = otherDir;
        }

        if (found) {
            this._selWord = found;
            this._selR    = r;
            this._selC    = c;
            this._updateHighlight();
            this._updateClueBar();
            this._syncTabToWord(found);
        }

        if (this._hiddenInput) {
            this._hiddenInput.value = '';
            this._hiddenInput.focus();
        }
    },

    _cellInWord(r, c, p) {
        if (p.dir === 'ACROSS') return p.r0 === r && c >= p.c0 && c < p.c0 + p.word.length;
        return p.c0 === c && r >= p.r0 && r < p.r0 + p.word.length;
    },

    _syncTabToWord(p) {
        if (p.dir !== this._currentTabDir) {
            this._currentTabDir = p.dir;
            this._updateClueListForDir(p.dir);
            this._updateTabButtons();
        }
    },

    /* ── Select word ────────────────────────────────────── */
    _selectWord(p) {
        this._selWord = p;
        this._selDir  = p.dir;
        this._syncTabToWord(p);

        // Position cursor at first empty cell
        const dr = p.dir === 'DOWN' ? 1 : 0;
        const dc = p.dir === 'ACROSS' ? 1 : 0;
        let cursorSet = false;

        for (let i = 0; i < p.word.length; i++) {
            const r = p.r0 + dr * i;
            const c = p.c0 + dc * i;
            if (this._userGrid[r][c] === null) {
                this._selR = r;
                this._selC = c;
                cursorSet = true;
                break;
            }
        }

        if (!cursorSet) {
            this._selR = p.r0;
            this._selC = p.c0;
        }

        this._updateHighlight();
        this._updateClueBar();
    },

    /* ── Highlight ──────────────────────────────────────── */
    _updateHighlight() {
        // Remove all highlight/selected classes
        document.querySelectorAll('.cw-cell.highlighted, .cw-cell.selected').forEach(el => {
            el.classList.remove('highlighted', 'selected');
        });

        if (!this._selWord) return;

        const p  = this._selWord;
        const dr = p.dir === 'DOWN' ? 1 : 0;
        const dc = p.dir === 'ACROSS' ? 1 : 0;

        for (let i = 0; i < p.word.length; i++) {
            const r = p.r0 + dr * i;
            const c = p.c0 + dc * i;
            const cell = document.querySelector('.cw-cell[data-r="' + r + '"][data-c="' + c + '"]');
            if (cell) {
                if (r === this._selR && c === this._selC) {
                    cell.classList.add('selected');
                } else {
                    cell.classList.add('highlighted');
                }
            }
        }
    },

    /* ── Clue bar ───────────────────────────────────────── */
    _updateClueBar() {
        if (!this._selWord) return;
        const p  = this._selWord;
        const lc = this._langCode();
        const clueText = p.entry[lc]?.clue || p.entry.es?.clue || '';

        const dirEl  = document.getElementById('cw-clue-dir');
        const numEl  = document.getElementById('cw-clue-num');
        const textEl = document.getElementById('cw-clue-text');

        if (dirEl)  dirEl.textContent  = p.dir === 'ACROSS' ? '→' : '↓';
        if (numEl)  numEl.textContent  = p.number;
        if (textEl) textEl.textContent = clueText;

        // Highlight active clue in list
        document.querySelectorAll('.cw-clue-item').forEach(el => {
            const matches = parseInt(el.dataset.r) === p.r0 &&
                            parseInt(el.dataset.c) === p.c0 &&
                            el.dataset.dir === p.dir;
            el.classList.toggle('active', matches);
            if (matches) {
                el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        });
    },

    /* ── Hidden input setup ─────────────────────────────── */
    _initHiddenInput() {
        const inp = document.createElement('input');
        inp.id = 'cw-hidden-input';
        inp.setAttribute('autocomplete', 'off');
        inp.setAttribute('autocorrect', 'off');
        inp.setAttribute('autocapitalize', 'characters');
        inp.setAttribute('inputmode', 'text');
        inp.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;';
        document.body.appendChild(inp);
        this._hiddenInput = inp;

        inp.addEventListener('keydown', e => {
            if (!this._started || this._completed) return;
            if (e.key === 'Backspace') {
                e.preventDefault();
                this._handleBackspace();
            } else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                e.preventDefault();
                this._handleArrow(e.key);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                this._moveToNextWord();
            }
        });

        inp.addEventListener('input', e => {
            if (!this._started || this._completed) return;
            const val = e.target.value;
            const ch  = val.slice(-1).toUpperCase().replace(/[^A-Z]/g, '');
            inp.value = '';
            if (ch) this._handleInput(ch);
        });
    },

    /* ── Input handling ─────────────────────────────────── */
    _handleInput(char) {
        if (this._selR < 0 || this._selC < 0) return;
        if (this._grid[this._selR][this._selC] === null) return;

        const r = this._selR;
        const c = this._selC;

        this._userGrid[r][c] = char;

        const cell = document.querySelector('.cw-cell[data-r="' + r + '"][data-c="' + c + '"]');
        if (cell) {
            let span = cell.querySelector('.cw-letter');
            if (!span) {
                span = document.createElement('span');
                span.className = 'cw-letter';
                const cellSize = parseInt(cell.style.width) || 32;
                span.style.fontSize = Math.max(9, Math.floor(cellSize * 0.5)) + 'px';
                cell.appendChild(span);
            }
            span.textContent = char;
            // Remove check feedback when user types
            cell.classList.remove('correct', 'wrong');
        }

        this._saveSessionProgress();

        // Check if word is complete
        if (this._selWord) {
            this._checkWordComplete(this._selWord);
        }

        // Advance cursor
        this._advanceCursor();
    },

    _advanceCursor() {
        if (!this._selWord) return;
        const p  = this._selWord;
        const dr = p.dir === 'DOWN' ? 1 : 0;
        const dc = p.dir === 'ACROSS' ? 1 : 0;

        // Find current index in word
        for (let i = 0; i < p.word.length; i++) {
            const r = p.r0 + dr * i;
            const c = p.c0 + dc * i;
            if (r === this._selR && c === this._selC) {
                // Move to next empty cell in word, or next non-empty
                for (let j = i + 1; j < p.word.length; j++) {
                    const nr = p.r0 + dr * j;
                    const nc = p.c0 + dc * j;
                    if (this._userGrid[nr][nc] === null) {
                        this._selR = nr;
                        this._selC = nc;
                        this._updateHighlight();
                        return;
                    }
                }
                // All filled: move to last cell
                const lastR = p.r0 + dr * (p.word.length - 1);
                const lastC = p.c0 + dc * (p.word.length - 1);
                this._selR = lastR;
                this._selC = lastC;
                this._updateHighlight();
                return;
            }
        }
    },

    _handleBackspace() {
        if (this._selR < 0 || this._selC < 0) return;

        const r = this._selR;
        const c = this._selC;

        if (this._userGrid[r][c] !== null) {
            // Clear current cell
            this._userGrid[r][c] = null;
            const cell = document.querySelector('.cw-cell[data-r="' + r + '"][data-c="' + c + '"]');
            if (cell) {
                const span = cell.querySelector('.cw-letter');
                if (span) span.remove();
                cell.classList.remove('correct', 'wrong');
            }
        } else {
            // Move back in word and clear
            if (!this._selWord) return;
            const p  = this._selWord;
            const dr = p.dir === 'DOWN' ? 1 : 0;
            const dc = p.dir === 'ACROSS' ? 1 : 0;

            for (let i = 1; i < p.word.length; i++) {
                const pr = p.r0 + dr * i;
                const pc = p.c0 + dc * i;
                if (pr === r && pc === c) {
                    const prevR = p.r0 + dr * (i - 1);
                    const prevC = p.c0 + dc * (i - 1);
                    this._selR = prevR;
                    this._selC = prevC;
                    this._userGrid[prevR][prevC] = null;
                    const prevCell = document.querySelector('.cw-cell[data-r="' + prevR + '"][data-c="' + prevC + '"]');
                    if (prevCell) {
                        const span = prevCell.querySelector('.cw-letter');
                        if (span) span.remove();
                        prevCell.classList.remove('correct', 'wrong');
                    }
                    this._updateHighlight();
                    break;
                }
            }
        }

        this._saveSessionProgress();
        this._updateWordsCount();
    },

    /* ── Arrow key navigation ───────────────────────────── */
    _handleArrow(key) {
        if (this._selR < 0 || this._selC < 0) return;

        let targetR = this._selR;
        let targetC = this._selC;

        if (key === 'ArrowRight') {
            if (this._selDir !== 'ACROSS') { this._selDir = 'ACROSS'; }
            else targetC++;
        } else if (key === 'ArrowLeft') {
            if (this._selDir !== 'ACROSS') { this._selDir = 'ACROSS'; }
            else targetC--;
        } else if (key === 'ArrowDown') {
            if (this._selDir !== 'DOWN') { this._selDir = 'DOWN'; }
            else targetR++;
        } else if (key === 'ArrowUp') {
            if (this._selDir !== 'DOWN') { this._selDir = 'DOWN'; }
            else targetR--;
        }

        if (targetR >= 0 && targetR < this._N && targetC >= 0 && targetC < this._N &&
            this._grid[targetR][targetC] !== null) {
            this._selR = targetR;
            this._selC = targetC;

            // Find word in new direction
            const found = this._placed.find(p =>
                p.dir === this._selDir && this._cellInWord(targetR, targetC, p)
            );
            if (found) {
                this._selWord = found;
                this._syncTabToWord(found);
            }

            this._updateHighlight();
            this._updateClueBar();
        }
    },

    /* ── Move to next word ──────────────────────────────── */
    _moveToNextWord() {
        if (!this._selWord || this._placed.length === 0) return;
        const idx = this._placed.indexOf(this._selWord);
        const next = this._placed[(idx + 1) % this._placed.length];
        this._selectWord(next);
        if (this._hiddenInput) this._hiddenInput.focus();
    },

    /* ── Word complete check ────────────────────────────── */
    _checkWordComplete(p) {
        if (!this._isWordComplete(p)) return;

        // Mark as correct
        this._markWordCorrect(p);

        // Count unique correct words
        this._correctWords = this._placed.filter(pw => this._isWordComplete(pw)).length;
        this._updateWordsCount();

        // Mark item done in clue list
        document.querySelectorAll('.cw-clue-item').forEach(el => {
            if (parseInt(el.dataset.r) === p.r0 &&
                parseInt(el.dataset.c) === p.c0 &&
                el.dataset.dir === p.dir) {
                el.classList.add('done');
            }
        });

        // Check game completion
        if (this._correctWords >= this._placed.length) {
            this._completed = true;
            clearInterval(this._timer);
            setTimeout(() => this._endGame(), 600);
        }
    },

    _isWordComplete(p) {
        const dr = p.dir === 'DOWN' ? 1 : 0;
        const dc = p.dir === 'ACROSS' ? 1 : 0;
        for (let i = 0; i < p.word.length; i++) {
            const r = p.r0 + dr * i;
            const c = p.c0 + dc * i;
            if (this._userGrid[r][c] !== p.word[i]) return false;
        }
        return true;
    },

    _markWordCorrect(p) {
        const dr = p.dir === 'DOWN' ? 1 : 0;
        const dc = p.dir === 'ACROSS' ? 1 : 0;
        for (let i = 0; i < p.word.length; i++) {
            const r = p.r0 + dr * i;
            const c = p.c0 + dc * i;
            const cell = document.querySelector('.cw-cell[data-r="' + r + '"][data-c="' + c + '"]');
            if (cell) {
                cell.classList.remove('wrong');
                cell.classList.add('correct');
            }
        }
    },

    /* ── Check word (selected) ──────────────────────────── */
    _checkWord() {
        if (!this._selWord) return;
        this._usedCheck = true;
        const p  = this._selWord;
        const dr = p.dir === 'DOWN' ? 1 : 0;
        const dc = p.dir === 'ACROSS' ? 1 : 0;

        for (let i = 0; i < p.word.length; i++) {
            const r = p.r0 + dr * i;
            const c = p.c0 + dc * i;
            if (this._userGrid[r][c] === null) continue;
            const cell = document.querySelector('.cw-cell[data-r="' + r + '"][data-c="' + c + '"]');
            if (!cell) continue;
            cell.classList.remove('correct', 'wrong');
            cell.classList.add(this._userGrid[r][c] === p.word[i] ? 'correct' : 'wrong');
        }
    },

    /* ── Check all ──────────────────────────────────────── */
    _checkAll() {
        this._usedCheck = true;
        for (let r = 0; r < this._N; r++) {
            for (let c = 0; c < this._N; c++) {
                if (this._userGrid[r][c] === null) continue;
                const cell = document.querySelector('.cw-cell[data-r="' + r + '"][data-c="' + c + '"]');
                if (!cell) continue;
                cell.classList.remove('correct', 'wrong');
                cell.classList.add(this._userGrid[r][c] === this._grid[r][c] ? 'correct' : 'wrong');
            }
        }

        // Recount correct words
        this._correctWords = this._placed.filter(p => this._isWordComplete(p)).length;
        this._updateWordsCount();
    },

    /* ── Reveal word ────────────────────────────────────── */
    _revealWord() {
        if (!this._selWord) return;
        this._usedReveal = true;
        const p  = this._selWord;
        const dr = p.dir === 'DOWN' ? 1 : 0;
        const dc = p.dir === 'ACROSS' ? 1 : 0;

        for (let i = 0; i < p.word.length; i++) {
            const r = p.r0 + dr * i;
            const c = p.c0 + dc * i;
            this._userGrid[r][c] = p.word[i];

            const cell = document.querySelector('.cw-cell[data-r="' + r + '"][data-c="' + c + '"]');
            if (cell) {
                let span = cell.querySelector('.cw-letter');
                if (!span) {
                    span = document.createElement('span');
                    span.className = 'cw-letter';
                    const cellSize = parseInt(cell.style.width) || 32;
                    span.style.fontSize = Math.max(9, Math.floor(cellSize * 0.5)) + 'px';
                    cell.appendChild(span);
                }
                span.textContent = p.word[i];
                cell.classList.remove('wrong');
                cell.classList.add('correct');
            }
        }

        this._saveSessionProgress();
        this._checkWordComplete(p);
    },

    /* ── HUD updates ────────────────────────────────────── */
    _updateGameTexts() {
        const timeLbl = document.getElementById('cw-time-lbl');
        if (timeLbl) timeLbl.textContent = this._t('timeLbl');

        const wordsLbl = document.getElementById('cw-words-lbl');
        if (wordsLbl) wordsLbl.textContent = this._t('wordsTxt');

        const scoreLbl = document.getElementById('cw-score-lbl');
        if (scoreLbl) scoreLbl.textContent = this._t('scoreLbl');

        const checkWordBtn = document.getElementById('cw-check-word-btn');
        if (checkWordBtn) checkWordBtn.textContent = this._t('checkWord');

        const checkAllBtn = document.getElementById('cw-check-all-btn');
        if (checkAllBtn) checkAllBtn.textContent = this._t('checkAll');

        const revealBtn = document.getElementById('cw-reveal-btn');
        if (revealBtn) revealBtn.textContent = this._t('revealWord');

        const quitBtn = document.getElementById('cw-quit-btn');
        if (quitBtn) quitBtn.textContent = this._t('quit');

        this._updateTabButtons();
    },

    _updateWordsCount() {
        const wordsVal = document.getElementById('cw-words-val');
        if (wordsVal) wordsVal.textContent = this._correctWords + '/' + this._placed.length;
        const scoreVal = document.getElementById('cw-score-val');
        if (scoreVal) scoreVal.textContent = this._calcScore();
    },

    _calcScore() {
        const base            = this._correctWords * 20;
        const completionBonus = this._correctWords === this._placed.length ? 300 : 0;
        const timeBonus       = Math.max(0, 600 - this._elapsed) * this._level * 0.3;
        const penalty         = (this._usedReveal ? 200 : 0) + (this._usedCheck ? 50 : 0);
        return Math.round(Math.max(0, base + completionBonus + timeBonus - penalty));
    },

    /* ── Format time ────────────────────────────────────── */
    _formatTime(s) {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return m + ':' + sec.toString().padStart(2, '0');
    },

    /* ── End game ───────────────────────────────────────── */
    _endGame() {
        clearInterval(this._timer);
        this._started = false;
        this._clearSessionProgress();

        this._correctWords = this._placed.filter(p => this._isWordComplete(p)).length;
        this._score = this._calcScore();

        const completed = this._correctWords >= this._placed.length;
        const pct       = this._correctWords / Math.max(1, this._placed.length);

        // Stars
        const timeLimit = this._level * 40 + 60;
        let stars;
        if (completed && this._elapsed <= timeLimit) stars = 3;
        else if (completed)                           stars = 2;
        else if (pct >= 0.6)                          stars = 1;
        else                                          stars = 0;

        // Best time
        const bestKey  = 'lv' + this._level;
        let newRecord  = false;
        if (completed) {
            if (!this._bestTimes[bestKey] || this._elapsed < this._bestTimes[bestKey]) {
                this._bestTimes[bestKey] = this._elapsed;
                newRecord = true;
            }
            if (!this._completedLevels.includes(this._level)) {
                this._completedLevels.push(this._level);
            }
        }

        this._saveGlobalProgress();
        this._buildLevelGrid();

        // Save stats async
        this._saveStats({
            found:     this._correctWords,
            total:     this._placed.length,
            elapsed:   this._elapsed,
            level:     this._level,
            score:     this._score,
            completed,
            stars,
            category:  this._category,
        }).then(newAchievements => {
            this._renderResults({
                found:          this._correctWords,
                total:          this._placed.length,
                elapsed:        this._elapsed,
                score:          this._score,
                stars,
                newRecord,
                newAchievements,
            });
        });
    },

    /* ── Save stats to Firebase ─────────────────────────── */
    async _saveStats({ found, total, elapsed, level, score, completed, category }) {
        const result = {
            level,
            wordsFound:     found,
            totalWords:     total,
            completed,
            elapsed,
            usedCheck:      this._usedCheck,
            usedReveal:     this._usedReveal,
            points:         score,
            category,
            correctAnswers: found,
            totalAttempts:  total,
            totalQuestions: total,
        };

        let newAchievements = [];

        if (typeof PlatformAuth !== 'undefined' && typeof PlatformFirestore !== 'undefined') {
            const user = PlatformAuth.currentUser;
            if (user) {
                try {
                    const { stats } = await PlatformFirestore.updateGameStats(user.uid, 'crossword', result);

                    if (typeof PlatformAchievements !== 'undefined') {
                        const profile = await PlatformFirestore.getOrCreateProfile(user.uid, user);
                        newAchievements = PlatformAchievements.checkGameAchievements(
                            'crossword', result, stats, profile
                        );
                        for (const id of newAchievements) {
                            await PlatformFirestore.unlockAchievement(user.uid, 'crossword', id);
                        }
                    }
                } catch (err) {
                    console.warn('[CrosswordGame] Firebase save error:', err);
                }
            }
        }

        return newAchievements;
    },

    /* ── Render results screen ──────────────────────────── */
    _renderResults({ found, total, elapsed, score, stars, newRecord, newAchievements }) {
        const titleEl = document.getElementById('cw-result-title');
        if (titleEl) titleEl.textContent = this._t('results');

        const starsEl = document.getElementById('cw-stars');
        if (starsEl) starsEl.textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

        const wordsEl = document.getElementById('cw-result-words');
        if (wordsEl) wordsEl.textContent = found + ' / ' + total;

        const wordsLblEl = document.getElementById('cw-result-words-lbl');
        if (wordsLblEl) wordsLblEl.textContent = this._t('wordsFound');

        const timeEl = document.getElementById('cw-result-time');
        if (timeEl) timeEl.textContent = this._formatTime(elapsed);

        const timeLblEl = document.getElementById('cw-result-time-lbl');
        if (timeLblEl) timeLblEl.textContent = this._t('timeLbl');

        const scoreEl = document.getElementById('cw-result-score');
        if (scoreEl) scoreEl.textContent = score.toLocaleString();

        const scoreLblEl = document.getElementById('cw-result-score-lbl');
        if (scoreLblEl) scoreLblEl.textContent = this._t('scoreLbl');

        const levelEl = document.getElementById('cw-result-level');
        if (levelEl) levelEl.textContent = this._level;

        const recordEl = document.getElementById('cw-new-record');
        if (recordEl) {
            recordEl.classList.toggle('hidden', !newRecord);
            if (newRecord) recordEl.textContent = this._t('newRecord');
        }

        // Achievements
        const achEl = document.getElementById('cw-achievements-unlocked');
        if (achEl) {
            if (newAchievements && newAchievements.length > 0) {
                achEl.classList.remove('hidden');
                achEl.innerHTML = newAchievements.map(id => {
                    const def = (typeof PlatformAchievements !== 'undefined')
                        ? PlatformAchievements.getById(id)
                        : null;
                    return def
                        ? '<span class="cw-achievement-badge" style="border-color:' +
                          PlatformAchievements.RARITY_COLOR[def.rarity] + '">' +
                          def.icon + ' ' + def.name + '</span>'
                        : '<span class="cw-achievement-badge">' + id + '</span>';
                }).join('');
            } else {
                achEl.classList.add('hidden');
            }
        }

        const retryBtn = document.getElementById('cw-retry-btn');
        if (retryBtn) retryBtn.textContent = this._t('retry');

        const nextBtn = document.getElementById('cw-next-btn');
        if (nextBtn) {
            nextBtn.textContent = this._t('next');
            nextBtn.disabled = this._level >= 10;
        }

        const menuBtn = document.getElementById('cw-menu-btn');
        if (menuBtn) menuBtn.textContent = this._t('menu');

        this._showScreen('results');
    },

    /* ── Quit ───────────────────────────────────────────── */
    _quitGame() {
        if (this._started && !this._completed) {
            this._showQuitConfirm();
        } else {
            this._doQuit();
        }
    },

    _showQuitConfirm() {
        const modal = document.getElementById('cw-quit-modal');
        if (!modal) { this._doQuit(); return; }
        const trigger = document.activeElement;

        // Update texts for current language
        const titleEl = document.getElementById('cw-quit-title');
        if (titleEl) titleEl.textContent = this._t('quitConfirmTitle');
        const msgEl = document.getElementById('cw-quit-msg');
        if (msgEl) msgEl.textContent = this._t('quitConfirmMsg');
        const cancelBtn = document.getElementById('cw-quit-cancel');
        if (cancelBtn) cancelBtn.textContent = this._t('quitCancel');
        const okBtn = document.getElementById('cw-quit-ok');
        if (okBtn) okBtn.textContent = this._t('quit');

        modal.classList.remove('hidden');
        if (cancelBtn) setTimeout(() => cancelBtn.focus(), 0);

        const trapFn = e => {
            if (e.key !== 'Tab') return;
            const focusable = [cancelBtn, okBtn].filter(Boolean);
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
        clearInterval(this._timer);
        this._started = false;
        this._saveSessionProgress();
        this._showScreen('home');
        this._buildLevelGrid();
        this._updateHomeTexts();
    },

    /* ── Direct cell keyboard input ────────────────────── */
    _inputLetter(char, r, c) {
        if (!this._started || this._completed) return;
        this._selR = r;
        this._selC = c;

        if (char === '') {
            // Backspace/Delete
            this._handleBackspace();
        } else {
            // Normalize to A-Z (strip accents, match hidden input behavior)
            const norm = char.toUpperCase().replace(/[^A-Z]/g, '');
            if (norm) this._handleInput(norm);
        }
    },

    _moveFocus(r, c, dr, dc) {
        const nr = r + dr, nc = c + dc;
        const target = document.querySelector('.cw-cell[data-r="' + nr + '"][data-c="' + nc + '"].white');
        if (target) target.focus();
    },

    /* ── Error display ──────────────────────────────────── */
    _showError(msg) {
        const container = document.getElementById('cw-grid-container');
        if (container) {
            container.innerHTML = '<div class="cw-error-msg">' + msg + '</div>';
        }
        setTimeout(() => {
            this._showScreen('home');
            this._buildLevelGrid();
            this._updateHomeTexts();
        }, 2500);
    },
};
