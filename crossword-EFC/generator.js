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
function cwBuild(wordPool, N, targetWords, maxAttempts) {
    if (maxAttempts === undefined) maxAttempts = 30;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const grid = Array.from({ length: N }, () => Array(N).fill(null));
        const placed = [];

        // Shuffle and sort by length descending (try longest first for better coverage)
        const shuffled = wordPool
            .slice()
            .sort(function() { return Math.random() - 0.5; })
            .sort(function(a, b) { return b.word.length - a.word.length; });

        // Place first word horizontally in center
        const first = shuffled[0];
        if (!first || first.word.length > N) continue;

        const r0 = Math.floor(N / 2);
        const c0 = Math.floor((N - first.word.length) / 2);
        cwPlace(grid, r0, c0, 'ACROSS', first.word);
        placed.push({ entry: first, r0, c0, dir: 'ACROSS', word: first.word });

        // Try to place remaining words
        for (let i = 1; i < shuffled.length && placed.length < targetWords; i++) {
            const entry = shuffled[i];
            const candidates = cwFindCandidates(grid, entry, placed, N);
            if (candidates.length === 0) continue;

            // Pick best: most intersections, then closest to grid center
            const halfN = N / 2;
            candidates.sort(function(a, b) {
                if (b.intersections !== a.intersections) return b.intersections - a.intersections;
                const distA = Math.abs(a.r - halfN) + Math.abs(a.c - halfN);
                const distB = Math.abs(b.r - halfN) + Math.abs(b.c - halfN);
                return distA - distB;
            });

            const best = candidates[0];
            cwPlace(grid, best.r, best.c, best.dir, entry.word);
            placed.push({ entry, r0: best.r, c0: best.c, dir: best.dir, word: entry.word });
        }

        // Accept if we placed at least min(targetWords, 5) words
        if (placed.length >= Math.min(targetWords, 5)) {
            // Assign numbers in reading order (top-to-bottom, left-to-right)
            const posToNum = {};
            const seen = new Set();
            const unique = [];

            for (const p of placed) {
                const k = p.r0 + ',' + p.c0;
                if (!seen.has(k)) {
                    seen.add(k);
                    unique.push({ r: p.r0, c: p.c0 });
                }
            }

            unique.sort(function(a, b) {
                if (a.r !== b.r) return a.r - b.r;
                return a.c - b.c;
            });

            unique.forEach(function(pos, idx) {
                posToNum[pos.r + ',' + pos.c] = idx + 1;
            });

            placed.forEach(function(p) {
                p.number = posToNum[p.r0 + ',' + p.c0];
            });

            return { grid, placed };
        }
    }

    return null;
}
