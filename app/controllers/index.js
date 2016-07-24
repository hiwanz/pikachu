module.exports = {
  // index action
  index: (ctx) => {
    return ctx.render('index', {
      name: 'Pikachu!'
    });
  }
};
