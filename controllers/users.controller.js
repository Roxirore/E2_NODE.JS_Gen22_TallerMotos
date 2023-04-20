const User = require('../models/users.model');


// controllers sin userid

exports.findAllUsers = async (req, res) => {
  try {
    
    const users = await User.findAll({
      where: {
        status: 'available',
      },
    });
    res.json({
      message: 'the users were found successfully',
      results: users.length,
      users,
    });

  } catch (error) {
console.log(error);
return res.status(500).json({
  status: 'fail',
  message: 'Something went wrong'
})
  }
};

// exports.createUser = async (req, res) => {
//   try {
    
//     const { name, email, password } = req.body;
//     const user = await User.create({
//       name,
//       email,
//       password,
//     });
//     res.status(201).json({
//       message: 'The new user was created',
//       user,
//     });

//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       status: 'fail',
//       message: 'Something went wrong'
//     })
//   }
// };


//controllers con userid

exports.findOneUser = async (req, res) => {
  try {
    
    const { userid } = req.params;
  
    const user = await User.findOne({
      where: {
        userid,
      },
    });
    if (!user) {
      return res.status(404).json({
        message: `user with id ${userid} not found`,
      });
    }
    res.status(200).json({
      message: `the user with id ${userid} was found successfully`,
      user,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong'
    })
  }
};

exports.updateUser = async (req, res) => {
  try {
    
    const { userid } = req.params;
    const { role, status } = req.body;
    const user = await User.findOne({
      where: {
        userid,
        role: 'client',
        status: 'available',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `the user with id: ${userid} is not found`,
      });
    }
    await user.update({ role: 'employee' });
    res.status(200).json({
      status: 'success',
      message: 'the user has been updated',
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong'
    })
  }
};

// exports.updateUserClient = async (req, res) => {
//   const { userid } = req.params;
//   const { role, status } = req.body;
//   const user = await User.findOne({
//     where: {
//       userid,
//       role: 'employee',
//       status: 'available',
//     },
//   });
//   if (!user) {
//     return res.status(404).json({
//       status: 'error',
//       message: `the user with id: ${userid} is not found`,
//     });
//   }
//   await user.update({ role: 'client' });
//   res.status(200).json({
//     status: 'success',
//     message: 'the user has been updated',
//   });
// };

exports.deleteUser = async (req, res) => {
  try {
    
    // traer el userid de la res.params
    const { userid } = req.params;
    const { status } = req.body;
    // buscar el usuario a actualizar
    const user = await User.findOne({
      where: {
        userid,
        status: 'available',
      },
    });
    // validar si el producto existe sino error
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `the user with id: ${userid} is not found`,
      });
    }
    // usar el update para pasar el estado a unavailable o cancelled
    await user.update({ status: 'disabled' });
    res.status(200).json({
      status: 'success',
      message: 'the user has been disabled',
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong'
    })
  }
};
