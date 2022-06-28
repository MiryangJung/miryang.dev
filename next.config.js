const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: true,
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'bs.js'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'data'],
  },
  images: {
    domains: ['github.com'],
  },
})
