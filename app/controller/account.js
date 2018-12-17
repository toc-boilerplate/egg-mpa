const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    await this.ctx.render('account/index', { title: 'account index view' })
  }
  async home() {
    await this.ctx.render('account/home', { title: 'account home' })
  }
}

module.exports = HomeController
