// importScripts("./main.js")
self.skipWaiting();


// self.worker.initFromManifest().then(()=>{});
// self.addEventListener("install", (event)=>{

// 	var urlsToCache = [
// 		'webapp/',
// 		'webapp/controller/Home.controller.js',
// 		'webapp/view/Home.view.xml',
// 		'webapp/index.html',
// 		'webapp/Component.js'
// 	];

// 	event.waitUntil(
// 		caches.open('northwind-cache-v1').then((cache)=>{
// 			cache.addAll(urlsToCache);
// 		})
// 	);
// });

self.addEventListener('fetch', function(event){

    caches.open('northwind-cache-v1').then(function(cache){

        fetch(event.request).then(function(response){
            // if (event.request.url.indexOf("sapui5") >= 0) {
                cache.put(event.request.url, response);
            // }
        });
    });

    event.respondWith(caches.match(event.request).then(function(response){
        return response || fetch(event.request);
    })
    );

});