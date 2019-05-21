var express = require('express');
var web = express.Router();

/* moved on user route */
web.use('/user', require('../user'));

/* GET home page. */
web.get('/', function(req, res, next) {
	res.render('introduce', {
		title: 'Frames Builded',
		intro: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
		author: '@author: Nhat Truong'
	});
});

module.exports = web;
