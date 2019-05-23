var express = require('express');
var router = express.Router();

/* Moved on Auth route */
router.use('/auth', require('./controllers/auth'));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('welcome', { title: 'BigBug Framed' });
});

module.exports = router;
