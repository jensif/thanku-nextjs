module.exports = {
  reactStrictMode: true,
}

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/thanku-nextjs/' : '',
}
