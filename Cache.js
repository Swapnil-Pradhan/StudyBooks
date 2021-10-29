//Version: 2.3

self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('StudyBooks').then((cache) => cache.addAll([
'index.html',
'Guide.html',
'StudyBooks.html',
'Solution.html',
'Roboto.css',
'aos.css',
'Material.css',
'aos.js',
'Material.woff2',
'Roboto1.woff2',
'Roboto2.woff2',
'Roboto3.woff2',
'Roboto4.woff2',
'Roboto5.woff2',
'Roboto6.woff2',
'Roboto7.woff2',
'eBooksNSolutions.js',
'Close.mp3',
'eBooksBackground.webp',
'SolutionsBackgrouns.webp',
'ScrollToTop.png',
'MyBitsAndBytes8.jpg',
'रुचिरात्रुत्योभाग.jpeg',
'भारतकीखोज.jpeg',
'वसन्तभाग३.jpeg',
'OurPasts-III.jpeg',
'SocialAndPoliticalLife-III.jpeg',
'ResourcesAndDevelopment.jpeg',
'ItSoHappened.jpeg',
'Honeydew.jpeg',
'Mathematics8.jpeg',
'Science8.jpeg',
'MyBitsAndBytes7.jpeg',
'रुचिरादुतियभाग.jpeg',
'बालमहाभारतकथा.jpeg',
'SocialAndPoliticalLife-II.jpeg',
'वसंतभाग२.jpeg',
'OurPasts-II.jpeg',
'OurEnvironment.jpeg',
'AnAlienHand.jpeg',
'Honeycomb.jpeg',
'Mathematics7.jpeg',
'Science7.jpeg',
'MyBitsAndBytes6.jpeg',
'रूचिराप्रथमोभाग.jpeg',
'बालरामकथा.jpg',
'वसंतभाग१.jpg',
'OurPasts-I.jpeg',
'SocialAndPoliticalLife-I.jpeg',
'TheEarthOurHabitat.jpeg',
'APactWithTheSun.jpeg',
'Honeysuckle.jpg',
'Mathematics6.jpeg',
'Science6.jpeg'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
})
