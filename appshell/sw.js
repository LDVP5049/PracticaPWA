const cacheName = 'news-v1';

const staticAssets=[
    './',
    './icono2.jpg',
    './index.html',
    './manifest.webmanifest',
    './app.css',
    './app.js'
];

self.addEventListener("Install", async e=>{
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e=> {
    self.clients.claim();
});

self.addEventListener('fetch', async e=>{
    const req= e.request;
    const url= new URL(req.url);
    if(url.origin == location.origin){
        e.respondWith(cachefirst(req));
    }
    else{
        //falta esto
    }
});