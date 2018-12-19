module.exports = app => {
  const { router, controller } = app

  router.get('/account', controller.account.home)

  router.get('/account/edit-name', controller.account.editName)
}
