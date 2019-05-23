var express = require('express');
var router = express.Router();

const userController = require('../../../controllers/user');

/* GET main API route. */
router.get('/', function(req, res, next) {
	if (req.isAuthenticated()) res.status(200).json({ message: 'API v1.0 Area' });
	res.status(200).json({ message: 'Bạn chưa đăng nhập' });
});

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);

module.exports = router;
