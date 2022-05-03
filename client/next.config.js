const withPWA = require('next-pwa');
// const runtimeCaching = require('ne`xt-pwa/cache');
module.exports = withPWA({
  env: {
    SITE_NAME: process.env.SITE_NAME
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true
    // runtimeCaching,
    // disable: process.env.NODE_ENV === 'development',
    // register: true
  }
});
