'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16fab9d8e0d126515fca7f19406a674b",
".git/config": "624f69c48747b48faa2d282505d1b4f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2f21f27398495d6bf74da547eff36b1e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9520924a4cd7224099425e83e171778e",
".git/logs/refs/heads/main": "b33995b15091b837754db340fcb31c2e",
".git/logs/refs/remotes/origin/main": "9fec065b02c96c79163c4f5b68f5fae3",
".git/objects/01/2d0cc2998f8139524e95867640bd7faacda0c3": "2a10fc8436198fb90a454cc106adca0f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/0e/f4b413cfd1dfa8709a2a7017404ad89033b156": "4954c88050c3896885d76df7e3fb8416",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/f86b3993e0bda754b80f957ebc3e46c204c291": "f3233dde88f85af253f68f2fa5ef43fe",
".git/objects/28/ec1149bae408d07826da62c93a524567ffc201": "ab30698d80686642db65250b665cbd54",
".git/objects/33/34fd8524e13e590a9f062c987361c3b46c6395": "6a584bea798374cdd6c1bd7057d1c57f",
".git/objects/33/e1016a8fa27bd5ce823932bd5a6977a6ebef45": "0bf457b2f5bbe6a0f4f43a48e82c6127",
".git/objects/3f/353010aa729ccf7dac660012b982ee0920a740": "29554ff998183002c8b0450ff3d67a1a",
".git/objects/40/eb790c7ebb6303a06b31c2a0a23251d3dfff35": "0e058614472c8d235bb627a516645809",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/51/32eaede77951bfee5a246b97f796b5eba9a1ec": "918da3c6ed094f173b55b3f61cf693c9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/b89c6f8497a544ee403b78e7a2c24940b5b2d3": "dc62d0a029da45b807d71c78ea9e8402",
".git/objects/62/4857775e1b41c30076273788f83635e4111dbd": "e013c54326344dca464aad94cc4f6504",
".git/objects/65/ae4ea05f75046e75c926dd751a71c291b27010": "0267b130b0c51138c7b4f969e8388145",
".git/objects/6a/15299172f6e1174ea27fcda6dd3c77890bc99c": "6334b7bce95259d1ccfe3af56c4ca04e",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/78/dc498059bc0b8ee338587a4cf67b978a1c871a": "67fe3d2bb396d1f56405219706db7eb7",
".git/objects/7e/9ad4f5ee91cec54ccef88a7cc8978b44dc19dc": "bb25e1f9a6d812afeb87543bcd3ad68d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/0741487b97022c549935bacca52f133a76f1c9": "ab23ed3770c3b589b4c93d144933cef3",
".git/objects/8f/2766ae786a0ecf7bd8fb242d1298e347c0e9da": "88a56a01822c262119f6cfaeacc90c69",
".git/objects/90/be2ef76b5beeb1e1da440e9da9488f31ffe4ee": "44a7405e8d92c161468e0239a3f0b242",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/d201e3cadb3df7873467c87add4958c4486e1b": "86bfe4f465011e5165907ea579e317fc",
".git/objects/96/ad86d32ab80cdb7255124a24e7b9f275e85399": "e31c3f789e5aa9a16c45c82bed7f9751",
".git/objects/98/b5187ff70af190e46f354ca0ef2295733ab029": "72ca56303ec5767b5a3d52989e64f138",
".git/objects/a3/43e111e78404ea180cbbab715821338652495d": "f7807c1ea261e9e986aa3c6bd9b30d58",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/2d4c42822e07f5198971acf4ee01fd8f0beb6e": "be62101b8cbe2389dcc546709a07b155",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/a3302be181332da5f29af33b224fa78df997df": "a958285368d39dc86496c3abd5d3c72a",
".git/objects/cb/428d19a7f745c76cd6d8dfb8a7ea7d9f2081d7": "54bd9b526bcd4b3c0cc0cb54239e2d4e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/e5/485cb0e113d00f1c98d7b0de23144253f3b08c": "14e3fcd6c1db24104928263da7455024",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/002075efba58f75a07b64440501b6c73bc682d": "7c457f39334acc810a3df1e79f4c144d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/265f33bca582f7b48bc68dc3729961274ffbb0": "6d89906b26fa5f6afe4be3e41b54fec8",
".git/objects/f1/e27e1bcda43a950a91ff644498421e4d82eeb9": "ef72d7e10d7bff64b2ec658d8d840927",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/d9fa46c290f3ae40b2ada4d8a39f5c3a10315c": "592ae4217c57d19d252a0671753eedb3",
".git/objects/f4/f4929c1e9f784f725716f0799c879d1ac9c54c": "129024a6ec3c796c41ea05596ab4c35f",
".git/objects/f6/271ea1d3c9640d4b2ac59d322fb5975b2c37ea": "61e2b3b26cdd47f168190837905bf25c",
".git/objects/fc/4dc17c1544c20e4bd6cff5f73f341cfc014dbb": "1a7d6d5be2b011ebacf9c8fb0cf9247c",
".git/refs/heads/main": "9a1922836ca30a558238199d712a30f6",
".git/refs/remotes/origin/main": "9a1922836ca30a558238199d712a30f6",
"assets/AssetManifest.bin": "db8fee7f7b3eb88714491af7b3264224",
"assets/AssetManifest.bin.json": "2636e7870e65c8b5ae556291d3a4f77e",
"assets/AssetManifest.json": "9789f8f32108b1203c82b5c7c302bc1b",
"assets/assets/emptyCash.json": "72ab64900ed87fd8a52f6554bb170518",
"assets/assets/image/appLogo.png": "e3301664c361e9d356279ffada30a101",
"assets/assets/introIndianRupee.json": "7b9e02c5669a8d1cfb54d06bd24a907c",
"assets/assets/nodata.json": "944d8ee572eb1f996a49201cbe4f38fe",
"assets/assets/noSearch.json": "1f67f49010929e3749374bbfe5970718",
"assets/assets/privacy.json": "551adc6a0368acb40fc780e77dc857a7",
"assets/assets/searchNotFound.json": "1b7ecc65459a3b2c5a9cd9873a095e66",
"assets/assets/statistics.json": "e89efa29f3b00e622fb13260bf75edd4",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/fonts/MaterialIcons-Regular.otf": "3426a70dd7e82c345d1e28d0fe704602",
"assets/NOTICES": "b6c25d75b3779432f2ee59381a2eb992",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/currency_picker/lib/src/res/no_flag.png": "3f454777dfe9b6aae5e9d8544f4fa6f6",
"assets/packages/currency_picker/lib/src/res/xof.png": "5843e487ecffd9d3dcd01c1070cc6c6a",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f4ad7f06311de010623a4fd613651d19",
"/": "f4ad7f06311de010623a4fd613651d19",
"main.dart.js": "6f0a41cd71df1f3d6554dfa0fa636e29",
"manifest.json": "a59afa6d26801eef145b6610d7fd8d7f",
"version.json": "6b7119750636fa73dcca95a6b44e56ba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
