const express = require('express')
const usersController = require('./../controllers/users.controller')

const usersRouter = express.Router();

usersRouter
.route('/')
.get(usersController.findAllUsers)
// .post(usersController.createUser)

usersRouter
.route('/:userid')
.get(usersController.findOneUser)
.patch(usersController.updateUser)
// .patch(usersController.updateUserClient)
.delete(usersController.deleteUser)

module.exports = usersRouter;