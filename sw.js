const CACHE_NAME = "app";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(["./"]);
    })
  );
});