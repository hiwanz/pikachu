var Koa = require('koa'),
    views = require('koa-views'),
    config = require('./config'),
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

// initialize render helper,must be used before any router is used
app.use(
  views(config.template.path, config.template.options)
);
// set up app with router
setUp(app);

app.listen(config.server.port);
