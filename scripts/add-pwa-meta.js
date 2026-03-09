/**
 * scripts/add-pwa-meta.js
 * Injects PWA meta tags and SW registration into all game HTML files.
 */
'use strict';
const fs   = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Game HTML files (relative to root) with their titles for apple-mobile-web-app-title
const GAMES = [
    { file: 'mathMaster-EFC/index.html',   title: 'MathMaster' },
    { file: 'snake-EHS/index.html',         title: 'Snake' },
    { file: 'tableMaster-EFC/index.html',   title: 'TableMaster' },
    { file: 'typingMaster-EFC/index.html',  title: 'TypeMaster' },
    { file: 'wordSearch-EFC/index.html',    title: 'WordSearch' },
    { file: 'crossword-EFC/index.html',     title: 'Crucigrama' },
    { file: 'geoQuiz-EFC/index.html',       title: 'GeoQuiz' },
    { file: 'euskera-EFC/index.html',       title: 'Nor-Nori-Nork' },
    { file: 'englishVerbs-EFC/index.html',  title: 'Irregular Verbs' },
];

const PWA_META = (title) => `
    <!-- PWA -->
    <link rel="manifest" href="../manifest.json">
    <meta name="theme-color" content="#6366f1">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="${title}">
    <link rel="apple-touch-icon" href="../icons/icon-192.png">`;

const SW_SCRIPT = `    <script src="../platform/register-sw.js"></script>\n`;

for (const { file, title } of GAMES) {
    const filePath = path.join(ROOT, file);
    if (!fs.existsSync(filePath)) { console.warn(`  [SKIP] ${file} not found`); continue; }

    let html = fs.readFileSync(filePath, 'utf8');

    // Skip if already patched
    if (html.includes('rel="manifest"')) { console.log(`  [SKIP] ${file} already has manifest`); continue; }

    // Insert PWA meta after <meta name="viewport" ...>
    html = html.replace(
        /(<meta name="viewport"[^>]*>)/,
        `$1${PWA_META(title)}`
    );

    // Insert SW registration before </body>
    if (!html.includes('register-sw.js')) {
        html = html.replace('</body>', SW_SCRIPT + '</body>');
    }

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`  [OK] ${file}`);
}

console.log('\nPWA meta tags injected.');
