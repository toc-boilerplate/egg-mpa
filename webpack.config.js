module.exports = {
  framework: 'html',
  entry: 'app/web/pages/**/*.js',
  devtool: 'source-map',
  template: 'app/web/components/layout.html',
  buildPath: 'app/view',
  // alias: {
  //   asset: 'asset',
  //   jquery: 'asset/js/jquery-3.2.1.min.js',
  // },
  // externals: {
  //   jquery: 'window.$',
  // },
  loaders: {
    scss: true,
    nunjucks: {
      options: {
        searchPaths: ['app/web/components', 'app/web/pages'],
      },
    },
  },
  plugins: {},
  done() {},
}
