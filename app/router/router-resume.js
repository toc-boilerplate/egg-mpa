module.exports = app => {
  const { router, controller } = app

  router.get('/resume', controller.resume.index)
}
