'use strict';
const Sequelize = require('sequelize');
const db = require('../vendor/appDB');
const Op = Sequelize.Op;

const User = db.define('user', {
	username: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: { type: Sequelize.STRING },
	password: { type: Sequelize.STRING }
});

exports.getAll = () => {
	return new Promise((resolve, reject) => {
		db
			.authenticate()
			.then(() => {
				User.findAll().then((users) => {
					if (users == null) return reject(new Error('Error'));
					resolve(users.map((user) => user.dataValues));
				});
			})
			.catch(() => {
				return reject(new Error('Disconnect'));
			});
	});
};
exports.getById = (id) => {
	return new Promise((resolve, reject) => {
		db
			.authenticate()
			.then(() => {
				User.findByPk(id).then((user) => {
					if (user == null) return reject(new Error('Error'));
					resolve(user.dataValues);
				});
			})
			.catch(() => {
				return reject(new Error('Disconnect'));
			});
	});
};
exports.getUserAuth = (user) => {
	return new Promise((resolve, reject) => {
		db
			.authenticate()
			.then(() => {
				User.findAll({
					where: {
						[Op.or]: [ { username: user }, { email: user } ]
					}
				}).then((users) => {
					if (users == null) return reject(new Error('Error'));
					resolve(users.map((user) => user.dataValues)[0]);
				});
			})
			.catch(() => {
				return reject(new Error('Disconnect'));
			});
	});
};

// db.sync().then(
// 	(exports.getAll = () => {
// 		return new Promise((resolve, reject) => {
// 			db
// 				.authenticate()
// 				.then(() => {
// 					User.findAll().then((users) => {
// 						if (users == null) return reject(new Error('Error'));
// 						resolve(users.map((user) => user.dataValues));
// 					});
// 				})
// 				.catch(() => {
// 					return reject(new Error('Disconnect'));
// 				});
// 		});
// 	}),
// 	(exports.getById = (id) => {
// 		return new Promise((resolve, reject) => {
// 			db
// 				.authenticate()
// 				.then(() => {
// 					User.findByPk(id).then((user) => {
// 						if (user == null) return reject(new Error('Error'));
// 						resolve(user.dataValues);
// 					});
// 				})
// 				.catch(() => {
// 					return reject(new Error('Disconnect'));
// 				});
// 		});
// 	})
// );
