var cdnBase = 'https://sapui5.hana.ondemand.com';
var urlsToCache = [
	'/controller/Resume.controller.js',
	'/view/Resume.view.xml',
	'/index.html',
	'/index.js',
	'/Component.js',
	'/css/style.css',
	'/manifest.json?sap-language=EN',
	'/model/models.js',
	'/cards/education/education.json',
	'/cards/experience/experience.json',
	'/cards/skills/skills.json',
	'/rg.jpg',
	'/rishabh.jpg',
	`${cdnBase}/resources/sap-ui-core.js`,
	`${cdnBase}/resources/sap/m/library-preload.js`,
	`${cdnBase}/resources/sap/m/messagebundle_en_US.properties`,
	`${cdnBase}/resources/sap/m/themes/sap_fiori_3/library.css`,
	`${cdnBase}/resources/sap/ui/core/library-preload.js`,
	`${cdnBase}/resources/sap/ui/core/messagebundle_en_US.properties`,
	`${cdnBase}/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Regular.woff2`,
	`${cdnBase}/resources/sap/ui/core/themes/sap_fiori_3/library.css`,
	`${cdnBase}/resources/sap/ui/layout/library-preload.js`,
	`${cdnBase}/resources/sap/ui/layout/messagebundle_en_US.properties`,
	`${cdnBase}/resources/sap/ui/layout/themes/sap_fiori_3/library.css`
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open('app-cache-v1').then((cache) => {
			return cache.addAll(urlsToCache);
			// cache.addAll(resourcesUrlsToCache);
		})
	);
});

self.addEventListener('fetch', function (event) {
	console.log(event.request.url);
	event.respondWith(
		caches.open('app-cache-v1').then(function (cache) {
			return cache.match(event.request).then(function (response) {
				return response || fetch(event.request).then(function (response) {
					// if (event.request.url.indexOf("sapui5") >= 0) {
						cache.put(event.request.url, response.clone());
					// }
					return response;
				});
			});
		})
	);
});

// self.addEventListener('fetch', event => {
// 	// var requestClone = event.request.clone();
// 	// event.respondWith(caches.match(event.request).then((cacheResponse) => {
// 	// 	return cacheResponse || fetch(event.request).then((response) => {
// 	// 		var responseClone = response.clone();
// 	// 		if (response && response.status === 200) {
// 	// 			// var responseToCache = response.clone();
// 	// 			//valid webrequest, clone and cache the result
// 	// 			caches.open('app-cache-v1').then(function (cache) {
// 	// 				cache.put(requestClone, responseClone);
// 	// 			});
// 	// 			// return response;
// 	// 		}
// 	// 	});
// 	// }));

// });