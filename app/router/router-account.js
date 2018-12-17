module.exports = app => {
  const { router, controller } = app

  router.get('/account', controller.account.index)

  router.get('/account/home', controller.account.home)
}
