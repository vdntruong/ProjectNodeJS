var express = require('express');
var authRouter = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authController = require('../../../controllers/auth');

passport.use(
	new LocalStrategy((username, password, done) => {
		authController.authUserPass(username, password).then((user) => {
			if (user) {
				return done(null, user);
			}
			return done(null, false);
		});
	})
);
passport.serializeUser(function(user, done) {
	done(null, user.username);
});
passport.deserializeUser(function(username, done) {
	authController.authUsername(username).then((user) => {
		if (user) {
			return done(null, user);
		}
		return done(null, false);
	});
});

authRouter.post(
	'/signin',
	passport.authenticate('local', {
		successRedirect: '/api/v1',
		failureRedirect: '/api/v2'
	})
);

module.exports = authRouter;
