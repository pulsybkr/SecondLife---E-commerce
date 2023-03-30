/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.frandroid.com',
      'mobile.free.fr',
      'static.fnac-static.com',
      'images.frandroid.com',
      'd1eh9yux7w8iql.cloudfront.net',
      'assets.swappie.com',
      'www.maisonelectro.ma',
      'cdn.allotech-dz.com',
      'www.cdiscount.com',
      'cdn.allotech-dz.com',
      '5.imimg.com',
      'ladepeche.ma',
      'cdn.hoanghamobile.com',
      'cf4.certideal.com',
      'www.refurbished.fr',
      'fscl01.fonpit.de',
      'images.samsung.com',
      'cdn.evkur.com.tr',
      'www.tunisianet.com.tn',
      'www.xtmobile.vn',
      'encrypted-tbn0.gstatic.com',
      'images.frandroid.com'
    ]
  }
}


module.exports = withVideos()

module.exports = nextConfig
