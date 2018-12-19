module.exports = app => {
  const { router, controller } = app

  router.get('/position', controller.position.index)

  router.get('/position/:id', controller.position.detail)
}
