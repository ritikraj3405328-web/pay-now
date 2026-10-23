self.addEventListener('install', function(e) {
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  console.log('Service Worker Activated');
});
self.addEventListener('fetch', function(e) {
  // Pass through fetch
});
