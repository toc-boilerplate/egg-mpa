const Service = require('egg').Service

class IndexService extends Service {
  async list() {
    // call php api
    return {
      name: 'position list service',
    }
  }
}

module.exports = IndexService
