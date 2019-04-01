var express = require('express');
var userRouter = express.Router();

/* mon user route. */
userRouter.get('/', function(req, res, next) {
	response.setHeader('author', 'truongvodainhat@gmail.com');
	response.setHeader('blog', 'vodainhattruong.wordpress.com');
	res.render('pages/index', { title: 'User Area' });
});

module.exports = userRouter;
