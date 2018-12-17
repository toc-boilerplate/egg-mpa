'use strict'
const EasyWebpack = require('easywebpack-html')

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544757131189_2086'

  // add your config here
  config.middleware = []

  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
    mapping: {
      '.html': 'nunjucks',
    },
  }

  exports.webpack = {
    port: 9000,
    webpackConfigList: EasyWebpack.getWebpackConfig(),
  }

  config.alinode = {
    appid: process.env.EGG_ALINODE_APPID || '',
    secret: process.env.EGG_ALINODE_SECRET || '',
  }

  return config
}
