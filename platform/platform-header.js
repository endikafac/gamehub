/**
 * Games Hub - Platform Header Component
 *
 * Injects the shared platform header into any page.
 * Usage: call PlatformHeader.init({ gameName: 'MathMaster', gameIcon: '🧮' })
 * Requires: platform.css, i18n-platform.js, firebase-config.js, auth.js, firestore.js
 */

const PlatformHeader = {
    _userProfile: null,
    _dropdownOpen: false,
    _gamesMenuOpen: false,

    /**
     * @param {Object} opts
     * @param {string} [opts.gameName]  - Name of the current game (shown as breadcrumb)
     * @param {string} [opts.gameIcon]  - Emoji icon for the game
     * @param {string} [opts.rootPath]  - Relative path to the root (e.g. '../')
     */
    init(opts = {}) {
        this._opts = { gameName: '', gameIcon: '', rootPath: '../', ...opts };
        this._inject();
        this._buildGamesMenu();
        this._bindEvents();
        this._syncLanguage();
        this._applyTheme();
        this._applyHighContrast();

        // React to auth state
        if (typeof PlatformAuth !== 'undefined') {
            PlatformAuth.onAuthStateChanged(user => this._onAuthChange(user));
        }

        // React to language changes
        document.addEventListener('platformLanguageChanged', () => this._syncLanguage());
    },

    // ─── Build & inject ──────────────────────────────────────────────────────

    _inject() {
        const t = key => PlatformI18n.t(key);
        const root = this._opts.rootPath;

        const header = document.createElement('header');
        header.className = 'platform-header';
        header.setAttribute('role', 'banner');
        header.id = 'platform-header';
        header.innerHTML = `
            <a href="#main-content" class="skip-link">${t('skipToContent')}</a>
            <div class="platform-header-inner">

                <!-- Brand -->
                <div class="platform-brand">
                    <a href="${root}index.html" class="platform-logo" aria-label="${t('platformName')} – ${t('home')}">
                        <span class="platform-logo-icon" aria-hidden="true">🎮</span>
                        <span class="platform-logo-text">${t('platformName')}</span>
                    </a>
                    ${this._opts.gameName ? `
                    <div class="platform-breadcrumb" aria-hidden="true">
                        <span class="platform-breadcrumb-sep">›</span>
                        <span class="platform-game-name" id="platform-game-name">
                            ${this._opts.gameIcon ? `${this._opts.gameIcon} ` : ''}${this._opts.gameName}
                        </span>
                    </div>` : ''}
                </div>

                <!-- Controls -->
                <nav class="platform-controls" aria-label="${t('settings')}">

                    <!-- Games navigation -->
                    <div class="platform-games-nav" id="platform-games-nav">
                        <button class="platform-games-btn" id="platform-games-btn"
                                aria-label="Ir a otro juego" aria-haspopup="true" aria-expanded="false">
                            <span aria-hidden="true">🎮</span>
                            <span class="platform-games-chevron" aria-hidden="true">▾</span>
                        </button>
                    </div>

                    <!-- Language -->
                    <div class="platform-lang-group" role="group" aria-label="${t('language')}" id="platform-lang-group">
                        <button class="lang-pill" data-lang="es-ES" aria-label="Castellano" title="Castellano">ES</button>
                        <button class="lang-pill" data-lang="en-US" aria-label="English"    title="English">EN</button>
                        <button class="lang-pill" data-lang="eu-ES" aria-label="Euskara"    title="Euskara">EU</button>
                    </div>

                    <!-- High contrast -->
                    <button class="platform-icon-btn" id="platform-contrast-btn"
                            aria-label="${t('highContrast')}" title="${t('highContrast')}"
                            aria-pressed="false">
                        ◑
                    </button>

                    <!-- Theme toggle -->
                    <button class="platform-icon-btn" id="platform-theme-btn"
                            aria-label="${t('toggleTheme')}" title="${t('toggleTheme')}">
                        <span class="theme-icon-dark"  aria-hidden="true">🌙</span>
                        <span class="theme-icon-light" aria-hidden="true">☀️</span>
                    </button>

                    <!-- User area (filled dynamically) -->
                    <div id="platform-user-area"></div>
                </nav>
            </div>
        `;

        // Insert before everything else in <body>
        document.body.insertBefore(header, document.body.firstChild);

        // Toast container
        const toasts = document.createElement('div');
        toasts.className = 'platform-toast-container';
        toasts.id = 'platform-toasts';
        toasts.setAttribute('aria-live', 'polite');
        toasts.setAttribute('aria-atomic', 'true');
        document.body.appendChild(toasts);

        // Dropdown (portal, appended to body)
        const dropdown = document.createElement('div');
        dropdown.className = 'platform-dropdown hidden';
        dropdown.id = 'platform-dropdown';
        dropdown.setAttribute('role', 'menu');
        document.body.appendChild(dropdown);

        // Games menu (portal, appended to body)
        const gamesMenu = document.createElement('div');
        gamesMenu.className = 'platform-games-dropdown hidden';
        gamesMenu.id = 'platform-games-menu';
        gamesMenu.setAttribute('role', 'menu');
        document.body.appendChild(gamesMenu);
    },

    // ─── Auth rendering ──────────────────────────────────────────────────────

    async _onAuthChange(user) {
        if (user) {
            this._userProfile = await PlatformFirestore.getOrCreateProfile(user.uid, user)
                .catch(() => user);
        } else {
            this._userProfile = null;
        }
        this._renderUserArea();
    },

    _renderUserArea() {
        const area = document.getElementById('platform-user-area');
        if (!area) return;
        const t   = key => PlatformI18n.t(key);
        const u   = this._userProfile;

        if (u) {
            const level    = PlatformFirestore.levelFromXP(u.xp || 0);
            const lvlName  = PlatformI18n.getLevelName(level);
            const initials = (u.username || '?').charAt(0).toUpperCase();
            const avatar   = u.photoURL
                ? `<img src="${u.photoURL}" alt="" aria-hidden="true">`
                : `<span aria-hidden="true">${initials}</span>`;

            const pts = (u.totalPoints || 0).toLocaleString();
            area.innerHTML = `
                <button class="platform-user-btn" id="platform-user-btn"
                        aria-haspopup="true" aria-expanded="false"
                        aria-label="${u.username}, ${t('level')} ${level}: ${lvlName}">
                    <span class="platform-user-avatar">${avatar}</span>
                    <span class="platform-user-name">${u.username}</span>
                    <span class="platform-xp-badge" aria-hidden="true">Lv.${level} · ⭐${pts}</span>
                </button>
            `;
            document.getElementById('platform-user-btn')
                ?.addEventListener('click', e => { e.stopPropagation(); this._toggleDropdown(); });
            this._buildDropdown(u, level, lvlName);
        } else {
            area.innerHTML = `
                <button class="platform-signin-btn" id="platform-signin-btn"
                        aria-label="${t('signInWithGoogle')}">
                    ${this._googleIcon()}
                    <span>${t('signInWithGoogle')}</span>
                </button>
            `;
            document.getElementById('platform-signin-btn')
                ?.addEventListener('click', () => this._signIn());
        }
    },

    _buildDropdown(u, level, lvlName) {
        const t   = key => PlatformI18n.t(key);
        const root = this._opts.rootPath;
        const xpNext = PlatformFirestore.xpToNextLevel(u.xp || 0);
        const dropdown = document.getElementById('platform-dropdown');
        if (!dropdown) return;
        dropdown.innerHTML = `
            <div class="platform-dropdown-header">
                <div class="platform-dropdown-username">${u.username}</div>
                <div class="platform-dropdown-email">${u.email || ''}</div>
                <div class="platform-dropdown-xp">
                    ${t('level')} ${level}: ${lvlName} · ${u.xp || 0} XP
                    ${xpNext > 0 ? `<span style="color:var(--text-muted)"> (+${xpNext} → next)</span>` : ''}
                </div>
            </div>
            <a class="platform-dropdown-item" href="${root}platform/stats.html" role="menuitem">
                <span aria-hidden="true">📊</span> Estadísticas
            </a>
            <a class="platform-dropdown-item" href="${root}platform/achievements.html" role="menuitem">
                <span aria-hidden="true">🏆</span> ${t('achievements')}
            </a>
            <button class="platform-dropdown-item" id="pd-signout" role="menuitem">
                <span aria-hidden="true">🚪</span> ${t('signOut')}
            </button>
        `;
        document.getElementById('pd-signout')?.addEventListener('click', () => {
            this._closeDropdown();
            this._signOut();
        });
    },

    _buildGamesMenu() {
        const root = this._opts.rootPath;
        const currentPath = window.location.pathname;

        // Inline SVG flags (work in all browsers — no Unicode tag sequences)
        const IKURRINA = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="22" height="15" style="vertical-align:middle;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.4)" aria-hidden="true"><rect width="30" height="20" fill="#CC0000"/><line x1="0" y1="0" x2="30" y2="20" stroke="#007840" stroke-width="7"/><line x1="30" y1="0" x2="0" y2="20" stroke="#007840" stroke-width="7"/><rect x="12.5" y="0" width="5" height="20" fill="white"/><rect x="0" y="7.5" width="30" height="5" fill="white"/></svg>';
        const UNION_JACK = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width="22" height="15" style="vertical-align:middle;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.4)" aria-hidden="true"><rect width="60" height="40" fill="#012169"/><line x1="0" y1="0" x2="60" y2="40" stroke="white" stroke-width="10"/><line x1="60" y1="0" x2="0" y2="40" stroke="white" stroke-width="10"/><rect x="25" y="0" width="10" height="40" fill="white"/><rect x="0" y="15" width="60" height="10" fill="white"/><rect x="27" y="0" width="6" height="40" fill="#C8102E"/><rect x="0" y="17" width="60" height="6" fill="#C8102E"/></svg>';

        const games = [
            { href: `${root}index.html`,               icon: '🏠', label: 'Games Hub',   key: '/index.html' },
            { href: `${root}mathMaster-EFC/index.html`, icon: '🧮', label: 'MathMaster',  key: '/mathMaster-EFC/' },
            { href: `${root}snake-EHS/index.html`,      icon: '🐍', label: 'Snake',       key: '/snake-EHS/' },
            { href: `${root}tableMaster-EFC/index.html`,icon: '✖',  label: 'TableMaster', key: '/tableMaster-EFC/' },
            { href: `${root}typingMaster-EFC/index.html`, icon: '⌨️', label: 'TypeMaster',  key: '/typingMaster-EFC/' },
            { href: `${root}wordSearch-EFC/index.html`,   icon: '🔍', label: 'WordSearch',  key: '/wordSearch-EFC/'   },
            { href: `${root}crossword-EFC/index.html`,    icon: '✏️', label: 'Crucigrama',  key: '/crossword-EFC/'    },
            { href: `${root}geoQuiz-EFC/index.html`,      icon: '🗺️', label: 'GeoQuiz',        key: '/geoQuiz-EFC/'         },
            { href: `${root}euskera-EFC/index.html`,      icon: IKURRINA,    label: 'Nor-Nori-Nork',  key: '/euskera-EFC/'      },
            { href: `${root}englishVerbs-EFC/index.html`, icon: UNION_JACK,  label: 'Irregular Verbs', key: '/englishVerbs-EFC/' },
        ];

        const menu = document.getElementById('platform-games-menu');
        if (!menu) return;

        menu.innerHTML = games.map(g => {
            const isCurrent = currentPath.includes(g.key) ||
                (g.key === '/index.html' && (currentPath.endsWith('/') || currentPath.endsWith('/index.html')) && !currentPath.includes('-EFC') && !currentPath.includes('-EHS'));
            return `<a href="${g.href}" class="platform-game-link${isCurrent ? ' current' : ''}" role="menuitem">
                <span class="platform-game-icon" aria-hidden="true">${g.icon}</span>
                <span>${g.label}</span>
            </a>`;
        }).join('');
    },

    _toggleDropdown() {
        this._dropdownOpen ? this._closeDropdown() : this._openDropdown();
    },

    _openDropdown() {
        const btn = document.getElementById('platform-user-btn');
        const dd  = document.getElementById('platform-dropdown');
        if (!dd) return;
        dd.classList.remove('hidden');
        btn?.setAttribute('aria-expanded', 'true');
        this._dropdownOpen = true;
        // Position below button
        if (btn) {
            const r = btn.getBoundingClientRect();
            dd.style.top   = `${r.bottom + 4}px`;
            dd.style.right = `${window.innerWidth - r.right}px`;
        }
    },

    _closeDropdown() {
        const btn = document.getElementById('platform-user-btn');
        const dd  = document.getElementById('platform-dropdown');
        dd?.classList.add('hidden');
        btn?.setAttribute('aria-expanded', 'false');
        this._dropdownOpen = false;
    },

    _toggleGamesMenu() {
        this._gamesMenuOpen ? this._closeGamesMenu() : this._openGamesMenu();
    },

    _openGamesMenu() {
        const btn = document.getElementById('platform-games-btn');
        const menu = document.getElementById('platform-games-menu');
        if (!menu) return;
        menu.classList.remove('hidden');
        btn?.setAttribute('aria-expanded', 'true');
        this._gamesMenuOpen = true;
        // Position below button
        if (btn) {
            const r = btn.getBoundingClientRect();
            menu.style.top  = `${r.bottom + 4}px`;
            menu.style.left = `${r.left}px`;
        }
    },

    _closeGamesMenu() {
        const btn  = document.getElementById('platform-games-btn');
        const menu = document.getElementById('platform-games-menu');
        menu?.classList.add('hidden');
        btn?.setAttribute('aria-expanded', 'false');
        this._gamesMenuOpen = false;
    },

    // ─── Auth actions ────────────────────────────────────────────────────────

    async _signIn() {
        if (typeof PlatformAuth === 'undefined') {
            this.showToast(PlatformI18n.t('errorSignIn'), 'error');
            return;
        }
        try {
            await PlatformAuth.signInWithGoogle();
            // _onAuthChange will be fired automatically
        } catch (err) {
            console.error('[Header] sign-in error:', err);
            this.showToast(PlatformI18n.t('errorSignIn'), 'error');
        }
    },

    async _signOut() {
        if (typeof PlatformAuth !== 'undefined') await PlatformAuth.signOut();
        // If the current page is a game, redirect to hub
        const path = window.location.pathname;
        if (path.includes('/mathMaster') || path.includes('/snake') || path.includes('/tableMaster') || path.includes('/typingMaster') || path.includes('/wordSearch') || path.includes('/crossword') || path.includes('/geoQuiz')) {
            window.location.href = this._opts.rootPath + 'index.html';
        }
    },

    // ─── Language ────────────────────────────────────────────────────────────

    _syncLanguage() {
        const current = PlatformI18n.currentLanguage;
        document.querySelectorAll('#platform-lang-group .lang-pill').forEach(btn => {
            const active = btn.dataset.lang === current;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', String(active));
        });
    },

    // ─── Theme & contrast ────────────────────────────────────────────────────

    _applyTheme() {
        const saved = localStorage.getItem('games_hub_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', saved);
    },

    _toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next    = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('games_hub_theme', next);
        // Sync with game-level setting if available
        if (typeof MathMasterGame !== 'undefined' && MathMasterGame.setTheme) {
            MathMasterGame.setTheme(next);
        }
    },

    _applyHighContrast() {
        const saved = localStorage.getItem('games_hub_high_contrast') === 'true';
        document.documentElement.setAttribute('data-high-contrast', String(saved));
        const btn = document.getElementById('platform-contrast-btn');
        if (btn) btn.setAttribute('aria-pressed', String(saved));
    },

    _toggleHighContrast() {
        const current = document.documentElement.getAttribute('data-high-contrast') === 'true';
        const next = !current;
        document.documentElement.setAttribute('data-high-contrast', String(next));
        localStorage.setItem('games_hub_high_contrast', String(next));
        const btn = document.getElementById('platform-contrast-btn');
        if (btn) btn.setAttribute('aria-pressed', String(next));
        // Sync with game high-contrast setting
        const setting = document.getElementById('setting-high-contrast');
        if (setting) setting.checked = next;
    },

    // ─── Event listeners ─────────────────────────────────────────────────────

    _bindEvents() {
        // Close dropdown when clicking outside
        document.addEventListener('click', e => {
            if (!e.target.closest('#platform-user-btn') &&
                !e.target.closest('#platform-dropdown')) {
                this._closeDropdown();
            }
        });

        // Games nav button toggle + close when clicking outside
        document.addEventListener('click', e => {
            const btn = e.target.closest('#platform-games-btn');
            if (btn) {
                e.stopPropagation();
                this._toggleGamesMenu();
            }
            // Close if clicking outside
            if (!e.target.closest('#platform-games-nav') && !e.target.closest('#platform-games-menu')) {
                this._closeGamesMenu();
            }
        });

        // Escape closes dropdown
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this._closeDropdown();
                this._closeGamesMenu();
            }
        });

        // Language pills (event delegation on container)
        document.addEventListener('click', e => {
            const pill = e.target.closest('.lang-pill[data-lang]');
            if (pill && pill.closest('#platform-lang-group')) {
                PlatformI18n.setLanguage(pill.dataset.lang);
                this._syncLanguage();
            }
        });

        // Theme toggle
        document.addEventListener('click', e => {
            if (e.target.closest('#platform-theme-btn')) this._toggleTheme();
        });

        // High contrast toggle
        document.addEventListener('click', e => {
            if (e.target.closest('#platform-contrast-btn')) this._toggleHighContrast();
        });
    },

    // ─── Toast ───────────────────────────────────────────────────────────────

    /**
     * Show a toast notification.
     * @param {string} message
     * @param {'info'|'success'|'error'} [type]
     * @param {number} [duration] ms
     */
    showToast(message, type = 'info', duration = 3500) {
        const container = document.getElementById('platform-toasts');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `platform-toast ${type}`;
        toast.setAttribute('role', 'status');
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    // ─── Helpers ─────────────────────────────────────────────────────────────

    _googleIcon() {
        return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>`;
    },

    /**
     * Trap keyboard focus within a container element.
     * @param {Element} container
     */
    trapFocus(container) {
        const sel = 'button:not([disabled]),[href],input:not([disabled]),select,[tabindex]:not([tabindex="-1"])';
        const nodes = container.querySelectorAll(sel);
        if (!nodes.length) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        container._trapFn = e => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
            else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
        };
        container.addEventListener('keydown', container._trapFn);
        // Move focus to first focusable element
        setTimeout(() => first.focus(), 0);
    },

    /**
     * Release focus trap from a container.
     * @param {Element} container
     * @param {Element} [returnEl] - Element to return focus to
     */
    releaseFocus(container, returnEl) {
        if (container && container._trapFn) {
            container.removeEventListener('keydown', container._trapFn);
            delete container._trapFn;
        }
        if (returnEl) setTimeout(() => returnEl.focus(), 0);
    }
};
