var
  Koa = require('koa'),
  config = require('./config'),
  pikapika = require('./pika');

var app = module.exports = new Koa();

// middlewares are imported here.
pikapika(app, config);

app.listen(config.server.port);
