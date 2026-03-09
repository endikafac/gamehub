/**
 * GeoQuiz - Game Logic
 * Atlas mode: browse all geographic data
 * Quiz mode: multiple-choice questions by difficulty level
 */

const GeoQuiz = (() => {
    // ── State ──────────────────────────────────────────────────────────────
    // Convert platform lang code (es-ES) to short code (es)
    function platformLang() {
        const pl = (typeof PlatformI18n !== 'undefined' && PlatformI18n.currentLanguage)
            ? PlatformI18n.currentLanguage : 'es-ES';
        if (pl.startsWith('en')) return 'en';
        if (pl.startsWith('eu')) return 'eu';
        return 'es';
    }

    const state = {
        lang: 'es',  // set properly in init()
        screen: 'home',           // home | atlas | quiz-setup | quiz | results
        atlasTab: 'world',        // world | spain | euskadi
        atlasSubTab: 'countries', // countries | rivers | mountains | comunidades | provincias | territories | munis
        quizLevel: 1,
        quizQuestions: [],
        quizIndex: 0,
        quizScore: 0,
        quizCorrect: 0,
        quizStart: 0,
        timerInterval: null,
        timerSecs: 15,
        timerLeft: 15,
        answered: false,
        searchQuery: '',
    };

    // ── i18n ───────────────────────────────────────────────────────────────
    const I18N = {
        es: {
            appName: 'GeoQuiz',
            subtitle: 'Conoce el mundo, España y Euskadi',
            atlasMode: 'Atlas',
            atlasDesc: 'Explora toda la información',
            quizMode: 'Quiz',
            quizDesc: 'Responde preguntas y gana puntos',
            world: 'Mundial', spain: 'España', euskadi: 'Euskadi',
            countries: 'Países', rivers: 'Ríos', mountains: 'Montañas',
            comunidades: 'CC.AA.', provincias: 'Provincias',
            territories: 'Territorios', munis: 'Municipios',
            search: 'Buscar...',
            level: 'Nivel', selectLevel: 'Selecciona nivel',
            start: 'Empezar', playAgain: 'Repetir', home: 'Inicio',
            question: 'Pregunta',
            correct: '¡Correcto!', wrong: 'Incorrecto',
            results: '¡Resultados!',
            pts: 'pts', correct_lbl: 'Correctas', time_lbl: 'Tiempo',
            capital_q: '¿Cuál es la capital de',
            country_q: '¿En qué país está la capital',
            continent_q: '¿En qué continente está',
            km_q: '¿Cuántos km tiene el río',
            height_q: '¿Cuál es la altura del',
            river_country_q: '¿En qué región está el río',
            capital_of: 'Capital de',
            back: '← Volver',
            lang_es: 'Español', lang_en: 'English', lang_eu: 'Euskera',
            lvl_desc: [
                '', // index 0 unused
                'Países famosos y capitales conocidas',
                'Más países y capitales de Europa',
                'Capitales de América y Asia',
                'Ríos y montañas más famosos del mundo',
                'Comunidades autónomas de España',
                'Provincias de España y sus capitales',
                'Ríos y montañas de España',
                'Territorios y municipios de Euskadi',
                'Ríos y montañas de Euskadi',
                'Todo: repaso completo',
            ],
            stars0: 'Sigue practicando', stars1: 'Bien hecho', stars2: 'Excelente', stars3: '¡Perfecto!',
        },
        en: {
            appName: 'GeoQuiz',
            subtitle: 'Explore the world, Spain and Euskadi',
            atlasMode: 'Atlas',
            atlasDesc: 'Browse all information',
            quizMode: 'Quiz',
            quizDesc: 'Answer questions and earn points',
            world: 'World', spain: 'Spain', euskadi: 'Euskadi',
            countries: 'Countries', rivers: 'Rivers', mountains: 'Mountains',
            comunidades: 'Regions', provincias: 'Provinces',
            territories: 'Territories', munis: 'Municipalities',
            search: 'Search...',
            level: 'Level', selectLevel: 'Select level',
            start: 'Start', playAgain: 'Play again', home: 'Home',
            question: 'Question',
            correct: 'Correct!', wrong: 'Incorrect',
            results: 'Results!',
            pts: 'pts', correct_lbl: 'Correct', time_lbl: 'Time',
            capital_q: 'What is the capital of',
            country_q: 'In which country is the capital',
            continent_q: 'In which continent is',
            km_q: 'How many km is the',
            height_q: 'What is the height of',
            river_country_q: 'In which region is the river',
            capital_of: 'Capital of',
            back: '← Back',
            lang_es: 'Español', lang_en: 'English', lang_eu: 'Euskera',
            lvl_desc: [
                '',
                'Famous countries and capitals',
                'More countries and European capitals',
                'Americas and Asia capitals',
                'Famous rivers and mountains',
                'Comunidades autónomas of Spain',
                'Spanish provinces and capitals',
                'Spanish rivers and mountains',
                'Euskadi territories and municipalities',
                'Euskadi rivers and mountains',
                'Full review: everything',
            ],
            stars0: 'Keep practicing', stars1: 'Well done', stars2: 'Excellent', stars3: 'Perfect!',
        },
        eu: {
            appName: 'GeoQuiz',
            subtitle: 'Ezagutu mundua, Espainia eta Euskadi',
            atlasMode: 'Atlasa',
            atlasDesc: 'Informazio guztia ikusi',
            quizMode: 'Galdeketa',
            quizDesc: 'Galderak erantzun eta puntuak irabazi',
            world: 'Mundua', spain: 'Espainia', euskadi: 'Euskadi',
            countries: 'Herriak', rivers: 'Ibaiak', mountains: 'Mendiak',
            comunidades: 'Erkidegoak', provincias: 'Probintziak',
            territories: 'Lurraldeak', munis: 'Udalerriak',
            search: 'Bilatu...',
            level: 'Maila', selectLevel: 'Maila aukeratu',
            start: 'Hasi', playAgain: 'Berriz', home: 'Hasiera',
            question: 'Galdera',
            correct: 'Ondo!', wrong: 'Gaizki',
            results: 'Emaitzak!',
            pts: 'puntu', correct_lbl: 'Zuzenak', time_lbl: 'Denbora',
            capital_q: 'Zein da hiriburua',
            country_q: 'Zein herrialdetan dago hiriburua',
            continent_q: 'Zein kontinentetan dago',
            km_q: 'Zenbat km ditu',
            height_q: 'Zein da altueraren',
            river_country_q: 'Zein eskualdetan dago ibaia',
            capital_of: 'Hiriburu',
            back: '← Atzera',
            lang_es: 'Español', lang_en: 'English', lang_eu: 'Euskera',
            lvl_desc: [
                '',
                'Herrialde ezagunak eta hiriburuak',
                'Europako hiriburuak',
                'Amerika eta Asiako hiriburuak',
                'Munduaren ibai eta mendiak',
                'Espainiako erkidegoak',
                'Espainiako probintziak',
                'Espainiako ibai eta mendiak',
                'Euskadiko lurraldeak eta udalerriak',
                'Euskadiko ibai eta mendiak',
                'Dena: errepaso osoa',
            ],
            stars0: 'Jarraitu lantzen', stars1: 'Ongi egina', stars2: 'Bikaina', stars3: 'Ezin hobeto!',
        },
    };

    const t = (key) => (I18N[state.lang] || I18N.es)[key] || key;

    // ── DOM helpers ────────────────────────────────────────────────────────
    const $ = (id) => document.getElementById(id);
    const show = (id) => { const el = $(id); if (el) el.style.display = ''; };
    const hide = (id) => { const el = $(id); if (el) el.style.display = 'none'; };

    function setScreen(name) {
        document.querySelectorAll('.gq-screen').forEach(s => s.classList.remove('active'));
        const el = $('gq-' + name);
        if (el) {
            el.classList.add('active');
            // Move focus to the new screen for screen reader announcement
            if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
            el.focus({ preventScroll: true });
        }
        state.screen = name;
    }

    // ── Atlas ──────────────────────────────────────────────────────────────
    function renderAtlas() {
        setScreen('atlas');
        renderAtlasTopTabs();
        renderAtlasSubTabs();
        renderAtlasCards();
    }

    function renderAtlasTopTabs() {
        const tabs = ['world', 'spain', 'euskadi'];
        const container = $('atlas-top-tabs');
        if (!container) return;
        container.setAttribute('role', 'tablist');
        container.innerHTML = tabs.map(tab => {
            const isActive = state.atlasTab === tab;
            return `<button class="gq-tab${isActive ? ' active' : ''}" role="tab" aria-selected="${isActive}" onclick="GeoQuiz.setAtlasTab('${tab}')">${t(tab)}</button>`;
        }).join('');
    }

    function renderAtlasSubTabs() {
        const subtabs = {
            world: ['countries', 'rivers', 'mountains'],
            spain: ['comunidades', 'provincias', 'rivers', 'mountains'],
            euskadi: ['territories', 'munis', 'rivers', 'mountains'],
        };
        const list = subtabs[state.atlasTab] || [];
        const container = $('atlas-sub-tabs');
        if (!container) return;
        container.setAttribute('role', 'tablist');
        container.innerHTML = list.map(sub => {
            const isActive = state.atlasSubTab === sub;
            return `<button class="gq-tab${isActive ? ' active' : ''}" role="tab" aria-selected="${isActive}" onclick="GeoQuiz.setAtlasSubTab('${sub}')">${t(sub)}</button>`;
        }).join('');
    }

    // Continent emoji map
    const CONTINENT_ICONS = {
        'Europa': '🇪🇺', 'Europe': '🇪🇺',
        'Asia': '🌏', 'América': '🌎', 'America': '🌎',
        'África': '🌍', 'Africa': '🌍',
        'Oceanía': '🌊', 'Oceania': '🌊',
    };

    function getAtlasGroups() {
        const tab = state.atlasTab;
        const sub = state.atlasSubTab;
        const d = GQ_DATA;
        // Returns array of { header?, items[] }

        if (tab === 'world') {
            if (sub === 'countries') {
                // Group by continent
                const groups = {};
                d.countries.forEach(c => {
                    if (!groups[c.continent]) groups[c.continent] = [];
                    groups[c.continent].push({ icon: c.flag, name: c.name, info: `${t('capital_of')}: ${c.capital}` });
                });
                return Object.entries(groups).map(([continent, items]) => ({
                    header: `${CONTINENT_ICONS[continent] || '🌍'} ${continent}`,
                    items,
                }));
            }
            if (sub === 'rivers') return [{ items: d.world_rivers.map(r => ({
                icon: '🌊', name: r.name, info: `${r.region} · ${r.km.toLocaleString()} km`
            })) }];
            if (sub === 'mountains') return [{ items: d.world_mountains.map(m => ({
                icon: '⛰️', name: m.name, info: `${m.region} · ${m.height.toLocaleString()} m`
            })) }];
        }
        if (tab === 'spain') {
            if (sub === 'comunidades') return [{ items: d.comunidades.map(c => ({
                icon: '🏛️', name: c.name, info: `${t('capital_of')}: ${c.capital}`
            })) }];
            if (sub === 'provincias') {
                // Group by comunidad
                const groups = {};
                d.provincias.forEach(p => {
                    if (!groups[p.comunidad]) groups[p.comunidad] = [];
                    groups[p.comunidad].push({ icon: '📍', name: p.name, info: `${t('capital_of')}: ${p.capital}` });
                });
                return Object.entries(groups).map(([cc, items]) => ({ header: `🏛️ ${cc}`, items }));
            }
            if (sub === 'rivers') return [{ items: d.spain_rivers.map(r => ({
                icon: '🌊', name: r.name, info: `${r.origin} → ${r.mouth} · ${r.km} km`
            })) }];
            if (sub === 'mountains') return [{ items: d.spain_mountains.map(m => ({
                icon: '⛰️', name: m.name, info: `${m.province} · ${m.height.toLocaleString()} m`
            })) }];
        }
        if (tab === 'euskadi') {
            if (sub === 'territories') return [{ items: d.euskadi_territories.map(t2 => ({
                icon: '🏴', name: `${t2.name} / ${t2.nameEu}`, info: `${t('capital_of')}: ${t2.capital} · ${t2.info}`
            })) }];
            if (sub === 'munis') {
                const groups = {};
                d.euskadi_munis.forEach(m => {
                    if (!groups[m.territory]) groups[m.territory] = [];
                    groups[m.territory].push({ icon: '🏘️', name: `${m.name} / ${m.nameEu}`, info: m.info });
                });
                return Object.entries(groups).map(([ter, items]) => ({ header: `🏴 ${ter}`, items }));
            }
            if (sub === 'rivers') return [{ items: d.euskadi_rivers.map(r => ({
                icon: '🌊', name: r.name, info: `${r.territory} · ${r.km} km · ${r.info}`
            })) }];
            if (sub === 'mountains') return [{ items: d.euskadi_mountains.map(m => ({
                icon: '⛰️', name: m.name, info: `${m.territory} · ${m.height.toLocaleString()} m · ${m.info}`
            })) }];
        }
        return [{ items: [] }];
    }

    function renderAtlasCards() {
        const q = state.searchQuery.toLowerCase();
        const groups = getAtlasGroups();
        const container = $('atlas-cards');
        if (!container) return;

        let html = '';
        let totalItems = 0;

        for (const group of groups) {
            let items = group.items;
            if (q) items = items.filter(i => i.name.toLowerCase().includes(q) || i.info.toLowerCase().includes(q));
            if (items.length === 0) continue;
            totalItems += items.length;
            if (group.header) {
                html += `<div class="gq-section-header">${group.header}</div>`;
            }
            html += items.map(item =>
                `<div class="gq-card">
                    <span class="card-icon">${item.icon}</span>
                    <p class="card-name">${item.name}</p>
                    <p class="card-info">${item.info}</p>
                </div>`
            ).join('');
        }

        if (totalItems === 0) {
            html = '<p style="color:var(--text-secondary);text-align:center;grid-column:1/-1">Sin resultados</p>';
        }
        container.innerHTML = html;
    }

    // ── Quiz question builder ──────────────────────────────────────────────
    function shuffle(arr) { return arr.slice().sort(() => Math.random() - 0.5); }

    function pick(arr, n) { return shuffle(arr).slice(0, n); }

    function pickWrong(arr, correct, key, n) {
        return shuffle(arr.filter(x => x[key] !== correct)).slice(0, n).map(x => x[key]);
    }

    function buildQuestions(level) {
        const d = GQ_DATA;
        const qs = [];

        const addCapitalQ = (items) => {
            shuffle(items).forEach(c => {
                const wrong = pickWrong(items, c.capital, 'capital', 3);
                if (wrong.length < 3) return;
                qs.push({
                    icon: c.flag || '🌍',
                    context: t('world'),
                    text: `${t('capital_q')} ${c.name}?`,
                    answer: c.capital,
                    options: shuffle([c.capital, ...wrong]),
                });
            });
        };

        const addComunidadCapQ = (items) => {
            shuffle(items).forEach(c => {
                const wrong = pickWrong(items, c.capital, 'capital', 3);
                if (wrong.length < 3) return;
                qs.push({
                    icon: '🏛️',
                    context: t('spain'),
                    text: `${t('capital_q')} ${c.name}?`,
                    answer: c.capital,
                    options: shuffle([c.capital, ...wrong]),
                });
            });
        };

        const addProvinciaCapQ = (items) => {
            shuffle(items).forEach(c => {
                const wrong = pickWrong(items, c.capital, 'capital', 3);
                if (wrong.length < 3) return;
                qs.push({
                    icon: '📍',
                    context: t('spain'),
                    text: `${t('capital_q')} ${c.name}?`,
                    answer: c.capital,
                    options: shuffle([c.capital, ...wrong]),
                });
            });
        };

        const addRiverLenQ = (items, context, icon) => {
            shuffle(items).forEach(r => {
                const wrong = pickWrong(items, r.km, 'km', 3);
                if (wrong.length < 3) return;
                qs.push({
                    icon,
                    context,
                    text: `${t('km_q')} ${r.name}?`,
                    answer: String(r.km),
                    options: shuffle([String(r.km), ...wrong.map(String)]),
                });
            });
        };

        const addMountainHeightQ = (items, context) => {
            shuffle(items).forEach(m => {
                const wrong = pickWrong(items, m.height, 'height', 3);
                if (wrong.length < 3) return;
                qs.push({
                    icon: '⛰️',
                    context,
                    text: `${t('height_q')} ${m.name}?`,
                    answer: String(m.height),
                    options: shuffle([String(m.height), ...wrong.map(String)]),
                });
            });
        };

        // Level 1-2: easy world countries
        if (level >= 1) addCapitalQ(d.countries.filter(c => c.level <= 2));
        // Level 3: all world countries
        if (level >= 3) addCapitalQ(d.countries.filter(c => c.level === 3));
        // Level 4: world rivers & mountains
        if (level >= 4) {
            addRiverLenQ(d.world_rivers.filter(r => r.level <= 2), t('world'), '🌊');
            addMountainHeightQ(d.world_mountains.filter(m => m.level <= 2), t('world'));
        }
        // Level 5: comunidades
        if (level >= 5) addComunidadCapQ(d.comunidades);
        // Level 6: provincias
        if (level >= 6) addProvinciaCapQ(d.provincias);
        // Level 7: Spain rivers + mountains
        if (level >= 7) {
            addRiverLenQ(d.spain_rivers.filter(r => r.level <= 2), t('spain'), '🌊');
            addMountainHeightQ(d.spain_mountains.filter(m => m.level <= 2), t('spain'));
        }
        // Level 8: Euskadi territories + munis
        if (level >= 8) {
            shuffle(d.euskadi_territories).forEach(ter => {
                qs.push({
                    icon: '🏴',
                    context: t('euskadi'),
                    text: `${t('capital_q')} ${ter.name}?`,
                    answer: ter.capital,
                    options: shuffle([ter.capital, ...d.euskadi_territories.filter(x => x.capital !== ter.capital).map(x => x.capital), 'Iruñea']).slice(0, 4),
                });
            });
            shuffle(d.euskadi_munis).forEach(m => {
                const wrong = shuffle(d.euskadi_munis.filter(x => x.territory !== m.territory)).slice(0, 3).map(x => x.territory);
                if (wrong.length < 3) return;
                qs.push({
                    icon: '🏘️',
                    context: t('euskadi'),
                    text: `¿En qué territorio está ${m.name}?`,
                    answer: m.territory,
                    options: shuffle([m.territory, ...wrong]),
                });
            });
        }
        // Level 9: Euskadi rivers + mountains
        if (level >= 9) {
            addRiverLenQ(d.euskadi_rivers, t('euskadi'), '🌊');
            addMountainHeightQ(d.euskadi_mountains, t('euskadi'));
        }
        // Level 10: harder world questions
        if (level >= 10) {
            addRiverLenQ(d.world_rivers.filter(r => r.level >= 3), t('world'), '🌊');
            addMountainHeightQ(d.world_mountains.filter(m => m.level >= 3), t('world'));
            addProvinciaCapQ(d.provincias.filter(p => p.level >= 2));
        }

        return shuffle(qs).filter(q => q.options.length === 4).slice(0, 10);
    }

    // ── Quiz flow ──────────────────────────────────────────────────────────
    function startQuiz() {
        const qs = buildQuestions(state.quizLevel);
        if (qs.length < 3) {
            alert('No hay suficientes preguntas para este nivel todavía.');
            return;
        }
        state.quizQuestions = qs;
        state.quizIndex = 0;
        state.quizScore = 0;
        state.quizCorrect = 0;
        state.quizStart = Date.now();
        setScreen('quiz');
        showQuestion();
    }

    function showQuestion() {
        const q = state.quizQuestions[state.quizIndex];
        if (!q) { endQuiz(); return; }

        state.answered = false;
        state.timerLeft = state.timerSecs;

        // Topbar
        $('gq-q-index').textContent = `${t('question')} ${state.quizIndex + 1}/${state.quizQuestions.length}`;
        $('gq-q-score').textContent = `${state.quizScore} ${t('pts')}`;

        // Question card
        $('gq-q-icon').textContent = q.icon || '🌍';
        $('gq-q-context').textContent = q.context || '';
        $('gq-q-text').textContent = q.text;

        // Options
        $('gq-options').innerHTML = q.options.map((opt, i) =>
            `<button class="gq-option" onclick="GeoQuiz.selectOption(${i})" data-idx="${i}">${opt}</button>`
        ).join('');

        $('gq-feedback').textContent = '';
        $('gq-feedback').className = 'gq-feedback';

        startTimer();
    }

    function startTimer() {
        clearInterval(state.timerInterval);
        const bar = $('gq-timer-bar');
        if (!bar) return;
        state.timerLeft = state.timerSecs;
        bar.style.width = '100%';
        bar.className = 'gq-timer-bar';

        const wrap = $('gq-timer-wrap');
        if (wrap) {
            wrap.setAttribute('aria-valuemax', String(state.timerSecs));
            wrap.setAttribute('aria-valuenow', String(state.timerSecs));
        }

        state.timerInterval = setInterval(() => {
            state.timerLeft--;
            const pct = (state.timerLeft / state.timerSecs) * 100;
            bar.style.width = pct + '%';
            if (pct < 40) bar.className = 'gq-timer-bar warn';
            if (pct < 20) bar.className = 'gq-timer-bar danger';
            if (wrap) wrap.setAttribute('aria-valuenow', String(state.timerLeft));
            if (state.timerLeft <= 0) {
                clearInterval(state.timerInterval);
                if (!state.answered) timeOut();
            }
        }, 1000);
    }

    function timeOut() {
        state.answered = true;
        const q = state.quizQuestions[state.quizIndex];
        // Mark correct answer
        document.querySelectorAll('.gq-option').forEach(btn => {
            if (btn.textContent === q.answer) btn.classList.add('correct');
            btn.disabled = true;
        });
        const fb = $('gq-feedback');
        fb.textContent = `⏰ ${t('wrong')} — ${q.answer}`;
        fb.className = 'gq-feedback bad';
        setTimeout(nextQuestion, 1800);
    }

    function selectOption(idx) {
        if (state.answered) return;
        state.answered = true;
        clearInterval(state.timerInterval);

        const q = state.quizQuestions[state.quizIndex];
        const chosen = q.options[idx];
        const correct = chosen === q.answer;

        document.querySelectorAll('.gq-option').forEach((btn, i) => {
            btn.disabled = true;
            if (q.options[i] === q.answer) btn.classList.add('correct');
            else if (i === idx && !correct) btn.classList.add('wrong');
        });

        const fb = $('gq-feedback');
        if (correct) {
            const bonus = Math.ceil(state.timerLeft / state.timerSecs * 100) + state.quizLevel * 10;
            state.quizScore += bonus;
            state.quizCorrect++;
            fb.textContent = `${t('correct')} +${bonus} ${t('pts')}`;
            fb.className = 'gq-feedback good';
        } else {
            fb.textContent = `${t('wrong')} — ${q.answer}`;
            fb.className = 'gq-feedback bad';
        }
        $('gq-q-score').textContent = `${state.quizScore} ${t('pts')}`;
        setTimeout(nextQuestion, 1500);
    }

    function nextQuestion() {
        state.quizIndex++;
        if (state.quizIndex < state.quizQuestions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        clearInterval(state.timerInterval);
        const elapsed = Math.round((Date.now() - state.quizStart) / 1000);
        const total = state.quizQuestions.length;
        const pct = state.quizCorrect / total;
        const stars = pct >= 1 ? 3 : pct >= 0.7 ? 2 : pct >= 0.4 ? 1 : 0;
        const starStr = ['⭐', '⭐', '⭐⭐', '⭐⭐⭐'][stars] || '';
        const starsText = [t('stars0'), t('stars1'), t('stars2'), t('stars3')][stars];

        $('gq-result-title').textContent = t('results');
        $('gq-result-stars').textContent = starStr;
        $('gq-result-stars-text').textContent = starsText;
        $('gq-result-pts').textContent = state.quizScore;
        $('gq-result-correct').textContent = `${state.quizCorrect}/${total}`;
        $('gq-result-time').textContent = elapsed + 's';

        setScreen('results');

        // Save to platform if logged in
        try {
            const uid = (window.appState && appState.currentUser) ? appState.currentUser.uid : null;
            if (uid && window.PlatformFirestore) {
                PlatformFirestore.updateGameStats(uid, 'geoQuiz', {
                    points: state.quizScore,
                    correct: state.quizCorrect,
                    total,
                    elapsed,
                    level: state.quizLevel,
                    stars,
                });
            }
            if (window.PlatformAchievements) {
                PlatformAchievements.checkGameAchievements('geoQuiz', {
                    stars, score: state.quizScore, level: state.quizLevel,
                    correct: state.quizCorrect, total,
                }, {}, {});
            }
        } catch (e) { /* guest mode */ }
    }

    // ── Lang ───────────────────────────────────────────────────────────────
    function setLang(lang) {
        state.lang = lang;
        document.documentElement.lang = (lang || 'es').split('-')[0];
        document.querySelectorAll('.gq-lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        renderHome();
    }

    // ── Home ───────────────────────────────────────────────────────────────
    function renderHome() {
        setScreen('home');
        $('gq-app-name').textContent = t('appName');
        $('gq-subtitle').textContent = t('subtitle');
        $('gq-atlas-label').textContent = t('atlasMode');
        $('gq-atlas-desc').textContent = t('atlasDesc');
        $('gq-quiz-label').textContent = t('quizMode');
        $('gq-quiz-desc').textContent = t('quizDesc');
    }

    // ── Quiz setup ─────────────────────────────────────────────────────────
    function renderQuizSetup() {
        setScreen('quiz-setup');
        $('gqs-title').textContent = t('quizMode');
        $('gqs-levels-grid').innerHTML = Array.from({ length: 10 }, (_, i) => {
            const n = i + 1;
            return `<button class="gq-level-btn${state.quizLevel === n ? ' active' : ''}" onclick="GeoQuiz.selectLevel(${n})">${t('level')} ${n}</button>`;
        }).join('');
        $('gqs-desc').textContent = t('lvl_desc')[state.quizLevel] || '';
        $('gqs-start').textContent = t('start');
        $('gqs-back').textContent = t('back');
    }

    // ── Quit confirmation ────────────────────────────────────────────────
    function _showQuitConfirm(onConfirm) {
        const modal = $('gq-quit-modal');
        if (!modal) { onConfirm(); return; }
        // Update text for current language
        const titles = { es: '¿Salir del quiz?', en: 'Quit the quiz?', eu: 'Quizetik irten?' };
        const msgs = { es: 'Se perderá el progreso actual.', en: 'Current progress will be lost.', eu: 'Uneko aurrerapen guztia galduko da.' };
        const cancelTxt = { es: 'Cancelar', en: 'Cancel', eu: 'Utzi' };
        const okTxt = { es: 'Salir', en: 'Quit', eu: 'Irten' };
        $('gq-quit-title').textContent = titles[state.lang] || titles.es;
        $('gq-quit-msg').textContent = msgs[state.lang] || msgs.es;
        $('gq-quit-cancel').textContent = cancelTxt[state.lang] || cancelTxt.es;
        $('gq-quit-ok').textContent = okTxt[state.lang] || okTxt.es;
        modal.classList.remove('hidden');
        modal.focus();
        state._quitConfirm = onConfirm;
    }

    function _hideQuitConfirm() {
        const modal = $('gq-quit-modal');
        if (modal) modal.classList.add('hidden');
        state._quitConfirm = null;
    }

    function _initQuitModal() {
        const cancel = $('gq-quit-cancel');
        const ok = $('gq-quit-ok');
        if (cancel) cancel.addEventListener('click', () => _hideQuitConfirm());
        if (ok) ok.addEventListener('click', () => {
            const fn = state._quitConfirm;
            _hideQuitConfirm();
            if (fn) fn();
        });
    }

    // ── Public API ─────────────────────────────────────────────────────────
    return {
        init() {
            state.lang = platformLang();
            document.documentElement.lang = (state.lang || 'es').split('-')[0];
            renderHome();
            _initQuitModal();
            // Sync language with platform header
            document.addEventListener('platformLanguageChanged', () => {
                state.lang = platformLang();
                document.documentElement.lang = (state.lang || 'es').split('-')[0];
                // Re-render current screen
                if (state.screen === 'home') renderHome();
                else if (state.screen === 'atlas') { renderAtlasTopTabs(); renderAtlasSubTabs(); renderAtlasCards(); }
                else if (state.screen === 'quiz-setup') renderQuizSetup();
            });
        },
        setLang,
        goAtlas() {
            state.atlasTab = 'world';
            state.atlasSubTab = 'countries';
            state.searchQuery = '';
            renderAtlas();
        },
        goQuizSetup() {
            renderQuizSetup();
        },
        setAtlasTab(tab) {
            state.atlasTab = tab;
            const defaults = { world: 'countries', spain: 'comunidades', euskadi: 'territories' };
            state.atlasSubTab = defaults[tab] || 'countries';
            renderAtlasTopTabs();
            renderAtlasSubTabs();
            renderAtlasCards();
        },
        setAtlasSubTab(sub) {
            state.atlasSubTab = sub;
            renderAtlasSubTabs();
            renderAtlasCards();
        },
        onSearch(val) {
            state.searchQuery = val;
            renderAtlasCards();
        },
        selectLevel(n) {
            state.quizLevel = n;
            renderQuizSetup();
        },
        startQuiz,
        selectOption,
        goHome() {
            if (state.screen === 'quiz' && !state.answered) {
                _showQuitConfirm(() => { clearInterval(state.timerInterval); renderHome(); });
                return;
            }
            clearInterval(state.timerInterval);
            renderHome();
        },
        playAgain() { renderQuizSetup(); },
    };
})();

window.addEventListener('DOMContentLoaded', () => GeoQuiz.init());
