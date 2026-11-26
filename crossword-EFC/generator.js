/**
 * Crossword - Grid Generator
 * Pure functions for building a crossword puzzle.
 * No dependencies on DOM or game state.
 */

/**
 * Returns true if the word can be placed at (r0, c0) in direction dir.
 * Rules:
 *  - All cells must be within the grid
 *  - Cell before start must be null or out-of-bounds
 *  - Cell after end must be null or out-of-bounds
 *  - Existing cells must match word[i] (valid intersection)
 *  - New cells: perpendicular neighbors must be null
 */
function cwCanPlace(grid, r0, c0, dir, word, N) {
    const dr = dir === 'DOWN' ? 1 : 0;
    const dc = dir === 'ACROSS' ? 1 : 0;
    const len = word.length;

    // Perpendicular direction
    const perpDr = dc; // ACROSS (dc=1, dr=0) => perpDr=1 (check up/down)
    const perpDc = dr; // ACROSS => perpDc=0

    // Check cell before word start
    const prevR = r0 - dr, prevC = c0 - dc;
    if (prevR >= 0 && prevC >= 0 && prevR < N && prevC < N && grid[prevR][prevC] !== null) return false;

    // Check cell after word end
    const nextR = r0 + dr * len, nextC = c0 + dc * len;
    if (nextR >= 0 && nextC >= 0 && nextR < N && nextC < N && grid[nextR][nextC] !== null) return false;

    for (let i = 0; i < len; i++) {
        const r = r0 + dr * i;
        const c = c0 + dc * i;

        // Out of bounds
        if (r < 0 || r >= N || c < 0 || c >= N) return false;

        const cell = grid[r][c];
        if (cell !== null) {
            // Intersection: letter must match
            if (cell !== word[i]) return false;
        } else {
            // New cell: perpendicular neighbors must be null
            // (unless this is exactly an intersection point — already handled above)
            const pr1 = r - perpDr, pc1 = c - perpDc;
            const pr2 = r + perpDr, pc2 = c + perpDc;
            if (pr1 >= 0 && pc1 >= 0 && pr1 < N && pc1 < N && grid[pr1][pc1] !== null) return false;
            if (pr2 >= 0 && pc2 >= 0 && pr2 < N && pc2 < N && grid[pr2][pc2] !== null) return false;
        }
    }
    return true;
}

/**
 * Places a word in the grid (modifies grid in-place).
 */
function cwPlace(grid, r0, c0, dir, word) {
    const dr = dir === 'DOWN' ? 1 : 0;
    const dc = dir === 'ACROSS' ? 1 : 0;
    for (let i = 0; i < word.length; i++) {
        grid[r0 + dr * i][c0 + dc * i] = word[i];
    }
}

/**
 * Finds candidate placements for a new word by intersecting with already-placed words.
 * Returns array of { r, c, dir, intersections }.
 */
function cwFindCandidates(grid, entry, placed, N) {
    const candidates = [];

    for (const p of placed) {
        const pDr = p.dir === 'DOWN' ? 1 : 0;
        const pDc = p.dir === 'ACROSS' ? 1 : 0;

        // Try perpendicular direction
        const newDir = p.dir === 'ACROSS' ? 'DOWN' : 'ACROSS';
        const newDr = newDir === 'DOWN' ? 1 : 0;
        const newDc = newDir === 'ACROSS' ? 1 : 0;

        for (let i = 0; i < p.word.length; i++) {
            const pR = p.r0 + pDr * i;
            const pC = p.c0 + pDc * i;
            const placedLetter = p.word[i];

            // Find where this letter appears in the new word
            for (let j = 0; j < entry.word.length; j++) {
                if (entry.word[j] !== placedLetter) continue;

                const newR0 = pR - newDr * j;
                const newC0 = pC - newDc * j;

                if (cwCanPlace(grid, newR0, newC0, newDir, entry.word, N)) {
                    // Count total intersections (cells already occupied)
                    let intersections = 0;
                    for (let k = 0; k < entry.word.length; k++) {
                        const rk = newR0 + newDr * k;
                        const ck = newC0 + newDc * k;
                        if (rk >= 0 && rk < N && ck >= 0 && ck < N && grid[rk][ck] !== null) {
                            intersections++;
                        }
                    }
                    candidates.push({ r: newR0, c: newC0, dir: newDir, intersections });
                }
            }
        }
    }

    return candidates;
}

