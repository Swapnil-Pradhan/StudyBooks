//Version: 2.3

self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('StudyBooks').then((cache) => cache.addAll([
'index.html',
'रूचिराप्रथमोभाग.jpeg'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
})
