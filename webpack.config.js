module.exports = {
  framework: 'html',
  buildPath: 'app/view',
  publicPath: '/',
  entry: 'app/src/**/*.js',
  devtool: 'source-map',
  alias: {
    asset: 'asset',
    jquery: 'asset/js/jquery-3.2.1.min.js',
  },
  externals: {
    jquery: 'window.$',
  },
  loaders: {
    scss: true,
    // nunjucks: {
    //   options: {
    //     searchPaths: ['app/widget'],
    //   },
    // },
  },
  plugins: {},
  done() {},
}
