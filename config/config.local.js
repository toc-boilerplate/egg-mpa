module.exports = appInfo => {
  const config = (exports = {})

  config.development = {
    ignoreDirs: ['app/web', 'public'], // 指定过滤的目录（包括子目录）
  }

  return config
}
