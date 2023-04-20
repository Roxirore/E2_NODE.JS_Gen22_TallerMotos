const User = require('../models/users.model');

exports.validUsers = (req, res, next) => {
  const { name, email, password, role, status } = req.body;
  if (!name) {
    return res.status(400).json({
      status: 'error',
      message: 'the name is required',
    });
}

if (!email) {
  return res.status(400).json({
    status: 'error',
    message: 'the email is required',
  });
}

if (!password) {
  return res.status(400).json({
    status: 'error',
    message: 'the password is required',
  });
}

  if (!role) {
    return res.status(400).json({
      status: 'error',
      message: 'the role is required',
    });
  }

  if (!status) {
    return res.status(400).json({
      status: 'error',
      message: 'the status is required',
    });
  }

  next();
};

exports.validExistUser = async (req, res, next) => {
  const { userid } = req.params;

  const user = await User.findOne({
    where: {
      userid,
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `User with id: ${userid} not found`,
    });
  }

  req.user = user;
  next();
};