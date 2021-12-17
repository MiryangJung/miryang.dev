const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer()({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'data'],
  },
})
