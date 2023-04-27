const catchAsync = require('../utils/catchAsync');
const User = require('./../models/users.model')


exports.signup = catchAsync (async (req, res, next) => {

        
        const { name, email, password, role } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    res.status(201).json({
      message: 'The new user was created',
      user,
    });


});