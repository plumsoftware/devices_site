/*
 * Yandex Advertising Network website ad units.
 * Replace the empty strings with IDs from the WEB version of Yandex Advertising Network.
 * Website ad unit IDs normally start with R-A-. App/mobile SDK IDs are not interchangeable.
 */
window.DEVICES_ADS_CONFIG = {
    enabled: true,
    bannerBlockId: 'R-A-20336948-1',
    fullscreenBlockId: 'R-A-20336948-2',
    // Show a fullscreen ad after this many real section changes (not on initial page load).
    fullscreenEveryNavigations: 2
};
