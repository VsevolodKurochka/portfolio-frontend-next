const { i18n } = require('./next-i18next.config');
const withImages = require('next-images')

module.exports = {
  ...withImages(),
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  i18n
}
