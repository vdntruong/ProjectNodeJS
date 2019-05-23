var express = require('express');
var authRouter = express.Router();
const authController = require('../../../controllers/auth');

authRouter.get('/signin', authController.signinGet).post('/signin', authController.signinPost);
authRouter.get('/signup', authController.signupGet).post('/signup', authController.signupPost);
authRouter.get('/signout', authController.signout);

module.exports = authRouter;
