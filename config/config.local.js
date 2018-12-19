const path = require('path')
const EasyWebpack = require('easywebpack-html')

module.exports = appInfo => {
  const config = (exports = {})

  config.development = {
    ignoreDirs: ['app/web', 'public'], // 指定过滤的目录（包括子目录）
  }

  config.view = {
    defaultViewEngine: 'viewHtml',
    defaultExtension: '.html',
    mapping: {
      '.html': 'viewHtml',
    },
    root: [path.join(appInfo.baseDir, 'app/view')].join(','),
  }

  exports.webpack = {
    port: 9000,
    webpackConfigList: EasyWebpack.getWebpackConfig(),
  }

  return config
}
