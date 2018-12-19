const Controller = require('egg').Controller

class AccountController extends Controller {
  async index() {
    await this.ctx.render('index', { title: 'account index view' })
  }
  async home() {
    await this.ctx.render('home/home.html', { title: 'account home' })
  }
  async editName() {
    await this.ctx.render('home/edit-name.html', {
      title: 'account edit name ',
    })
  }
}

module.exports = AccountController
