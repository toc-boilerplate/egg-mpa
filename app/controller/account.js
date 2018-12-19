const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index', { title: 'account index view' })
  }
  async home() {
    await this.ctx.render('home/home.html', { title: 'account home' })
  }
  async nunjucks() {
    await this.ctx.render('nunjucks/index.html', { title: 'nunjucks page' })
  }
}

module.exports = HomeController
