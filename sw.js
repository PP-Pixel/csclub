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
    'activity-room.png',
    'logo.png',
    'logo.psd',
    'logo.webp',
    'mainimg_simple.mp4',
    //icon,ogp
    'favicon.ico',
    'favicon.png',
    'icon-192.png',
    'icon-256.png',
    'ogp-mage.png',
    'ogp-mage.webp',
    //css
    'style.css',
    'animation.css',
    'inview.css',
    //javaScript
    'main.js',
    'jquery.inview_set.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js',
    'https://www.google.com/recaptcha/api.jp',
    'https://www.google.com/recaptcha/enterprise.js?render=6LeoDWgmAAAAAGwPsVvUHB8UzQsZj-w6wxO_Ccxl'.
    //pdf
    'r5-recruitment.pdf',
    //other
    'manifest.json',
   OFFLINE_PAGE,  
  ]);
  // サービスワーカー有効化に必須
  self.addEventListener('fetch', function(event) {});
