const isProd = process.env.NODE_ENV === 'production'
const fs = require('fs-extra')
const path = require('path')

module.exports = {
  type: 'web',
  framework: 'html',
  buildPath: 'app/view',
  publicPath: isProd ? '/public/' : '//localhost:9000',
  entry: 'src/pages/**/*.js',
  devtool: 'source-map',
  alias: {
    js: 'src/assets/js',
    img: 'src/assets/img',
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
    copy: [
      {
        from: 'src/widget/',
        to: 'widget',
      },
    ],
  },
  done() {
    fs.removeSync(path.join(__dirname, 'app/public'))
    fs.moveSync(
      path.join(__dirname, 'app/view/css/'),
      path.join(__dirname, 'app/public/css')
    )
    fs.moveSync(
      path.join(__dirname, 'app/view/js/'),
      path.join(__dirname, 'app/public/js')
    )
  },
  install: {
    check: false,
    npm: 'npm',
  },
}
