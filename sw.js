/**
 * Games Hub — Service Worker
 * Strategy: cache-first for static assets, network-first for HTML pages
 * Version: bump CACHE_VERSION to force cache refresh after deploys
 */

const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE  = `games-hub-static-${CACHE_VERSION}`;
const PAGE_CACHE    = `games-hub-pages-${CACHE_VERSION}`;

// Static assets to pre-cache on install
const PRECACHE_ASSETS = [
    '/icons/icon-192.png',
    '/icons/icon-512.png',
    '/platform/platform.css',
    '/platform/i18n-platform.js',
    '/platform/platform-header.js',
];

// HTML pages to cache on first visit (not pre-cached to keep install fast)
const PAGE_ORIGINS = self.location.origin;

// ── Install ────────────────────────────────────────────────────────────────

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => cache.addAll(PRECACHE_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// ── Activate ───────────────────────────────────────────────────────────────

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(k => k !== STATIC_CACHE && k !== PAGE_CACHE)
                    .map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// ── Fetch ──────────────────────────────────────────────────────────────────

self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle same-origin requests; skip Firebase / Google APIs
    if (url.origin !== PAGE_ORIGINS) return;
    // Skip non-GET
    if (request.method !== 'GET') return;

    const isHTML = request.destination === 'document' ||
                   url.pathname.endsWith('.html') ||
                   url.pathname === '/' ||
                   url.pathname.endsWith('/');

    if (isHTML) {
        // Network-first for HTML pages so content stays fresh
        event.respondWith(networkFirstHTML(request));
    } else {
        // Cache-first for everything else (JS, CSS, fonts, images)
        event.respondWith(cacheFirstStatic(request));
    }
});

// ── Strategies ─────────────────────────────────────────────────────────────

async function networkFirstHTML(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(PAGE_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        const cached = await caches.match(request);
        if (cached) return cached;
        // Offline fallback: return hub page if available
        const fallback = await caches.match('/index.html');
        return fallback || new Response('<h1>Offline</h1><p>Conéctate a Internet para jugar.</p>', {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
    }
}

async function cacheFirstStatic(request) {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        return new Response('', { status: 503 });
    }
}
