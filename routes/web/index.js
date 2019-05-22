var express = require('express');
var router = express.Router();

/* Moved on User route */
router.use('/user', require('./controllers/user'));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('welcome', { title: 'BigBug Framed' });
});

module.exports = router;
