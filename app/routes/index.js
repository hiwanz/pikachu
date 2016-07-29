module.exports = function (router, action) {
  // set up routes
  router
    // index action
    .get('/', action.index)

    // query user by id
    .get('/users/:id', (ctx) => {
      ctx.body = ctx.params.id;
    });

  return router.middleware();
};
