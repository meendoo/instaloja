/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-04eda04c9ec30934b9cf.js"
  },
  {
    "url": "app-03833ab4f6aa2e140c2e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-071684b8a605c0b41e47.js"
  },
  {
    "url": "index.html",
    "revision": "6f531c942672c3466846bd5e8c8bb82f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "100158b02a5874bc4d43d05663d189df"
  },
  {
    "url": "1.3f1c5ca8b2e1286e0132.css"
  },
  {
    "url": "component---src-pages-index-js.bc17b177e63ecf53f907.css"
  },
  {
    "url": "component---src-pages-index-js-ec14f5680165f7a2255b.js"
  },
  {
    "url": "1-3dd572d5375e85d0dd0c.js"
  },
  {
    "url": "0-8c334dd7241efb4b5ea2.js"
  },
  {
    "url": "static/d/342/path---index-6a9-5w7THyhETFISgG5GAmvSB0mXzHM.json",
    "revision": "04935ed809c0556abad7f4a4455155d6"
  },
  {
    "url": "component---src-pages-404-js-69315dedc2b06c4f9a57.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "bd80a12cbe7723af009240db29f8eb57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/instaloja/public/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});