// const vuxLoader = require('vux-loader')
// const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

// module.exports = vuxLoader.merge(webpackConfig, {
//   plugins: ['vux-ui']
// })

module.exports = {
  configureWebpack:{
    resolve: {
      alias: {
        '@assets':'@/assets',
        '@common':'@/common',
        '@components':'@/components',
        '@network':'@/network',
        '@views':'@/views'
      }
    }
  }
}