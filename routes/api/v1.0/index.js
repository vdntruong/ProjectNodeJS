var express = require('express');
var router = express.Router();

/* GET main API route. */
router.get('/', function(req, res, next) {
	res.status(200).json({ message: 'API v1.0 Area' });
});

var mysql = require('mysql');
router.get('/yeahs', function(req, res, next) {
	var conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'test'
	});
	conn.query('select * from yeah where ?', req.body, (er, rs) => {
		if (er) res.json(er);
		res.status(200).json(rs);
	});
});

module.exports = router;
