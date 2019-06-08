'use strict';
const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require(path.join(__dirname, '../../../controllers/user'));

const ensureAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) return next();
	return res.status(400).json({ mess: 'Signin First' });
};

/* GET main API route. */
router.get('/', ensureAuthenticated, function(req, res, next) {
	res.status(200).json({ message: 'API v1.0 Area. Authenticated' });
});
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);

module.exports = router;
