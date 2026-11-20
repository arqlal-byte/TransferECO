/* TransferECO: caché exclusivo de la pantalla de acceso. Nunca interceptar Apps Script. */
const CACHE_NAME = "transfereco-acceso-v1";
const SHELL = ["./","./index.html","./manifest.webmanifest","./icons/icon-192.webp","./icons/icon-512.webp","./icons/apple-touch-icon.png"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  const request=event.request, url=new URL(request.url);
  if(request.method!=="GET" || url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  event.respondWith(fetch(request).then(response=>{
    if(response.ok){
      const copy=response.clone();
      caches.open(CACHE_NAME).then(cache=>cache.put(request,copy)).catch(()=>{});
    }
    return response;
  }).catch(()=>caches.match(request).then(hit=>hit||caches.match("./index.html"))));
});
