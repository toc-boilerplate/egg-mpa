'use strict'

const Controller = require('egg').Controller

class ResumeController extends Controller {
  async index() {
    const { ctx } = this

    await ctx.render('resume/index', { title: 'resume view' })
  }
}

module.exports = ResumeController
