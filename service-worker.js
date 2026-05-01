const CACHE_NAME = "muscle-app-v1";

const urlsToCache = [
  "/first-app/",
  "/first-app/index.html",
  "/first-app/record.html",
  "/first-app/history.html",
  "/first-app/style.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});