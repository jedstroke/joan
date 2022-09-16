var CACHE_NAME = "React_Joan_App_"

var urlsToCache = [
  'https://res.cloudinary.com/jedstroke/image/upload/v1661032883/IMG_20220612_103555_500_2_1_yhshji.jpg',
  'https://res.cloudinary.com/jedstroke/video/upload/v1660959435/Hollow_Coves_-_These_Memories_tlcjqg.mp3',
  'https://res.cloudinary.com/jedstroke/raw/upload/v1660959468/Mellow_cs0wrz.otf'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(() => {
      
      })
  );
});
// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    ).catch(() => {

    })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['React_Joan_App_'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
