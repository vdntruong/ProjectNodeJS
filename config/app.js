require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		cookie: { secure: false, maxAge: 1000 * 60 * process.env.SESSION_MAXAGE }
	})
);

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../vendor')));

// var config = require(path.join(__dirname, '/config')).database.mysql;
// app.use(function(req, res, next) {
// 	res.locals.connection = mysql.createConnection({
// 		host: config.host,
// 		user: config.user,
// 		password: config.password,
// 		database: config.database
// 	});
// 	res.locals.connection.connect();
// 	next();
// });

app.use('/', require('../routes/web/web'));
app.use('/api', require('../routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('errors/error');
});

module.exports = app;
