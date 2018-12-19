module.exports = app => {
  const { router, controller } = app

  router.get('/account', controller.account.index)

  router.get('/home', controller.account.home)

  router.get('/nunjucks', controller.account.nunjucks)
}
