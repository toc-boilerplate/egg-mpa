const Controller = require('egg').Controller

class PositionController extends Controller {
  async index() {
    await this.ctx.render('position/index.html', {
      title: 'Position index view',
    })
  }
  async detail() {
    await this.ctx.render('position/detail.html', {
      title: 'Position edit name ',
    })
  }
}

module.exports = PositionController
