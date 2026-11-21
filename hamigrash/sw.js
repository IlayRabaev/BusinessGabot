/* Offline shell for המגרש השכונתי. Data itself comes live from Firestore. */
const CACHE="hamigrash-v4";
const SHELL=["./","index.html","manifest.webmanifest","firebase-config.js","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  const url=new URL(req.url);
  const cacheable=url.origin===location.origin||/gstatic\.com\/firebasejs|fonts\.(googleapis|gstatic)\.com/.test(url.href);
  if(!cacheable)return;
  if(req.mode==="navigate"||url.pathname.endsWith("index.html")||url.pathname.endsWith("firebase-config.js")){
    /* network first, so updates show up right away */
    e.respondWith(fetch(req).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(req,c));return r}).catch(()=>caches.match(req).then(r=>r||caches.match("index.html"))));return}
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{if(r.ok||r.type==="opaque"){const c=r.clone();caches.open(CACHE).then(x=>x.put(req,c))}return r})));
});
