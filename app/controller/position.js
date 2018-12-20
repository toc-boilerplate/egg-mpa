const Controller = require('egg').Controller

class PositionController extends Controller {
  async index() {
    const data = await this.service.position.index.list()
    await this.ctx.render('position/index', data)
  }
  async detail() {
    await this.ctx.render('position/detail', {
      title: 'Position edit name ',
    })
  }
}

module.exports = PositionController
