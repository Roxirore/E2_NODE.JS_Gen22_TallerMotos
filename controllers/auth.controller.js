const User = require('./../models/users.model')

exports.signup = async (req, res, next) => {
    try {
        
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

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Something went wrong',
        })
    }
};