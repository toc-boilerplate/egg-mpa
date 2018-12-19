const path = require('path')

module.exports = {
  framework: 'html',
  buildPath: 'app/view',
  publicPath: '//localhost:9000',
  entry: 'app/src/**/*.js',
  devtool: 'source-map',
  alias: {
    asset: 'asset',
    jquery: 'asset/js/jquery-3.2.1.min.js',
  },
  externals: {
    jquery: 'window.$',
  },
  lib: ['jquery', 'lodash'],
  loaders: {
    scss: true,
  },
  plugins: {
    provide: {
      $: 'jquery',
      _: 'lodash',
    },
    // extract: {
    //   chunkFilename: '../dist/css/[name].[chunkhash:8].css',
    // },
  },
  done() {},
  install: {
    check: false,
    npm: 'npm',
  },
  // customize(webpackConfig) {
  //   webpackConfig.output.filename = '../dist/js/[name].[chunkhash:8].js'
  //   webpackConfig.output.chunkFilename =
  //     '../dist/js/chunk/[name].[chunkhash:8].js'
  //   return webpackConfig
  // },
}
