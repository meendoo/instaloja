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
    "url": "webpack-runtime-26640926c45ae4bbbfc5.js"
  },
  {
    "url": "app-8bd565c4a318463d0fc9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-071684b8a605c0b41e47.js"
  },
  {
    "url": "index.html",
    "revision": "55ea0931bdf6c9c3a05da1bc93104073"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a0679d279f1b42d40a61d72cbe72e532"
  },
  {
    "url": "1.be055dd854fff0019bd9.css"
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
    "url": "0-66f2d333689dcb548431.js"
  },
  {
    "url": "static/d/413/path---index-6a9-reoReJbmRpqh2mE6xS2k9rjv8w.json",
    "revision": "5b0e00634e63fbd69193959477bb9ae4"
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

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
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