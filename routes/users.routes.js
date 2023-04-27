const express = require('express');
const usersController = require('./../controllers/users.controller');
const usersMiddlewares = require('./../middlewares/users.middlewares');
const validationMiddleware = require('./../middlewares/validations.middlewares');

const usersRouter = express.Router();

usersRouter
.route('/')
.get(usersController.findAllUsers)
// .post(usersController.createUser)

usersRouter
.route('/:userid')
.get(usersMiddlewares.validExistUser,usersController.findOneUser)
.patch(usersMiddlewares.validExistUser,validationMiddleware.updateUserValidation,usersController.updateUser)
// .patch(usersController.updateUserClient)
.delete(usersMiddlewares.validExistUser,validationMiddleware.deleteUserValidation,usersController.deleteUser)

module.exports = usersRouter;