/**
 * Builds a crossword puzzle.
 * Returns { grid, placed } or null if failed.
 * placed[i] = { entry, r0, c0, dir, word, number }
 */
function cwBuild(wordPool, N, targetWords, maxAttempts, recent) {
    if (maxAttempts === undefined) maxAttempts = 30;
    recent = recent || new Set();
    const pick = function(arr) { return arr[Math.floor(Math.random() * arr.length)]; };
    let best = null;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const grid = Array.from({ length: N }, () => Array(N).fill(null));
        const placed = [];

        // Randomised order: longer words tend to go first, but with heavy jitter,
        // and words seen in recent games are pushed back so puzzles keep changing.
        const shuffled = wordPool
            .map(function(e) { return { e: e, k: e.word.length + Math.random() * 5 - (recent.has(e.word) ? 6 : 0) }; })
            .sort(function(a, b) { return b.k - a.k; })
            .map(function(o) { return o.e; });

        const first = shuffled.find(function(e) { return e.word.length <= N; });
        if (!first) continue;
        shuffled.splice(shuffled.indexOf(first), 1);

        // First word: random row near the centre, random horizontal offset
        const r0 = Math.floor(N / 2) + Math.floor(Math.random() * 3) - 1;
        const slack = N - first.word.length;
        const c0 = Math.max(0, Math.min(slack, Math.floor(slack / 2) + (slack > 1 ? Math.floor(Math.random() * 3) - 1 : 0)));
        cwPlace(grid, r0, c0, 'ACROSS', first.word);
        placed.push({ entry: first, r0, c0, dir: 'ACROSS', word: first.word });

        for (let i = 0; i < shuffled.length && placed.length < targetWords; i++) {
            const entry = shuffled[i];
            const candidates = cwFindCandidates(grid, entry, placed, N);
            if (candidates.length === 0) continue;

            // Pick randomly among the placements with the most crossings
            let maxInter = 0;
            candidates.forEach(function(c) { if (c.intersections > maxInter) maxInter = c.intersections; });
            const top = candidates.filter(function(c) { return c.intersections === maxInter; });
            const chosen = pick(top);
            cwPlace(grid, chosen.r, chosen.c, chosen.dir, entry.word);
            placed.push({ entry, r0: chosen.r, c0: chosen.c, dir: chosen.dir, word: entry.word });
        }

        if (!best || placed.length > best.placed.length) best = { grid, placed };
        if (placed.length >= targetWords) break;
    }

    if (!best || best.placed.length < Math.min(targetWords, 5)) return null;
    cwNumber(best.placed);
    return best;
}

/** Assigns clue numbers in reading order (top-to-bottom, left-to-right). */
function cwNumber(placed) {
    const seen = new Set();
    const unique = [];
    for (const p of placed) {
        const k = p.r0 + ',' + p.c0;
        if (!seen.has(k)) { seen.add(k); unique.push({ r: p.r0, c: p.c0 }); }
    }
    unique.sort(function(a, b) { return a.r !== b.r ? a.r - b.r : a.c - b.c; });
    const posToNum = {};
    unique.forEach(function(pos, idx) { posToNum[pos.r + ',' + pos.c] = idx + 1; });
    placed.forEach(function(p) { p.number = posToNum[p.r0 + ',' + p.c0]; });
}

/** Rebuilds a puzzle from a saved layout [{word,r0,c0,dir}] and the clue pool. */
function cwRestore(layout, N, clues) {
    const grid = Array.from({ length: N }, () => Array(N).fill(null));
    const placed = [];
    for (const l of layout) {
        const entry = clues.find(function(c) { return c.word === l.word; });
        if (!entry || l.r0 < 0 || l.c0 < 0 || l.r0 >= N || l.c0 >= N) return null;
        if ((l.dir === 'ACROSS' ? l.c0 : l.r0) + l.word.length > N) return null;
        cwPlace(grid, l.r0, l.c0, l.dir, l.word);
        placed.push({ entry, r0: l.r0, c0: l.c0, dir: l.dir, word: l.word });
    }
    if (!placed.length) return null;
    cwNumber(placed);
    return { grid, placed };
}
