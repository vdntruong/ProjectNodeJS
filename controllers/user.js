'use strict';

const userModel = require('../models/user');
exports.getAll = (req, res) => {
	userModel
		.getAll()
		.then((rs) => {
			res.status(200).json({ rs });
		})
		.catch((er) => {
			console.log(er);
			res.status(500).json({ er });
		});
};
exports.getById = (req, res) => {
	let userId = req.params.id;
	if (userId == null) res.status(400).json({ er: 'Worng ID!' });
	userModel
		.getById(userId)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((er) => {
			console.log(er);
			res.status(500).json({ er });
		});
};
