const CACHE = "summergoals-v9";
const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("").map(c => "./asl/" + c + ".svg");
const NUMBERS = [1,2,3,4,6,7,8,9].map(n => "./asl/n" + n + ".jpg");
const WORDIMGS = ["./img/apple.jpg", "./img/arm.jpg", "./img/baby.jpg", "./img/bag.jpg", "./img/banana.jpg", "./img/bank.jpg", "./img/beach.jpg", "./img/bed.jpg", "./img/bicycle.jpg", "./img/bird.jpg", "./img/boat.jpg", "./img/book.jpg", "./img/bread.jpg", "./img/bridge.jpg", "./img/building.jpg", "./img/bus.jpg", "./img/butter.jpg", "./img/cake.jpg", "./img/camera.jpg", "./img/car.jpg", "./img/cat.jpg", "./img/chair.jpg", "./img/cheese.jpg", "./img/chicken.jpg", "./img/chocolate.jpg", "./img/church.jpg", "./img/cloud.jpg", "./img/coffee.jpg", "./img/computer.jpg", "./img/cow.jpg", "./img/doctor.jpg", "./img/dog.jpg", "./img/door.jpg", "./img/ear.jpg", "./img/egg.jpg", "./img/elephant.jpg", "./img/eyes.jpg", "./img/family.jpg", "./img/fire.jpg", "./img/fish.jpg", "./img/flower.jpg", "./img/foot.jpg", "./img/fork.jpg", "./img/glasses.jpg", "./img/hand.jpg", "./img/head.jpg", "./img/heart.jpg", "./img/horse.jpg", "./img/hospital.jpg", "./img/house.jpg", "./img/juice.jpg", "./img/key.jpg", "./img/knife.jpg", "./img/leg.jpg", "./img/lion.jpg", "./img/meat.jpg", "./img/milk.jpg", "./img/money.jpg", "./img/moon.jpg", "./img/mountain.jpg", "./img/mouse.jpg", "./img/mouth.jpg", "./img/nose.jpg", "./img/orange.jpg", "./img/paper.jpg", "./img/pencil.jpg", "./img/phone.jpg", "./img/pizza.jpg", "./img/plane.jpg", "./img/plate.jpg", "./img/police.jpg", "./img/rabbit.jpg", "./img/rain.jpg", "./img/restaurant.jpg", "./img/rice.jpg", "./img/salad.jpg", "./img/salt.jpg", "./img/school.jpg", "./img/sea.jpg", "./img/shirt.jpg", "./img/shoes.jpg", "./img/shop.jpg", "./img/snake.jpg", "./img/snowpic.jpg", "./img/soup.jpg", "./img/spoon.jpg", "./img/star.jpg", "./img/sugar.jpg", "./img/sun.jpg", "./img/taxi.jpg", "./img/tea.jpg", "./img/train.jpg", "./img/tree.jpg", "./img/trousers.jpg", "./img/tv.jpg", "./img/vegetables.jpg", "./img/videogame.jpg", "./img/watch.jpg", "./img/water.jpg", "./img/wind.jpg", "./img/window.jpg", "./img/wine.jpg"];
const ASSETS = ["./", "./index.html", "./data.js", "./data2.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", ...LETTERS, ...NUMBERS, ...WORDIMGS];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Code (HTML/JS/manifest): network-first, so edits show up immediately when online,
// with the cache as the offline fallback. Images/fonts: cache-first, they never change.
const CODE = /\.(html|js|webmanifest)$/i;

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return; // video/CDN go straight to network
  const url = new URL(req.url);
  const isCode = req.mode === "navigate" || CODE.test(url.pathname) || url.pathname.endsWith("/");

  if (isCode){
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() =>
        caches.match(req, {ignoreSearch: true}).then(hit => hit || caches.match("./index.html"))
      )
    );
    return;
  }
  e.respondWith(
    caches.match(req, {ignoreSearch: true}).then(hit =>
      hit || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      })
    )
  );
});
