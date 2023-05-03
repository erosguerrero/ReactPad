if (!self.define) {
    let e, i = {};
    const o = (o,n)=>(o = new URL(o + ".js",n).href,
    i[o] || new Promise((i=>{
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = o,
            e.onload = i,
            document.head.appendChild(e)
        } else
            e = o,
            importScripts(o),
            i()
    }
    )).then((()=>{
        let e = i[o];
        if (!e)
            throw new Error(`Module ${o} didn’t register its module`);
        return e
    }
    )));
    self.define = (n,r)=>{
        const t = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (i[t])
            return;
        let d = {};
        const s = e=>o(e, t)
          , c = {
            module: {
                uri: t
            },
            exports: d,
            require: s
        };
        i[t] = Promise.all(n.map((e=>c[e] || s(e)))).then((e=>(r(...e),
        d)))
    }
}
define(["./workbox-d249b2c8"], (function(e) {
    "use strict";
    self.addEventListener("message", (e=>{
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    }
    )),
    e.precacheAndRoute([{
        url: "bootstrap.bundle-5.1.3.js",
        revision: "d1062656de4a2da8790442c748f902db"
    }, {
        url: "favicon.ico",
        revision: "92841a65c25462b6cfd48fd4950663e3"
    }, {
        url: "index.html",
        revision: "7d8ecb19ae5cadebd9eb7314da527ad8"
    }, {
        url: "logo192.png",
        revision: "33dbdd0177549353eeeb785d02c294af"
    }, {
        url: "logo512.png",
        revision: "917515db74ea8d1aee6a246cfbcc0b45"
    }, {
        url: "manifest.json",
        revision: "b860b15119372c3ab79be0e780e8d214"
    }, {
        url: "noIntenert.html",
        revision: "7fbe2f8f6f845dc872f56d0f659babf3"
    }, {
        url: "offline.html",
        revision: "14c121bbb90d70f9f8443e8ea2a4674a"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}
));
//# sourceMappingURL=sw.js.map

self.addEventListener('fetch', function(event) {
    if (event.request.method === 'GET' && event.request.url === self.location.origin + '/') {
        event.respondWith(fetch('/offline.html'));
    } else {
        event.respondWith(fetch(event.request).then(function(response) {
            return response;
        }).catch(function() {
            return caches.match('/offline.html');
        }));
    }
});
