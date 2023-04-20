const express = require('express');
const validationMiddleware = require('./../middlewares/validations.middlewares');
const authController = require('./../controllers/auth.controller');

const authRouter = express.Router();



authRouter.post('/signup', validationMiddleware.createUserValidation, authController.signup);

module.exports = authRouter;