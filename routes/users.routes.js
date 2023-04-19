const express = require('express')
const usersController = require('./../controllers/users.controller')

const usersrouter = express.Router();

usersrouter
.route('/')
.get(usersController.findAllUsers)
.post(usersController.createUser)

usersrouter
.route('/:userid')
.get(usersController.findOneUser)
.patch(usersController.updateUser)
// .patch(usersController.updateUserClient)
.delete(usersController.deleteUser)

module.exports = usersrouter;