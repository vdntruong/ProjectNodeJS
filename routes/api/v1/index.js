var express = require('express');
var router = express.Router();

const userController = require('../../../controllers/user');

/* GET main API route. */
router.get('/', function(req, res, next) {
	res.status(200).json({ message: 'API v1.0 Area' });
});

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);

module.exports = router;
