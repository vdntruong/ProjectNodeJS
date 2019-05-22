var express = require('express');
var userRouter = express.Router();

/* mon user route. */
userRouter.get('/', function(req, res, next) {
	res.send('User Area');
});

module.exports = userRouter;
