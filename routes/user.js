var express = require('express');
var userRouter = express.Router();

/* mon user route. */
userRouter.get('/', function(req, res, next) {
	res.render('pages/index', { title: 'User Area' });
});

module.exports = userRouter;
