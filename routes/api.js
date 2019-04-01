var express = require('express');
var api = express.Router();

/* GET main API route. */
api.get('/', function(req, res, next) {
	res.render('pages/index', { title: 'API Area' });
});

var mysql = require('mysql');
api.get('/yeahs', function(req, res, next) {
	var conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'test'
	});
	conn.query('select * from yeah where ?', req.body, (er, rs) => {
		if (er) res.json(er);
		res.json(rs);
	});
});

module.exports = api;
