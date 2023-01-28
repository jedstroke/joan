var CACHE_NAME = "React_Joan_App_"

var urlsToCache = [
  "./fonts/Futura-Bold.ttf",
  "./fonts/Coco-Light.tff",
  "https://res.cloudinary.com/jedstroke/image/upload/v1661012008/heart_3_ihwvqu.png",
  "https://res.cloudinary.com/jedstroke/image/upload/v1661032883/IMG_20220612_103555_500_2_1_yhshji.jpg",
  "https://res.cloudinary.com/jedstroke/video/upload/v1660959435/Hollow_Coves_-_These_Memories_tlcjqg.mp3",
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

