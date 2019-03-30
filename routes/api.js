var express = require('express');
var api = express.Router();

/* GET main API route. */
api.get('/', function(req, res, next) {
	res.render('pages/index', { title: 'API Area' });
});

module.exports = api;
