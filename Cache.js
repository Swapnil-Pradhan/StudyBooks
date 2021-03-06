self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('StudyBooks').then((cache) => cache.addAll([
'/StudyBooks/'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
})
