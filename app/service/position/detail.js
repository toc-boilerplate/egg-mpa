const Service = require('egg').Service

class DetailService extends Service {
  async detail() {
    // call php api
    return {
      name: 'detail service',
    }
  }
}

module.exports = DetailService
