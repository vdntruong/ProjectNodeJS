require('dotenv').config();
var path = require('path');
var logger = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var routeMapping = require('./router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// middlewares setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
	session({
		secret: process.env.SESSION_SECRET || 'something secret',
		resave: true,
		saveUninitialized: true,
		cookie: { secure: false, maxAge: 1000 * 60 * process.env.SESSION_MAXAGE }
	})
);

// public folder for client
app.use(express.static(path.join(__dirname, '../public')));

// routes setup
routeMapping.mapWeb('./routes/web', app);
routeMapping.mapApi('./routes/api', app);

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
