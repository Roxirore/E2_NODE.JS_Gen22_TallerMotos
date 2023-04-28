const catchAsync = require('../utils/catchAsync');
const generateJWT = require('../utils/jwt');
const User = require('./../models/users.model');
const bcrypt = require('bcryptjs');

exports.signup = catchAsync (async (req, res, next) => {

        
    const { name, email, password, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
      role,
    });

    const token = await generateJWT(user.userid);

    res.status(201).json({
      message: 'The new user was created',
      user: {
        userid: user.userid,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });


});