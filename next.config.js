const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'data'],
  },
})
