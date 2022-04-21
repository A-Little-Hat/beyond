const withPWA = require('next-pwa');
module.exports = withPWA({
  env: {
    SITE_NAME: process.env.SITE_NAME
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
  }
});
