/**
 * platform/register-sw.js
 * Registers the Games Hub service worker.
 * Include this script (with rootPath adjusted) in every HTML page.
 *
 * Usage:
 *   <script src="../platform/register-sw.js"></script>    (from game subdirs)
 *   <script src="platform/register-sw.js"></script>       (from root/hub)
 *
 * The SW is always at /sw.js (root of the site).
 */
(function () {
    if (!('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
            .then(reg => {
                // Check for updates on every page load
                reg.update();

                // Notify when a new version is waiting
                reg.addEventListener('updatefound', () => {
                    const newWorker = reg.installing;
                    newWorker?.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // A new version is ready — could show a toast here
                            console.log('[SW] New version available. Reload to update.');
                        }
                    });
                });
            })
            .catch(err => console.warn('[SW] Registration failed:', err));
    });
})();
