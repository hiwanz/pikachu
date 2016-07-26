var Koa = require('koa'),
  serve = require('koa-static'),
  config = require('./config'),
  views = require('koa-views'),
  Router = require('koa-router'),
  controller = require('./controllers'),
  setUp = require('./routes');


var app = module.exports = new Koa();

// logger
app.use((ctx, next) => {
  const start = new Date;
  return next().then(() => {
    const ms = new Date - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

// static file serving
app.use(serve('./static'));

// initialize render helper,must be used before any router is used
app.use(
  views(config.template.path, config.template.options)
);

// set up actions with routes
setUp(app, new Router, controller);

app.listen(config.server.port);
