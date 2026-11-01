// 只是為了讓網頁可以「安裝」成 App；不快取任何東西，所以重新整理一定是最新版
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
