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
    "url": "webpack-runtime-476df76a8661f83b4971.js"
  },
  {
    "url": "app-c92b601dc103d7418ed5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-071684b8a605c0b41e47.js"
  },
  {
    "url": "index.html",
    "revision": "11c40a2be6a661e0ab43617ecace1960"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3ca65cfe0342a51401ece2a2b9538ee8"
  },
  {
    "url": "1.09a20be6d78fc2da1e11.css"
  },
  {
    "url": "component---src-pages-index-js.c3b43511dc6131b7e98f.css"
  },
  {
    "url": "component---src-pages-index-js-5178e38a7a13e1744ae4.js"
  },
  {
    "url": "1-3dd572d5375e85d0dd0c.js"
  },
  {
    "url": "0-ef224936683be970f70c.js"
  },
  {
    "url": "static/d/452/path---index-6a9-wedsvuCorh4BCCxxpCDYPtfg.json",
    "revision": "4b8029fa1308d80b8809ba03fc232d12"
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

workbox.routing.registerNavigationRoute("/instaloja/offline-plugin-app-shell-fallback/index.html", {
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