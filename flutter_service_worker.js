'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c551a650ad02e26476693a21f56b310e",
"assets/AssetManifest.json": "57217eb3ed610072c0314396a0ad54c4",
"assets/assets/images/contact_icon.png": "13727e027c22cf8a661c955885987d5f",
"assets/assets/images/logo.png": "b1b45dda98115aa563e2bd4534625bdd",
"assets/assets/images/logo1.png": "b1b45dda98115aa563e2bd4534625bdd",
"assets/assets/images/logo_black.png": "5f6d3dd364afe0f329e79627e8f50ca9",
"assets/assets/images/logo_blur.png": "7a71fcb1f1d3d357d7f18f9e3cf101de",
"assets/assets/images/MBS.png": "4593f679e5890b9668943c3ffb264285",
"assets/assets/images/MBS_mobile.png": "dce908c9033db5a41dcab1680cd177f3",
"assets/assets/images/moltazem_icon1.png": "52f01d21c5bb15482a511b9fd14207c3",
"assets/assets/images/moltazem_icon2.png": "e627aee7a3c60df8611f9fdebc35d78d",
"assets/assets/images/moltazem_icon3.png": "4d4ed43cd4ec8d9bb87c7e01ef07f62f",
"assets/assets/images/moltazem_icon4.png": "df83af8562fe9529170a0fc9fbd22e6a",
"assets/assets/images/moltazem_text.png": "4fb32041355a0b261183949e98ef950b",
"assets/assets/images/partners/p1.png": "33e033da745b278a1915fcb76433bede",
"assets/assets/images/partners/p10.png": "d71067ce7442461ddd7febcd91a4e403",
"assets/assets/images/partners/p11.png": "417de58c62852a84843b6e18c7f9a9f4",
"assets/assets/images/partners/p12.png": "905616f1eb6a72d91be4267626e8e1ca",
"assets/assets/images/partners/p13.png": "225b0503917355be43a4994bcf413bcb",
"assets/assets/images/partners/p14.png": "4db2f30ff103411ee7718f22c66de888",
"assets/assets/images/partners/p15.png": "33dd806ba2fb3baa717acee42af71d63",
"assets/assets/images/partners/p16.png": "fcaa911c9d86199a7647baa3bee41c9f",
"assets/assets/images/partners/p17.png": "28e12429720d6f493c426ca87b3f6f43",
"assets/assets/images/partners/p18.png": "0e037b994b5a2a5b67bd012590e698e3",
"assets/assets/images/partners/p19.png": "82b2d38a743764b0128f37ea23e8b352",
"assets/assets/images/partners/p2.png": "db66983ec4a0b80227272699edadab5e",
"assets/assets/images/partners/p20.png": "08e686d62e4898a61f8ebaf775869254",
"assets/assets/images/partners/p21.png": "d2ecda08ae894333ce4d147a896fb2a5",
"assets/assets/images/partners/p22.png": "111317a7fe0d9a42d13729657f1658d1",
"assets/assets/images/partners/p3.png": "7044e29823eb600ea657765bd790d875",
"assets/assets/images/partners/p4.png": "7467d065976cd9da7b88a5a87e8bc166",
"assets/assets/images/partners/p5.png": "94e15c533d4ba9f09e5ca4aa470f3e12",
"assets/assets/images/partners/p6.png": "52b93e98718f985105f951bed380d8f4",
"assets/assets/images/partners/p7.png": "351e34b4345e90ac5abafecdf4bb1a55",
"assets/assets/images/partners/p8.png": "bc16449cf8d3c5abcf10118a3e4bc8b6",
"assets/assets/images/partners/p9.png": "7cf396d7b3abe5259cfe4e60276d70d4",
"assets/assets/images/partners.png": "e2c69c86df50b6d10454acf9b0e64d97",
"assets/assets/images/partners2.png": "abecda8e55193b5a9d51f48266f8b28a",
"assets/assets/images/products_bg.png": "89667975073b0a75d92b89fbccd1bba1",
"assets/assets/images/waei_icon1.png": "d62d5644ac36cc79229dbdd8946b7d89",
"assets/assets/images/waei_icon2.png": "3eedf28d6f6fc3e64dc34766ad360d13",
"assets/assets/images/waei_icon3.png": "e5d06f5e889ff178d32734ca4d6d5f99",
"assets/assets/images/waei_icon4.png": "0583969b375acf3ad1468ea47aa7795c",
"assets/assets/images/waei_image.jpg": "700b1d17f85c32e87c8d2a33b58ff854",
"assets/assets/images/waei_text.png": "fe889126f568fd6bc25271957c2c7729",
"assets/FontManifest.json": "5ffa5dbb4734fc78541b0425b355f4bd",
"assets/fonts/Acumin-Variable-Concept.ttf": "066ce24dae3730ed6c648b09efaea93a",
"assets/fonts/Flyhead-Light.otf": "c87f5f6c8f91c5d040d033a003d75e85",
"assets/fonts/MaterialIcons-Regular.otf": "4ed90a2f348bd16c7ac6a2014e48cd60",
"assets/NOTICES": "b127d6368f240d7fa35a433d8d4414d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android-icon-144x144.png": "e83be2d7ee6401de29770db47394de98",
"icons/android-icon-192x192.png": "338775e2582a791c821fe7475ea07e0d",
"icons/android-icon-36x36.png": "c7cbafd40a3b35590eb2eeec5a77e05a",
"icons/android-icon-48x48.png": "2f388111e852cb353716f53ce54f5b81",
"icons/android-icon-72x72.png": "4778f496f38f00bc4dc0f73287b9587d",
"icons/android-icon-96x96.png": "32c7d44ed385c70e4447ad5b8a866d58",
"icons/apple-icon-114x114.png": "d513d2c889ae5b256c31f710f38ad8ed",
"icons/apple-icon-120x120.png": "bd9685694e3e489fb4ba677202f2bd99",
"icons/apple-icon-144x144.png": "e83be2d7ee6401de29770db47394de98",
"icons/apple-icon-152x152.png": "2312ab39e32fbdf44c47318c8b1d75c6",
"icons/apple-icon-180x180.png": "8cae3483dfb1e44bf58d9d841ff159e6",
"icons/apple-icon-57x57.png": "07be7b7d6a1be3321e2181eb8d21c387",
"icons/apple-icon-60x60.png": "4a0ca1ab844a5cfb31309ffe6f0300ae",
"icons/apple-icon-72x72.png": "4778f496f38f00bc4dc0f73287b9587d",
"icons/apple-icon-76x76.png": "77077801103143ed9fb9cec24b20f465",
"icons/apple-icon-precomposed.png": "8b843061f93e5b5325361986bdb58591",
"icons/apple-icon.png": "8b843061f93e5b5325361986bdb58591",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/ebee32a7ae23edfc940c0534016fcac0.ico.zip": "a64ead914ac25293845c829c9b8f3bd3",
"icons/favicon-16x16.png": "abed982b0be2b1475f94db8d08b8d496",
"icons/favicon-32x32.png": "a9d05b00b84f0e9d89da6ddfaaed431d",
"icons/favicon-96x96.png": "32c7d44ed385c70e4447ad5b8a866d58",
"icons/favicon.ico": "a123745815c965531779b52f7d156ee7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "e83be2d7ee6401de29770db47394de98",
"icons/ms-icon-150x150.png": "fded58481f827b3f8c9ea5e8b1f4cca4",
"icons/ms-icon-310x310.png": "e0bbb7a27c36b2d56d659b887ca8bb95",
"icons/ms-icon-70x70.png": "5d756f86671d223cec5418e748083b3e",
"index.html": "650e33c2a52f902bf322c7fcea90d5d4",
"/": "650e33c2a52f902bf322c7fcea90d5d4",
"main.dart.js": "4407994d1721a62b7a0b4312a1d16d91",
"manifest.json": "f56cede89207b4ad88737c628b41bdf6",
"version.json": "1bd8502e13cc1e8dbd2e84d63a93880c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
