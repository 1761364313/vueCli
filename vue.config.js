const path = require('path')
const argv = process.argv
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production' ? 'error' : true,
  productionSourceMap: false, // 生产环境不需要sourceMap
  crossorigin: 'anonymous',
  outputDir: '/test',
  publicPath: process.env.NODE_ENV == 'production' ? `//static.yunjiglobal.com/membercenter` : '/test',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src'),
        'common': path.resolve(__dirname, './src/common'),
        'components': path.resolve(__dirname, './src/components'),
        'store': path.resolve(__dirname, './src/store'),       
        'assets': path.resolve(__dirname, './src/assets'),
        'views': path.resolve(__dirname,'./src/views/')
      }
    }
  },
  devServer: {  
    port: '8019',   
    proxy: {
      '/api': {
        target: 'http://user-do-dev.yunjiglobal.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: [
        { from: /\/test/, to: path.posix.join('/test', 'index.html') }
      ],
    }
  }
}

