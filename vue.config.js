const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
    // proxy: {
    //     '/gateway': {
    //         target: 'https://m.maizuo.com/',
    //         changeOrigin: true,
    //     }
    // }
  }
}
