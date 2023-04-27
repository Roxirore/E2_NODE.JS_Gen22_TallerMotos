const catchAsync = require('../utils/catchAsync');
const User = require('./../models/users.model')


exports.signup = catchAsync (async (req, res, next) => {

        
        const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: 'The new user was created',
      user,
    });


});