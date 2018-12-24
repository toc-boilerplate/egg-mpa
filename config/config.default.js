const path = require('path')

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
    root: [
      path.join(appInfo.baseDir, 'app/view'),
      path.join(appInfo.baseDir, 'src/widget'),
    ].join(','),
  }

  exports.cluster = {
    listen: {
      port: 7100,
    },
  }

  config.alinode = {
    appid: process.env.EGG_ALINODE_APPID || '',
    secret: process.env.EGG_ALINODE_SECRET || '',
  }

  config.clusterClient = {
    responseTimeout: 600000,
  }

  return config
}
