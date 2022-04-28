module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--disk-cache-size=0 --no-sandbox --headless --disable-dev-shm-usage --disable-gpu',
      },
      url: ['https://www.integration.propertyguru.com.sg/property-for-sale', 'https://www.integration.propertyguru.com.sg/singapore-property-listing/hdb'],
    },
    assert: {
      assertions: {
	'categories:performance': 'off',
    	'categories:accessibility': 'off',
        'cumulative-layout-shift':["warn"],
        'first-contentful-paint':'on',

        'csp-xss': 'off',
        'unsized-images': 'off',
        'uses-rel-preload': 'off',
        'uses-responsive-images': 'off',
        'uses-rel-preconnect': 'off',
        'preload-lcp-image': 'off',
        'offscreen-images': 'off',
        'unused-javascript': 'off',

        label: 'off',
        'content-width': 'off',
        'color-contrast': 'off',
        bypass: 'off',
        'tap-targets': 'off',

        'apple-touch-icon': 'off',
        'maskable-icon': 'off',
        'installable-manifest': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
      },
    },
  },
};
