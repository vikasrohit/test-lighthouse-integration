module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--disk-cache-size=0 --no-sandbox --headless --disable-dev-shm-usage --disable-gpu',
      },
      url: ['https://www.integration.propertyguru.com.sg/singapore-property-listing/hdb'],
    },
    assert: {
      assertions: {
        'cumulative-layout-shift':["warn"],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
