module.exports = {
  // index action
	index: (ctx, next) => {
    return ctx.render('index',{
      name: 'Pikachu!'
    });
	}
};
