/**
 * englishVerbs-EFC/game.js
 * EnglishVerbsGame — Irregular Verbs exercises
 * Level types: matching (L1) | fill-blank (L2) | audio-quiz (L3)
 * Also supports: group-practice (MCQ from ENGLISH_GROUP_EXERCISES)
 */
const EnglishVerbsGame = (() => {

    // ── State ──────────────────────────────────────────────────────────
    const state = {
        level: 1,
        score: 0,
        correct: 0,
        totalAnswered: 0,
        streak: 0,
        bestStreak: 0,
        startTime: 0,
        answered: false,
        // Level 1 - Matching
        roundIndex: 0,
        matchLeft: null,
        matchedPairs: 0,
        totalRoundPairs: 5,
        // Level 2 - Fill-blank
        exerciseIndex: 0,
        // Level 3 - Audio quiz
        storyIndex: 0,
        questionIndex: 0,
        // Group practice
        groupPracticeMode: false,
        groupPracticeGroup: null,
        groupPracticeExercises: [],
        groupPracticeIndex: 0,
    };

    const $ = id => document.getElementById(id);
    const show = el => { if (el) el.classList.remove('hidden'); };
    const hide = el => { if (el) el.classList.add('hidden'); };

    // ── Screen management ──────────────────────────────────────────────
    function showScreen(name) {
        document.querySelectorAll('.ev-screen').forEach(s => s.classList.remove('active'));
        const el = $('ev-screen-' + name);
        if (el) {
            el.classList.add('active');
            if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
            el.focus({ preventScroll: true });
        }
    }

    // ── Tab switching ──────────────────────────────────────────────────
    function showTab(tabName) {
        document.querySelectorAll('.ev-tab-content').forEach(tc => tc.classList.remove('active'));
        document.querySelectorAll('.ev-tab-btn').forEach(tb => tb.classList.remove('active'));
        const content = $('ev-tab-' + tabName);
        if (content) content.classList.add('active');
        const btn = $('ev-tabBtn-' + tabName);
        if (btn) btn.classList.add('active');
    }

    // ── TTS ───────────────────────────────────────────────────────────
    function speak(text) {
        if (!window.speechSynthesis) return null;
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith('en-GB')) ||
                        voices.find(v => v.lang.startsWith('en'));
        utt.voice = enVoice || null;
        utt.lang = 'en-GB';
        utt.rate = 0.9;
        window.speechSynthesis.speak(utt);
        return utt;
    }

    function speakVerb(audioText) {
        speak(audioText);
    }

    // ── Search verbs ───────────────────────────────────────────────────
    function searchVerbs(query) {
        const q = query.toLowerCase().trim();
        const rows = document.querySelectorAll('#ev-verb-table-container tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = (!q || text.includes(q)) ? '' : 'none';
        });
    }

    // ── Toggle group verb list ─────────────────────────────────────────
    function toggleGroupVerbs(group) {
        const listEl = $('ev-group-verbs-' + group.replace(/-/g, ''));
        const btnEl  = $('ev-group-verbs-btn-' + group.replace(/-/g, ''));
        if (!listEl) return;
        const isHidden = listEl.hidden;
        listEl.hidden = !isHidden;
        if (btnEl) btnEl.textContent = isHidden ? 'Ocultar verbos' : 'Ver verbos';
    }

    // ── Home ───────────────────────────────────────────────────────────
    function renderHome() {
        renderVerbTable();
        renderGroupCards();
        renderLevelGrid();
        showScreen('home');
        showTab('tabla');
    }

    function renderVerbTable() {
        const el = $('ev-verb-table-container');
        if (!el) return;
        const groupColors = {
            'A-A-A': '#22c55e',
            'A-B-A': '#3b82f6',
            'A-B-B': '#f59e0b',
            'A-B-C': '#ef4444'
        };
        const rows = IRREGULAR_VERBS.map(v => `
            <tr>
                <td><strong>${v.infinitive}</strong></td>
                <td>${v.past_simple}</td>
                <td>${v.past_participle}</td>
                <td>${v.meaning_es}</td>
                <td><span class="ev-group-badge" style="background:${groupColors[v.group]}20;color:${groupColors[v.group]};border:1px solid ${groupColors[v.group]}">${v.group}</span></td>
                <td><button class="ev-tts-row-btn" onclick="EnglishVerbsGame.speakVerb('${v.audio_text.replace(/'/g, "\\'")}')" title="Listen" aria-label="Listen to ${v.infinitive}">🔊</button></td>
            </tr>`).join('');

        el.innerHTML = `
            <div class="ev-group-legend">
                ${Object.entries(groupColors).map(([g, c]) => `<span class="ev-group-badge" style="background:${c}20;color:${c};border:1px solid ${c}">${g}: ${ENGLISH_MODULE.groups[g]?.label || g}</span>`).join('')}
            </div>
            <div class="ev-table-scroll">
                <table class="ev-verb-table">
                    <thead>
                        <tr>
                            <th>Infinitive</th>
                            <th>Past Simple</th>
                            <th>Past Participle</th>
                            <th>Meaning</th>
                            <th>Group</th>
                            <th aria-label="Listen"></th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>`;
    }

    function renderGroupCards() {
        const el = $('ev-group-cards-container');
        if (!el) return;

        const cards = Object.entries(GROUP_INFO).map(([group, info]) => {
            const verbsInGroup = IRREGULAR_VERBS.filter(v => v.group === group);
            const count = verbsInGroup.length;
            const groupId = group.replace(/-/g, '');

            const verbListRows = verbsInGroup.map(v =>
                `<tr>
                    <td><strong>${v.infinitive}</strong></td>
                    <td>${v.past_simple}</td>
                    <td>${v.past_participle}</td>
                    <td>${v.meaning_es}</td>
                    <td><button class="ev-tts-row-btn" onclick="EnglishVerbsGame.speakVerb('${v.audio_text.replace(/'/g, "\\'")}')" title="Listen" aria-label="Listen to ${v.infinitive}">🔊</button></td>
                </tr>`
            ).join('');

            return `
            <div class="ev-group-card" style="--group-color:${info.color}">
                <div class="ev-group-card-header">
                    <span class="ev-group-badge" style="background:${info.color}20;color:${info.color};border:1px solid ${info.color}">${group}</span>
                    <span class="ev-group-count">${count} verbos</span>
                </div>
                <div class="ev-group-card-label">${info.label}</div>
                <div class="ev-group-card-desc">${info.desc}</div>
                <div class="ev-group-card-example"><code>${info.example}</code></div>
                <div class="ev-group-card-actions">
                    <button class="ev-btn ev-btn-secondary ev-btn-sm"
                        id="ev-group-verbs-btn-${groupId}"
                        onclick="EnglishVerbsGame.toggleGroupVerbs('${group}')">Ver verbos</button>
                    <button class="ev-btn ev-btn-primary ev-btn-sm"
                        onclick="EnglishVerbsGame.startGroupPractice('${group}')">Practicar</button>
                </div>
                <div class="ev-group-verb-list" id="ev-group-verbs-${groupId}" hidden>
                    <div class="ev-table-scroll">
                        <table class="ev-verb-table">
                            <thead>
                                <tr>
                                    <th>Infinitive</th>
                                    <th>Past Simple</th>
                                    <th>Past Participle</th>
                                    <th>Meaning</th>
                                    <th aria-label="Listen"></th>
                                </tr>
                            </thead>
                            <tbody>${verbListRows}</tbody>
                        </table>
                    </div>
                </div>
            </div>`;
        }).join('');

        el.innerHTML = `<div class="ev-group-cards">${cards}</div>`;
    }

    function getLevelProgress() {
        try { return JSON.parse(localStorage.getItem('ev_irr_progress') || '{}'); } catch { return {}; }
    }

    function saveLevelProgress(levelId, stars) {
        const p = getLevelProgress();
        if ((p[levelId]?.stars || 0) < stars) p[levelId] = { stars };
        localStorage.setItem('ev_irr_progress', JSON.stringify(p));
    }

    function renderLevelGrid() {
        const el = $('ev-level-grid');
        if (!el) return;
        const progress = getLevelProgress();
        const typeLabels = {
            matching:    'Matching',
            'fill-blank': 'Fill in the blanks',
            'audio-quiz': 'Audio Story Quiz'
        };
        const typeIcons = {
            matching:    '🔗',
            'fill-blank': '✍️',
            'audio-quiz': '🎧'
        };

        el.innerHTML = ENGLISH_LEVELS.map((lvl, i) => {
            const isUnlocked = i === 0 || progress[i]?.stars >= 1;
            const stars = progress[lvl.id]?.stars || 0;
            const starsHtml = [1, 2, 3].map(n =>
                `<span style="opacity:${stars >= n ? 1 : 0.25}">⭐</span>`
            ).join('');
            return `<div role="listitem">
                <button class="ev-level-btn${isUnlocked ? ' unlocked' : ''}"
                    ${isUnlocked
                        ? `onclick="EnglishVerbsGame.startLevel(${lvl.id})"`
                        : 'disabled aria-disabled="true"'}
                    aria-label="Level ${lvl.id}: ${typeLabels[lvl.type]}${!isUnlocked ? '. Locked' : ''}">
                    <div class="ev-level-icon">${typeIcons[lvl.type]}</div>
                    <div class="ev-level-num">${lvl.id}</div>
                    <div class="ev-level-type">${typeLabels[lvl.type]}</div>
                    <div class="ev-level-stars">${isUnlocked ? starsHtml : '🔒'}</div>
                </button>
            </div>`;
        }).join('');
    }

    // ── Game start ─────────────────────────────────────────────────────
    function startLevel(levelId) {
        const lvl = ENGLISH_LEVELS.find(l => l.id === levelId);
        if (!lvl) return;
        state.groupPracticeMode = false;
        state.groupPracticeGroup = null;
        state.level = levelId;
        state.score = 0;
        state.correct = 0;
        state.totalAnswered = 0;
        state.streak = 0;
        state.bestStreak = 0;
        state.startTime = Date.now();
        state.answered = false;
        state.roundIndex = 0;
        state.matchLeft = null;
        state.matchedPairs = 0;
        state.exerciseIndex = 0;
        state.storyIndex = 0;
        state.questionIndex = 0;

        const typeBadges = {
            matching:    'Level 1 — Matching',
            'fill-blank': 'Level 2 — Fill in the blanks',
            'audio-quiz': 'Level 3 — Audio Story Quiz'
        };
        $('ev-level-badge').textContent = typeBadges[lvl.type] || `Level ${levelId}`;

        updateHUD();
        renderQuestion();
        showScreen('game');
    }

    // ── Group practice start ───────────────────────────────────────────
    function startGroupPractice(group) {
        const exercises = ENGLISH_GROUP_EXERCISES[group];
        if (!exercises || exercises.length === 0) return;

        state.groupPracticeMode = true;
        state.groupPracticeGroup = group;
        state.groupPracticeExercises = exercises;
        state.groupPracticeIndex = 0;
        state.score = 0;
        state.correct = 0;
        state.totalAnswered = 0;
        state.streak = 0;
        state.bestStreak = 0;
        state.startTime = Date.now();
        state.answered = false;
        state.level = 0; // special marker for group practice

        const info = GROUP_INFO[group];
        $('ev-level-badge').textContent = `Group Practice — ${group}: ${info ? info.label : group}`;

        updateHUD();
        renderGroupPracticeQuestion();
        showScreen('game');
    }

    function renderGroupPracticeQuestion() {
        const ex = state.groupPracticeExercises[state.groupPracticeIndex];
        if (!ex) { showResults(); return; }

        state.answered = false;
        $('ev-feedback').style.display = 'none';
        hide($('ev-next-btn'));

        const total = state.groupPracticeExercises.length;
        const current = state.groupPracticeIndex;
        $('ev-progress-val').textContent = `${current + 1}/${total}`;
        const pct = Math.round((current / total) * 100);
        $('ev-progress-fill').style.width = pct + '%';
        $('ev-progress-bar-wrap').setAttribute('aria-valuenow', pct);
        $('ev-score-val').textContent = state.score;
        $('ev-streak-val').textContent = state.streak;

        const optionsHtml = ex.options.map(opt =>
            `<button class="ev-option-btn" onclick="EnglishVerbsGame.handleGroupPracticeQ('${encodeURIComponent(opt)}')">${opt}</button>`
        ).join('');

        $('ev-question-area').innerHTML = `
            <div class="ev-question-card">
                <p class="ev-question-counter">Question ${current + 1} / ${total}</p>
                <p class="ev-question-text">${ex.sentence}</p>
            </div>
            <div class="ev-options">${optionsHtml}</div>`;
    }

    function handleGroupPracticeQ(encodedOpt) {
        if (state.answered) return;
        state.answered = true;

        const opt = decodeURIComponent(encodedOpt);
        const ex = state.groupPracticeExercises[state.groupPracticeIndex];
        const isCorrect = opt === ex.answer;

        state.totalAnswered++;
        if (isCorrect) {
            state.correct++;
            state.streak++;
            if (state.streak > state.bestStreak) state.bestStreak = state.streak;
            state.score += 10;
        } else {
            state.streak = 0;
        }

        document.querySelectorAll('.ev-option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === ex.answer) btn.classList.add('correct');
            if (btn.textContent === opt && !isCorrect) btn.classList.add('wrong');
        });

        showFeedback(isCorrect, ex.explanation);
        show($('ev-next-btn'));

        $('ev-score-val').textContent = state.score;
        $('ev-streak-val').textContent = state.streak;
    }

    // ── HUD ────────────────────────────────────────────────────────────
    function updateHUD() {
        if (state.groupPracticeMode) return; // handled separately in renderGroupPracticeQuestion

        const lvl = ENGLISH_LEVELS.find(l => l.id === state.level);
        if (!lvl) return;
        $('ev-score-val').textContent = state.score;
        $('ev-streak-val').textContent = state.streak;

        let total = 0, current = 0;
        if (lvl.type === 'matching') {
            total = lvl.rounds.length * 5;
            current = state.roundIndex * 5 + state.matchedPairs;
        } else if (lvl.type === 'fill-blank') {
            total = lvl.exercises.length;
            current = state.exerciseIndex;
        } else if (lvl.type === 'audio-quiz') {
            total = lvl.stories.reduce((s, st) => s + st.questions.length, 0);
            current = state.totalAnswered;
        }

        $('ev-progress-val').textContent = `${Math.min(current + 1, total)}/${total}`;
        const pct = total > 0 ? Math.round((current / total) * 100) : 0;
        $('ev-progress-fill').style.width = pct + '%';
        $('ev-progress-bar-wrap').setAttribute('aria-valuenow', pct);
    }

    // ── Question rendering dispatch ─────────────────────────────────────
    function renderQuestion() {
        if (state.groupPracticeMode) {
            renderGroupPracticeQuestion();
            return;
        }
        const lvl = ENGLISH_LEVELS.find(l => l.id === state.level);
        if (!lvl) return;
        state.answered = false;
        $('ev-feedback').style.display = 'none';
        hide($('ev-next-btn'));

        if (lvl.type === 'matching')         renderMatching(lvl);
        else if (lvl.type === 'fill-blank')  renderFillBlank(lvl);
        else if (lvl.type === 'audio-quiz')  renderAudioQuiz(lvl);

        updateHUD();
    }

    // ── Level 1: Matching ──────────────────────────────────────────────
    function renderMatching(lvl) {
        const round = lvl.rounds[state.roundIndex];
        if (!round) { showResults(); return; }

        const rightShuffled = [...round.right].sort(() => Math.random() - 0.5);

        const leftHtml = round.left.map(w =>
            `<button class="ev-match-item" id="ev-left-${w}" onclick="EnglishVerbsGame.selectLeft('${w}')">${w}</button>`
        ).join('');
        const rightHtml = rightShuffled.map(w =>
            `<button class="ev-match-item" id="ev-right-${w}" onclick="EnglishVerbsGame.selectRight('${w}')">${w}</button>`
        ).join('');

        $('ev-question-area').innerHTML = `
            <div class="ev-match-round">
                Round ${state.roundIndex + 1} / ${lvl.rounds.length}
                <span class="ev-match-hint">Connect infinitive → past simple</span>
            </div>
            <div class="ev-matching-area">
                <div class="ev-match-col ev-match-col-left">${leftHtml}</div>
                <div class="ev-match-col ev-match-col-right">${rightHtml}</div>
            </div>`;

        state.matchLeft = null;
        state.matchedPairs = 0;
    }

    function selectLeft(word) {
        document.querySelectorAll('.ev-match-item.selected').forEach(b => b.classList.remove('selected'));
        state.matchLeft = word;
        const btn = $('ev-left-' + word);
        if (btn) btn.classList.add('selected');
    }

    function selectRight(rightWord) {
        if (!state.matchLeft) return;
        const lvl = ENGLISH_LEVELS.find(l => l.id === state.level);
        const round = lvl.rounds[state.roundIndex];
        const expected = round.answers[state.matchLeft];
        const isCorrect = rightWord === expected;

        const leftBtn  = $('ev-left-'  + state.matchLeft);
        const rightBtn = $('ev-right-' + rightWord);

        if (isCorrect) {
            state.score += 10;
            state.correct++;
            state.streak++;
            if (state.streak > state.bestStreak) state.bestStreak = state.streak;
            state.totalAnswered++;
            state.matchedPairs++;

            if (leftBtn) {
                leftBtn.classList.add('matched');
                leftBtn.disabled = true;
                leftBtn.classList.remove('selected');
            }
            if (rightBtn) {
                rightBtn.classList.add('matched');
                rightBtn.disabled = true;
            }
            state.matchLeft = null;

            if (state.matchedPairs >= round.left.length) {
                setTimeout(() => {
                    state.roundIndex++;
                    if (state.roundIndex >= lvl.rounds.length) {
                        showResults();
                    } else {
                        renderQuestion();
                    }
                }, 600);
            }
        } else {
            state.streak = 0;
            state.score = Math.max(0, state.score - 2);
            state.totalAnswered++;

            if (leftBtn) {
                leftBtn.classList.add('wrong-shake');
                setTimeout(() => leftBtn.classList.remove('wrong-shake'), 600);
                leftBtn.classList.remove('selected');
            }
            if (rightBtn) {
                rightBtn.classList.add('wrong-shake');
                setTimeout(() => rightBtn.classList.remove('wrong-shake'), 600);
            }
            state.matchLeft = null;
        }
        updateHUD();
    }

    // ── Level 2: Fill-blank ────────────────────────────────────────────
    function renderFillBlank(lvl) {
        const ex = lvl.exercises[state.exerciseIndex];
        if (!ex) { showResults(); return; }

        $('ev-question-area').innerHTML = `
            <div class="ev-question-card">
                <p class="ev-question-label">Fill in the correct form — <em>${ex.tense}</em></p>
                <div class="ev-fill-sentence">
                    <span>${ex.before} </span>
                    <input class="ev-fill-input" id="ev-fill-input" type="text"
                        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                        placeholder="___" aria-label="Write the verb form">
                    <span> ${ex.after}</span>
                </div>
                <p class="ev-translation">${ex.translation}</p>
            </div>
            <button class="ev-btn ev-btn-primary" id="ev-submit-btn" onclick="EnglishVerbsGame.handleFillBlank()">Check</button>`;

        const inp = $('ev-fill-input');
        if (inp) {
            inp.focus();
            inp.addEventListener('keydown', e => {
                if (e.key === 'Enter') handleFillBlank();
            });
        }
    }

    function handleFillBlank() {
        if (state.answered) return;
        const inp = $('ev-fill-input');
        if (!inp) return;
        const given = inp.value.trim().toLowerCase();
        const lvl = ENGLISH_LEVELS.find(l => l.id === state.level);
        const ex = lvl.exercises[state.exerciseIndex];
        const isCorrect = given === ex.answer.toLowerCase();

        state.answered = true;
        state.totalAnswered++;

        if (isCorrect) {
            state.correct++;
            state.streak++;
            if (state.streak > state.bestStreak) state.bestStreak = state.streak;
            state.score += lvl.scoring.correctPoints ?? 15;
        } else {
            state.streak = 0;
        }

        inp.classList.add(isCorrect ? 'correct' : 'wrong');
        inp.disabled = true;

        const submitBtn = $('ev-submit-btn');
        if (submitBtn) submitBtn.disabled = true;

        if (!isCorrect) inp.value = ex.answer;

        showFeedback(isCorrect, ex.explanation);
        show($('ev-next-btn'));
        updateHUD();
    }

    // ── Level 3: Audio Quiz ────────────────────────────────────────────
    function renderAudioQuiz(lvl) {
        const story = lvl.stories[state.storyIndex];
        if (!story) { showResults(); return; }
        const q = story.questions[state.questionIndex];
        if (!q) {
            state.storyIndex++;
            state.questionIndex = 0;
            renderAudioQuiz(lvl);
            return;
        }

        const isFirstQ = state.questionIndex === 0;
        const optionsHtml = q.options.map(opt =>
            `<button class="ev-option-btn" onclick="EnglishVerbsGame.handleAudioQ('${encodeURIComponent(opt)}')">${opt}</button>`
        ).join('');

        $('ev-question-area').innerHTML = `
            ${isFirstQ ? `
            <div class="ev-story-card">
                <div class="ev-story-header">
                    <h3>${story.title}</h3>
                    <button class="ev-tts-btn" id="ev-tts-story-btn" onclick="EnglishVerbsGame.listenStory()">
                        🎧 Listen
                    </button>
                </div>
                <p id="ev-story-text">${story.audio_text}</p>
            </div>` : ''}
            <div class="ev-question-card">
                <p class="ev-question-counter">Question ${state.questionIndex + 1} / ${story.questions.length}</p>
                <p class="ev-question-text">${q.question}</p>
            </div>
            <div class="ev-options">${optionsHtml}</div>`;
    }

    function listenStory() {
        const lvl = ENGLISH_LEVELS.find(l => l.id === state.level);
        const story = lvl?.stories[state.storyIndex];
        if (!story) return;

        const btn = $('ev-tts-story-btn');
        if (btn) { btn.classList.add('speaking'); btn.textContent = '⏹ Stop'; }

        const utt = speak(story.audio_text);
        if (utt) {
            utt.onend = () => {
                if (btn) { btn.classList.remove('speaking'); btn.textContent = '🎧 Listen'; }
            };
        }
    }

    function handleAudioQ(encodedOpt) {
        if (state.answered) return;
        state.answered = true;

        const opt = decodeURIComponent(encodedOpt);
        const lvl = ENGLISH_LEVELS.find(l => l.id === state.level);
        const story = lvl.stories[state.storyIndex];
        const q = story.questions[state.questionIndex];
        const isCorrect = opt === q.answer;

        state.totalAnswered++;
        if (isCorrect) {
            state.correct++;
            state.streak++;
            if (state.streak > state.bestStreak) state.bestStreak = state.streak;
            state.score += lvl.scoring.correctPoints ?? 20;
        } else {
            state.streak = 0;
            state.score = Math.max(0, state.score + (lvl.scoring.incorrectPoints ?? -5));
        }

        document.querySelectorAll('.ev-option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === q.answer) btn.classList.add('correct');
            if (btn.textContent === opt && !isCorrect) btn.classList.add('wrong');
        });

        showFeedback(isCorrect, q.explanation);
        show($('ev-next-btn'));
        updateHUD();
    }

    // ── Feedback ───────────────────────────────────────────────────────
    function showFeedback(isCorrect, explanation) {
        const el = $('ev-feedback');
        if (!el) return;
        el.className = 'ev-feedback ' + (isCorrect ? 'correct' : 'wrong');
        el.textContent = isCorrect
            ? `\u2713 Correct! ${explanation}`
            : `\u2717 Wrong. ${explanation}`;
        el.style.display = 'block';
    }

    // ── Next question ──────────────────────────────────────────────────
    function nextQuestion() {
        if (state.groupPracticeMode) {
            state.groupPracticeIndex++;
            if (state.groupPracticeIndex >= state.groupPracticeExercises.length) {
                showResults();
            } else {
                renderGroupPracticeQuestion();
            }
            return;
        }

        const lvl = ENGLISH_LEVELS.find(l => l.id === state.level);
        if (!lvl) return;

        if (lvl.type === 'fill-blank') {
            state.exerciseIndex++;
            if (state.exerciseIndex >= lvl.exercises.length) { showResults(); return; }
        } else if (lvl.type === 'audio-quiz') {
            const story = lvl.stories[state.storyIndex];
            if (!story) { showResults(); return; }
            state.questionIndex++;
            if (state.questionIndex >= story.questions.length) {
                state.storyIndex++;
                state.questionIndex = 0;
                if (state.storyIndex >= lvl.stories.length) { showResults(); return; }
            }
        }
        renderQuestion();
    }

    // ── Results ────────────────────────────────────────────────────────
    function showResults() {
        const elapsed = Math.round((Date.now() - state.startTime) / 1000);
        const total = state.totalAnswered;
        const pct = total > 0 ? (state.correct / total) * 100 : 0;

        let passingScore = 60;
        if (!state.groupPracticeMode) {
            const lvl = ENGLISH_LEVELS.find(l => l.id === state.level);
            passingScore = lvl?.passingScore ?? 60;
        }
        const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= passingScore ? 1 : 0;

        $('ev-result-score').textContent = state.score;
        $('ev-result-correct').textContent = `${state.correct}/${total}`;
        $('ev-result-time').textContent = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`;
        $('ev-result-level').textContent = state.groupPracticeMode
            ? (state.groupPracticeGroup || 'Group')
            : state.level;
        $('ev-result-stars').innerHTML = [1, 2, 3].map(n =>
            `<span style="opacity:${stars >= n ? 1 : 0.25}">⭐</span>`
        ).join('');

        const nextLvlBtn = $('ev-next-level-btn');
        if (state.groupPracticeMode || state.level >= ENGLISH_LEVELS.length) {
            hide(nextLvlBtn);
        } else {
            show(nextLvlBtn);
        }

        if (!state.groupPracticeMode) {
            saveLevelProgress(state.level, stars);
        }

        if (typeof PlatformFirestore !== 'undefined' &&
            typeof appState !== 'undefined' &&
            appState.currentUser) {
            PlatformFirestore.updateGameStats(appState.currentUser.uid, 'english-irregular-verbs', {
                correctAnswers: state.correct,
                totalQuestions: total,
                totalAttempts: total,
                bestStreak: state.bestStreak,
                elapsedSeconds: elapsed,
                level: state.groupPracticeMode ? 0 : state.level
            }).catch(() => {});
        }

        showScreen('results');
    }

    // ── Quit modal ─────────────────────────────────────────────────────
    function showQuitModal() {
        const modal = $('ev-quit-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        modal.focus();
    }

    function hideQuitModal() {
        $('ev-quit-modal')?.classList.add('hidden');
    }

    // ── Init ───────────────────────────────────────────────────────────
    function init() {
        renderHome();

        $('ev-table-toggle')?.addEventListener('click', () => {
            const body   = $('ev-table-body');
            const toggle = $('ev-table-toggle');
            const isOpen = !body.hidden;
            body.hidden  = isOpen;
            toggle.setAttribute('aria-expanded', String(!isOpen));
            toggle.querySelector('.ev-toggle-icon').textContent = isOpen ? '▼' : '▲';
        });

        // Tab buttons
        ['tabla', 'grupos', 'niveles'].forEach(tab => {
            $('ev-tabBtn-' + tab)?.addEventListener('click', () => showTab(tab));
        });

        // Verb search
        $('ev-verb-search')?.addEventListener('input', e => searchVerbs(e.target.value));

        $('ev-next-btn')?.addEventListener('click', nextQuestion);
        $('ev-quit-btn')?.addEventListener('click', showQuitModal);
        $('ev-quit-cancel')?.addEventListener('click', hideQuitModal);
        $('ev-quit-ok')?.addEventListener('click', () => { hideQuitModal(); renderHome(); });
        $('ev-retry-btn')?.addEventListener('click', () => {
            if (state.groupPracticeMode) {
                startGroupPractice(state.groupPracticeGroup);
            } else {
                startLevel(state.level);
            }
        });
        $('ev-next-level-btn')?.addEventListener('click', () => {
            const next = state.level + 1;
            if (next <= ENGLISH_LEVELS.length) startLevel(next);
        });
        $('ev-menu-btn')?.addEventListener('click', renderHome);

        // Close modal on Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                const modal = $('ev-quit-modal');
                if (modal && !modal.classList.contains('hidden')) hideQuitModal();
            }
        });
    }

    return {
        init,
        startLevel,
        startGroupPractice,
        selectLeft,
        selectRight,
        handleFillBlank,
        handleAudioQ,
        handleGroupPracticeQ,
        listenStory,
        speakVerb,
        searchVerbs,
        showTab,
        toggleGroupVerbs
    };
})();
