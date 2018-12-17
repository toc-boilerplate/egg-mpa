'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/router-account')(app)
  require('./router/router-resume')(app)
}
