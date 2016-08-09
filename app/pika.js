// all middlewares are used here.
var
  serve = require('koa-static'),
  views = require('koa-views'),
  Router = require('koa-router'),
  controller = require('./controllers'),
  routing = require('./routes');

module.exports = function (app, config) {
  // logger
  app.use((ctx, next) => {
    const start = new Date;
    return next().then(() => {
      const ms = new Date - start;
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
  });

  // static file serving
  app.use(
    serve(config.static_dir.root,config.static_dir.options)
  );

  // initialize render helper,must be used before any router is used
  app.use(
    views(config.template.path, config.template.options)
  );

  // set up actions with routes
  app.use(
    routing(new Router, controller)
  );
};
