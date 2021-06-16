const path = require('path')
const production = process.env.NODE_ENV !== 'development'
const publicPath = process.env.PUBLIC_PATH
console.log(process.env.NODE_ENV)

const configureWebpack = {
  output: {
    filename: `js/[name].js${production ? '?t=[chunkhash]' : ''}`,
    chunkFilename: `js/[name].js${production ? '?t=[chunkhash]' : ''}`
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@js': path.resolve(__dirname, './src/assets/js/'),
      '@images': path.resolve(__dirname, './src/assets/images/'),
      '@api': path.resolve(__dirname, './src/api/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@css': path.resolve(__dirname, './src/assets/css/')
    }
  }
}

module.exports = {
  publicPath,
  css: {
    extract: {
      filename: `css/[name].css${production ? '?t=[contenthash]' : ''}`,
      chunkFilename: `css/[name].css${production ? '?t=[contenthash]' : ''}`
    }
  },
  chainWebpack: config => {
    // 删除静态资源预加载
    config.plugins.delete('prefetch')

    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('file-loader')
      .options({
        name: `img/[name].[hash:8].[ext]${production ? '?t=[contenthash]' : ''}`
      })
    config.module.rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: `img/[name].[hash:8].[ext]${production ? '?t=[contenthash]' : ''}`
      })
  },
  configureWebpack,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api/': {
        target: '/'
      },
    }
  },
}