/* Yandex Advertising Network web integration. IDs live in ads-config.js. */
(function () {
    const config = window.DEVICES_ADS_CONFIG || {};
    const validId = id => typeof id === 'string' && /^R-A-\d+(?:-\d+)?$/.test(id);
    let interstitialCounter = 0;
    let bannerQueued = false;
    let lastInterstitialAt = 0;

    if (!config.enabled) return;

    window.yaContextCb = window.yaContextCb || [];
    if (!document.querySelector('script[data-yandex-context-loader]')) {
        const loader = document.createElement('script');
        loader.async = true;
        loader.src = 'https://yandex.ru/ads/system/context.js';
        loader.dataset.yandexContextLoader = 'true';
        document.head.appendChild(loader);
    }

    function renderBanner() {
        const section = document.getElementById('yandexBannerSection');
        const slot = document.getElementById('yandexBannerSlot');
        if (!section || !slot || !validId(config.bannerBlockId) || bannerQueued) return;
        bannerQueued = true;
        section.classList.remove('hidden');
        window.yaContextCb.push(function () {
            const manager = window.Ya?.Context?.AdvManager;
            if (!manager) return;
            manager.render({
                blockId: config.bannerBlockId,
                renderTo: 'yandexBannerSlot',
                async: true
            });
        });
    }

    window.devicesShowInterstitial = function () {
        const every = Math.max(1, Number(config.fullscreenEveryNavigations) || 3);
        interstitialCounter += 1;
        if (interstitialCounter % every !== 0) return;
        if (!validId(config.fullscreenBlockId)) return;

        const now = Date.now();
        if (now - lastInterstitialAt < 5 * 60 * 1000) return;

        window.yaContextCb.push(function () {
            const manager = window.Ya?.Context?.AdvManager;
            if (!manager) return;
            const platform = manager.getPlatform?.() === 'desktop' ? 'desktop' : 'touch';
            lastInterstitialAt = Date.now();
            manager.render({
                blockId: config.fullscreenBlockId,
                type: 'fullscreen',
                platform
            });
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderBanner, { once: true });
    } else {
        renderBanner();
    }
})();
