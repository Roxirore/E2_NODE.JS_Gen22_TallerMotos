const express = require('express');
const usersController = require('./../controllers/users.controller');
const usersMiddlewares = require('./../middlewares/users.middlewares');
const validationMiddleware = require('./../middlewares/validations.middlewares');
const authMiddleware = require('./../middlewares/auth.middlewares');
const authController = require('../controllers/auth.controller');

const usersRouter = express.Router();

userRouter.use(authMiddleware.protect); 

usersRouter
.route('/')
.get(
    usersController.findAllUsers
    )
// .post(usersController.createUser)

usersRouter
.route('/:userid')
.get(
    usersMiddlewares.validExistUser,
    usersController.findOneUser
    )
.patch(
    usersMiddlewares.validExistUser,
    validationMiddleware.updateUserValidation,
    authMiddleware.protectAccountOwner,
    usersController.updateUser
    )
// .patch(usersController.updateUserClient)
.delete(
    usersMiddlewares.validExistUser,
    validationMiddleware.deleteUserValidation,
    authMiddleware.protectAccountOwner,
    usersController.deleteUser
    )

usersRouter
.route('/password/:userid')
.patch(
    validationMiddleware.updatedPasswordValidation,
    usersMiddlewares.validExistUser,
    authMiddleware.protectAccountOwner,
    authController.updatedPassword
    )

module.exports = usersRouter;