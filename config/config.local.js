const path = require('path')
const EasyWebpack = require('easywebpack-html')

module.exports = appInfo => {
  const config = {}

  config.development = {
    ignoreDirs: ['app/web', 'public'], // 指定过滤的目录（包括子目录）
  }

  config.view = {
    defaultViewEngine: 'memoryfs',
    defaultExtension: '.html',
    mapping: {
      '.html': 'memoryfs',
    },
    root: [path.join(appInfo.baseDir, 'src/widget')].join(','),
  }

  exports.webpack = {
    port: 9000,
    webpackConfigList: EasyWebpack.getWebpackConfig(),
  }

  return config
}
