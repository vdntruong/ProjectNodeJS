'use strict';

const userModel = require('../models/user');

exports.authUserPass = (user, pass) => {
	return new Promise((resolve, reject) => {
		userModel
			.getUserAuth(user)
			.then((rs) => {
				if (rs && rs.password == pass) return resolve(rs);
				else return reject(null);
			})
			.catch(() => {
				return reject(null);
			});
	});
};
exports.authUsername = (username) => {
	return new Promise((resolve, reject) => {
		userModel
			.getUserAuth(username)
			.then((rs) => {
				if (rs) return resolve(rs);
				else return reject(null);
			})
			.catch(() => {
				return reject(null);
			});
	});
};
