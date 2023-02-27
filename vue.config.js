const path = require('path')
module.exports = {
  outputDir: './build',
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      views: '@/views',
      components: '@/components'
    }
  }
}
