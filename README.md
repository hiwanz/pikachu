Pikachu [![Build Status](https://travis-ci.org/hiwanz/pikachu.svg?branch=master)](https://travis-ci.org/hiwanz/pikachu) [![Dependency Status](https://david-dm.org/hiwanz/pikachu.svg)](https://david-dm.org/hiwanz/pikachu)
===========

A Koa v2 app boilerplate. 

quick start
=============

**Clone Pikachu:**

```sh
$ git clone https://github.com/hiwanz/pikachu.git
```

**Install dependencies:**

```sh
$ npm install
```

**Run Pikachu:**

```sh
$ npm start
```

or 

```sh
$ node --harmony ./app/index.js
```
Open [http://localhost:3000](http://localhost:3000)

**Run the test:**

```sh
$ npm test
```

Components
==========

Pikachu uses following npm package : 

* [koa-static](https://github.com/koajs/static) - Koa static file serving middleware, wrapper for koa-send.
* [koa-router](https://github.com/alexmingoia/koa-router) - Router middleware for koa.
* [koa-views](https://github.com/queckezz/koa-views) - Template rendering middleware for koa.
* [koa-bodyparser](https://github.com/koajs/bodyparser) - A body parser for koa, base on co-body. support json, form and text type body.
* [ect](https://github.com/baryshev/ect) - Performance focused JavaScript template engine with embedded CoffeeScript syntax.
* [waterline](https://github.com/balderdashy/waterline) - An adapter-based ORM for Node.js with support for mysql, mongo, postgres, redis, and more

License
=========

The Pikachu is licensed under the [MIT License](LICENSE.md)