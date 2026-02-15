const CACHE_NAME = 'gates-v1';
const ASSETS = [
  './',
  './index.html',
  'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch Event (Required for PWA)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
