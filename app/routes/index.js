module.exports = function (app, router, action) {
  // set up routes
  router
    .get('/', action.index)

    .get('/users/:id', (ctx) => {
      ctx.body = ctx.params.id;
    });

  app.use(router.middleware());
};
