const express = require('express');
const usersController = require('./../controllers/users.controller');
const usersMiddlewares = require('./../middlewares/users.middlewares');
const validationMiddleware = require('./../middlewares/validations.middlewares');
const authMiddleware = require('./../middlewares/auth.middlewares');

const usersRouter = express.Router();

usersRouter
.route('/')
.get(authMiddleware.protect,usersController.findAllUsers)
// .post(usersController.createUser)

usersRouter
.route('/:userid')
.get(authMiddleware.protect,usersMiddlewares.validExistUser,usersController.findOneUser)
.patch(authMiddleware.protect,usersMiddlewares.validExistUser,validationMiddleware.updateUserValidation,usersController.updateUser)
// .patch(usersController.updateUserClient)
.delete(authMiddleware.protect,usersMiddlewares.validExistUser,validationMiddleware.deleteUserValidation,usersController.deleteUser)

module.exports = usersRouter;