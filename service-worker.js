// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open('simple-sw-v1').then(function(cache) {
      // And add resources to it
      return cache.addAll([
        './',
        'js/compressed.js',
        'images/logo-dark.png',
        'images/logo-white.png',
        'images/icon/pen-tool.png',
        'images/icon/camera.png',
        'images/icon/camcorder.png',
        'images/icon/social-media.png',
        'images/icon/animation.png',
        'images/icon/code.png',
        'images/portfolio/1.jpg',
        'images/portfolio/2.jpg',
        'images/portfolio/3.jpg',
        'images/portfolio/4.jpg',
        'images/portfolio/5.jpg',
        'images/portfolio/6.jpg',
        'images/portfolio/7.jpg',
        'images/portfolio/8.jpg',
        'images/portfolio/low/1.jpg',
        'images/portfolio/low/2.jpg',
        'images/portfolio/low/3.jpg',
        'images/portfolio/low/4.jpg',
        'images/portfolio/low/5.jpg',
        'images/portfolio/low/6.jpg',
        'images/portfolio/low/7.jpg',
        'images/portfolio/low/8.jpg',
        'images/team-1.png',
        'images/team-2.png',
        'images/team-3.png',
        'images/team-4.png',
        'images/team-5.png',
        'images/team-6.png',
        'images/team-7.png',
        'images/team-8.png',
        'images/clients/turk.jpeg',
        'images/clients/jaffler.jpeg',
        'images/clients/master.jpeg',
        'images/clients/24.png',
        'images/clients/wse.jpeg',
        'images/clients/mirza.jpeg',
        'images/clients/sheesha.jpeg',
        'images/clients/anees.jpeg',
        'images/clients/artsc.jpeg',
        'images/clients/bobby.jpeg',
        'images/clients/tawakkal.jpeg',
        'images/clients/sweet.jpeg',
        'images/clients/shaikh.jpeg',
        'images/clients/ja.jpeg',
        'images/clients/maryam.jpeg',
        'images/clients/menu.jpeg',
        'images/customer_review_bg.jpg',
        'css/bootstrap.css',
        'css/font-awesome.css',
        'css/settings.css',
        'css/jquery.fancybox.css',
        'css/animate.css',
        'css/magnific-popup.css',
        'css/cubeportfolio.min.css',
        'css/owl.carousel.min.css',
        'css/owl.theme.default.min.css',
        'css/swiper.min.css',
        'css/media-query.css',
        'css/particle-style.css',
        'css/style.css',
        'css/styles.css'
      ]);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});
