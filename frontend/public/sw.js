let cacheData = "appV1";
this.addEventListener("install", (event) => {
    this.skipWaiting();
    // event.waitUntil(
    //     caches.open(cacheData).then((cache) => {
    //         cache.addAll([
    //             '/static/js/main.chunk.js',
    //             '/static/js/0.chunk.js',
    //             '/static/js/bundle.js',
    //             '/static/css/main.chunk.css',
    //             '/manifest.json',
    //             'https://unpkg.com/unl-map-js@0.0.3/lib/unl-map-js.css',
    //             'https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css',
    //             '/index.html',
    //             '/',
    //             "/users"
    //         ])
    //     })
    // )
})
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "internet not working",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 