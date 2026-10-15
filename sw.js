const CACHE="human-os-v1-shell";
const APP_FILES=["./","./index.html","./styles.css","./data.js","./app.js","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_FILES)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
 const req=event.request;const url=new URL(req.url);
 if(req.method!=="GET"||url.origin!==self.location.origin)return;
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{if(res.ok&&req.destination!=="document"){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match("./index.html"))));
});
