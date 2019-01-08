const fs = require('fs-extra')
const path = require('path')
const AutoImportWebpackPlugin = require('auto-import-loader')

module.exports = {
  type: 'web',
  framework: 'html',
  buildPath: 'app/view',
  publicPath: '/public/',
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
  // module: {
  //   rules: [
  //     { babel: false },
  //     {
  //       test: /\.jsx?$/,
  //       exclude: [/node_modules/],
  //       use: [
  //         {
  //           loader: 'babel-loader',
  //         },
  //         {
  //           loader: 'auto-import-loader',
  //           options: {
  //             entry: 'src/pages',
  //             asset: 'src/assets/js',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  plugins: [
    {
      provide: {
        $: 'jquery',
        _: 'lodash',
      },
    },
    {
      copy: [
        {
          from: 'src/widget/',
          to: 'widget',
        },
      ],
    },
    new AutoImportWebpackPlugin(),
  ],
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
    fs.moveSync(
      path.join(__dirname, 'app/view/img/'),
      path.join(__dirname, 'app/public/img')
    )
  },
}
