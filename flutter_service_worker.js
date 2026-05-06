'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c1fde5a5bfb59496d50ef7ef1c68c30e",
"assets/AssetManifest.bin.json": "66934200b9c47bbaca5d7b8a4fbab510",
"assets/AssetManifest.json": "aeaeab945d67857ca0563c414694e431",
"assets/assets/atmosphere_icons/authentic_atmosphere.png": "f8d6c664b5845ef2b711d00d9b7f00d6",
"assets/assets/atmosphere_icons/beautiful_view.png": "0868b5fef2cf604f25d0bbd2873a54f9",
"assets/assets/atmosphere_icons/cozy_interior.png": "5148e3dd661e4f920874033b13c062ac",
"assets/assets/atmosphere_icons/great_music.png": "76489aabc338f3dd7180cdca57f7c9e1",
"assets/assets/atmosphere_icons/homey.png": "213b762cbade17599009e1f40887a929",
"assets/assets/atmosphere_icons/live_music.png": "5c843de58d210c3c58e00946e8dc7595",
"assets/assets/atmosphere_icons/modern_interior.png": "aa05b4ab6fca3e37d056d872c136eb9f",
"assets/assets/atmosphere_icons/quiet.png": "8dc1b387e0442d7d0d06d1924c2f8869",
"assets/assets/atmosphere_icons/romantic.png": "374b681bc86d2c337620b5a49b331d08",
"assets/assets/badges/active_days_10.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/add_menu_item_1.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/add_menu_item_10.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/add_place.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/add_tags_5_places.png": "db45132cc6cf6a30a0deee6aa590990a",
"assets/assets/badges/avg_bill_5.png": "5be2ed5fcc56a96a7c7da42c39c7be8f",
"assets/assets/badges/comment_dishes_5.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/fav_dishes_10.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/fav_places_10.png": "e3bf6e4ed70188f1e6fb3626b8120489",
"assets/assets/badges/fav_products_5.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/first_review.png": "9b3cef9f0f0fdf029e349521ed8f285b",
"assets/assets/badges/invite_friend.png": "7c4c9f387e8909524c8b6f096917fb7e",
"assets/assets/badges/jeans_texture.jpg": "8eb9a914b4d7e7855a3586b1408c507c",
"assets/assets/badges/like_dishes_10.png": "eefb65be70c93724514249138c5c6135",
"assets/assets/badges/like_places_10.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/like_tags_10_places.png": "f9b64e9155031a2b08fcaf4aa3d621af",
"assets/assets/badges/open_pack_1.png": "04a5ee2c63fb1f9ac303ba10f81345cd",
"assets/assets/badges/open_toy_1.png": "4646e4df3778023863926d2ddd616d82",
"assets/assets/badges/rate_dishes_5_places.png": "5cea1ae76ad7f364e677c4e057a2cd6f",
"assets/assets/badges/reroll_1.png": "4b89435121085e331c95a0a89eef7b62",
"assets/assets/badges/reviews_10.png": "36c4a8fc0734a355dee84ca3be695909",
"assets/assets/badges/review_reward_1.png": "57a609cc8dd50d24181e41095dea3712",
"assets/assets/badges/reward_comment_1.png": "0ebdbff0a68af3629e30eb31f818b0e3",
"assets/assets/badges/reward_dish_1.png": "01ad9e242fbdda7d1150e7f7d2d5a49e",
"assets/assets/badges/wait_time_5.png": "e91aad8e9da79b037303f0fa65a888c1",
"assets/assets/food_icons/alcohol_free_cocktail.png": "5c6621c3eaede5157e4402c597af4717",
"assets/assets/food_icons/beer.png": "fd523c28e6f583289a0c88c9e508891f",
"assets/assets/food_icons/beer2.png": "a47397ac5c10cb3d7ab695cb404b1b49",
"assets/assets/food_icons/blins.png": "c18746d205fa5315880d305d89388f23",
"assets/assets/food_icons/breakfast.png": "53a10f84a12cf7e5703e36a480045226",
"assets/assets/food_icons/burger.png": "9ea9018600becb563c791567408f1e8f",
"assets/assets/food_icons/cocktail.png": "27f9d0ea677e3e35b3cc366e8f61226b",
"assets/assets/food_icons/coffee.png": "44e2db0944cf7129afd0e286b0d760b8",
"assets/assets/food_icons/dessert.png": "5c192437311cdddf544bf208fa141366",
"assets/assets/food_icons/drinks.png": "861312d0f46aa8975ea0ce9c3e1f2375",
"assets/assets/food_icons/drinks1.png": "fd1dabae9f4f465c713607fa1d97b794",
"assets/assets/food_icons/ice_cream.png": "f92293cdf37efeecd138e3f22e1fcae0",
"assets/assets/food_icons/lunch.png": "7822b5216d78d7f82dee43d0eb65b92f",
"assets/assets/food_icons/pancakes.png": "9e6f272d7ee521e048fd608093021c61",
"assets/assets/food_icons/pasta.png": "9542c2807c4057f0ad697a105a5220ba",
"assets/assets/food_icons/pastries.png": "30e43ae3f3e2ef98071f93ab76517278",
"assets/assets/food_icons/pizza.png": "5451c77b45570d93d24ec4f3985ce9e8",
"assets/assets/food_icons/salad.png": "3a2942670c8ca896c36c4ece115b513e",
"assets/assets/food_icons/sandwiches.png": "e06f2e718c857baa4965ae9cc648c495",
"assets/assets/food_icons/seafood.png": "632e987e48c88dd352821bdd919a94eb",
"assets/assets/food_icons/soup.png": "1639beb2a54390fa7882ec1d059ff28c",
"assets/assets/food_icons/steak.png": "134b6d7fb72cedd88823ed71eb9f4f64",
"assets/assets/food_icons/sushi.png": "0af8867f1b422003f0e6fb53559fba4f",
"assets/assets/food_icons/tacos.png": "033a058941edae5a58142e3d87a87984",
"assets/assets/food_icons/tea.png": "359edbd3c27924e2a2ab4ea4f688b79b",
"assets/assets/food_icons/waffles.png": "dd6517ba025ce867c6e0997b52496437",
"assets/assets/food_icons/wine.png": "362146ade9c87a53b45ed3ec2b2af0a8",
"assets/assets/food_icons/wine2.png": "8b17a1825c37515a38ad03a2f464ca72",
"assets/assets/food_icons/wok.png": "1982eb618ec93957b8447d5560c79351",
"assets/assets/food_icons/wraps.png": "ab75c81357f3c69d340779402db5a08f",
"assets/assets/info_icons/baby_changing_room.png": "3394d250966d8b73d62201d8387882fe",
"assets/assets/info_icons/bicycle_parking_available.png": "aaa6c5e638b0dfbe353139893a4a2764",
"assets/assets/info_icons/business_lunch.png": "114e2c7be0c77a8dfec88a7c0be7c354",
"assets/assets/info_icons/coffee_to_go.png": "4bfb2273670aa6bff1a6044c9ce0b193",
"assets/assets/info_icons/entertainment.png": "71f2a2a10af42df22c285f59193bce89",
"assets/assets/info_icons/food_court.png": "6a55a03268ed1642801f755ef17fb5f6",
"assets/assets/info_icons/free_wifi.png": "0004e17e53f9734477301724d6ea56d1",
"assets/assets/info_icons/gluten_free.png": "b19bd65554b217a973e0128e516fb26e",
"assets/assets/info_icons/has_breakfast.png": "2dc30ab46b0cdcb65dd72f9897eb0b00",
"assets/assets/info_icons/kids_menu.png": "bed3c657ca3ac9516cc88f07c0186a91",
"assets/assets/info_icons/kids_play_area.png": "d4596a22efdb57d546aed9327e1104ca",
"assets/assets/info_icons/non_smoking.png": "441491b79e3c25f4bccdfb38b8bc80ed",
"assets/assets/info_icons/no_seating.png": "325cbda9b285616380829b82b277636f",
"assets/assets/info_icons/outdoor_terrace.png": "6a7d9116f12318c4d4e298df6c9a4d63",
"assets/assets/info_icons/parking_available.png": "a86e8ded2d76c3a720460c264201bd8e",
"assets/assets/info_icons/pet_friendly.png": "7e2e719a4edb20ea4d8074ce8e3e2b8a",
"assets/assets/info_icons/self_service.png": "06bbbe2a3b2d1aa5430122a3b9e0cecb",
"assets/assets/info_icons/takeaway.png": "3e768e3849e4f2232e11180880d277c8",
"assets/assets/info_icons/vegan_friendly.png": "74931f493b6734e557eefb22d78143e7",
"assets/assets/purpose_icons/birthday_party.png": "678041cbf9cc2000e9bc6e66df7e80ac",
"assets/assets/purpose_icons/business_meeting.png": "16f02372de128484c61884bfb7baee20",
"assets/assets/purpose_icons/date_spot.png": "bd06bccf7bfc88430ed14ea582186f50",
"assets/assets/purpose_icons/family_place.png": "e58e120767b9ffdc6e6290fb2246265e",
"assets/assets/purpose_icons/friends_meetup.png": "a93eddb82f911ff8d95f027d5b63508c",
"assets/assets/purpose_icons/kids_friendly.png": "0cfecd748ec111d039116ccddc608190",
"assets/assets/purpose_icons/laptop_friendly.png": "3edb3214e699c99c51884df4afab8e6b",
"assets/assets/purpose_icons/large_company.png": "8704cb9d6593c3c0b25f2cf215ec35a6",
"assets/assets/purpose_icons/quick_lunch.png": "32dec8bf51b62dde5d2e672722f81e3b",
"assets/assets/purpose_icons/tourist_friendly.png": "ac9c257cc4f60e43dd75dfc1c21fd406",
"assets/assets/splash_logo.jpg": "5daa8cbee9bde7053756bde72f523d47",
"assets/assets/splash_logo.png": "46cf2c2e8f44c9e56e8491773331cdb7",
"assets/FontManifest.json": "c66405edf4086ed08102ccabc9faf066",
"assets/fonts/EduNSWACTCursive-Regular.ttf": "8875ef04662a2e10b6fdb938b92127fa",
"assets/fonts/MaterialIcons-Regular.otf": "c27e114ce14cbb5aab206ce09dd54215",
"assets/fonts/montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/lib/l10n/app_en.arb": "17be40f4f60d47b7499173c30e988083",
"assets/lib/l10n/app_localizations.dart": "5ceaee085b9873a739fd4258fc7c82ec",
"assets/lib/l10n/app_localizations_en.dart": "6510137db894f236bb594b2aa338e798",
"assets/lib/l10n/app_localizations_ru.dart": "80d68e9b95484de4e01c82fc740ad508",
"assets/lib/l10n/app_ru.arb": "6c79b9529b95f1c8e9d8b78e27376dc6",
"assets/lib/l10n/en.json": "30d1be2b397d7de1d0e52fd0fadc5bb7",
"assets/lib/l10n/ru.json": "75f2d40fb97302ecef90e1d5548bf885",
"assets/NOTICES": "0437015817c84f855c259ef4aeccc121",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_google_places_hoc081098/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places_hoc081098/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "3e08c3b8925ba126cce1249c1c5abcb5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "515f1222be535186af3bb417a6d0931d",
"/": "515f1222be535186af3bb417a6d0931d",
"main.dart.js": "ed95d8a1571fee385e1b7365de22968d",
"manifest.json": "8e1239982781c1c61e7f0ce1353d5a24",
"version.json": "904eab45d53825b6e14bda3a13524b6e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
