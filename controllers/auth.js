'use strict';

const userModel = require('../models/user');

// Sign In
exports.signinGet = (req, res) => {
	let { user, pass } = req.params;
	res.status(200).json({ user, pass });
};
exports.signinPost = (req, res) => {
	let { user, pass } = req.body;
	res.status(200).json({ user, pass });
};

// Sign Up
exports.signupGet = (req, res) => {
	res.status(200).json({ mess: 'oke sign up get' });
};
exports.signupPost = (req, res) => {
	res.status(200).json({ mess: 'oke sign up post' });
};

// Sign Out
exports.signout = (req, res) => {
	res.status(200).json({ mess: 'oke sign out' });
};
