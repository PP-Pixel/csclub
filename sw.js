importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.navigationPreload.enable();

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
  });
  
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
  });
  
// ------------------  runtime caching starts ---------------------
// frequently updated resources
workbox.routing.registerRoute(
  /kanto\/json/,
  workbox.strategies.networkFirst({
    cacheName: 'fetch-objects-cache',
  }),
  'GET'
);

//html
workbox.routing.registerRoute(
  new RegExp('index.html'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp('activity.html'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp('company.html'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp('contact.html'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp('faq.html'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp('404.html'),
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp('http://4d3.gmobb.jp/dcm8wdyx8bibu/cgi/joyful/joyful.cgi'),
  new workbox.strategies.NetworkFirst()
);
//font
workbox.routing.registerRoute(
  new RegExp('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap'),
  new workbox.strategies.NetworkFirst()
);



// manifest
workbox.routing.registerRoute(
  new RegExp('manifest.json'),
  new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
  new RegExp('https://pp-pixel.github.io/csclub/manifest.json'),
  new workbox.strategies.StaleWhileRevalidate()
);

// ------------------  precaching the assets ---------------------
  const OFFLINE_PAGE = 'index.html';
  workbox.precaching.precacheAndRoute([
    //404
    '404.html',
    //images
    'images/activity-room.png',
    'images/logo.png',
    'images/logo.psd',
    'images/logo.webp',
    'images/mainimg_simple.webm',
    //icon,ogp
    'favicon/favicon.ico',
    'favicon/favicon.png',
    'favicon/icon-192.png',
    'favicon/icon-256.png',
    'images/ogp-mage.png',
    'images/ogp-mage.webp',
    //css
    'css/style.css',
    'css/animation.css',
    'css/inview.css',
    //javaScript
    'js/main.js',
    'js/jquery.inview_set.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js',
    'https://www.google.com/recaptcha/api.jp',
    'https://www.google.com/recaptcha/enterprise.js?render=6LeoDWgmAAAAAGwPsVvUHB8UzQsZj-w6wxO_Ccxl',
    //pdf
    'download/r5-recruitment.pdf',
    'download/r5-recruitment_notLink.pdf',
    //other
    'manifest.json',
   OFFLINE_PAGE,  
  ]);
  // サービスワーカー有効化に必須
  self.addEventListener('fetch', function(event) {});
