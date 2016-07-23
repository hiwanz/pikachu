module.exports = function (app) {
  var Router = require('koa-router'),
      ctrl = require('../controllers/index');

  var router = new Router();

  router
    .get('/', ctrl.index)
    .get('/users/:id', (ctx, next) => {
      ctx.body = ctx.params.id;
    });

  app.use(router.middleware());
};
