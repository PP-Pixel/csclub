self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
  });
  
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
  });
  
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

  /*workbox.precaching.precacheAndRoute([
    'index.html',
    'css/style.css',
    'css/animation.css',
    'css/inview.css',
    'js/main.js',
    'js/jquery.inview_set.js'
  ]);*/
  // サービスワーカー有効化に必須
  self.addEventListener('fetch', function(event) {});