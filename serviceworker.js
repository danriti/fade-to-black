/**
 * This event is triggered during install/registration of the ServiceWorker.
 */
self.addEventListener('install', function(event) {
  console.log('Serviceworker installed!');
});


/**
 * This event is triggered for all network requests made against our
 * ServiceWorker's scope.
 */
self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);
});
