// ==UserScript==
// @name         YouTube Shorts Redirector
// @namespace    http://tampermonkey.net/
// @version      2025-07-03
// @description  Automatically redirect to a regular video player from Youtube Shorts.
// @author       You
// @match        *://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    let lastUrl = location.href;

    new MutationObserver(() => {
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            onUrlChange(currentUrl);
        }
    }).observe(document, { subtree: true, childList: true });

    function onUrlChange(url) {
        if (url.includes("/shorts/")) {
            const newUrl = url.replace("/shorts/", "/watch/");
            window.location.replace(newUrl);
        }
    }
     onUrlChange(location.href);
})();
