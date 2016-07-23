module.exports = {
	index: (ctx, next) => {
    return ctx.render('index',{
      name: 'Pikachu!'
    });
	}
};
