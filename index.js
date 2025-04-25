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
})();