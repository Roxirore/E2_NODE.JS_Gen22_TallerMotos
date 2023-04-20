const Repair = require('./../models/repairs.model');

// //controllers sin id

// exports.findAllRepairsUser = async (req, res) => {
//     const { userid, status } = req.body;
//   const repairs = await Repair.findAll({
//     where: {
//       userid,
//       status: 'pending',
//     },
//   });

//   res.status(200).json({
//     status: 'success',
//     message: `The repairs of userid ${userid} are found`,
//     results: repairs.length,
//     repairs,
//   });
// };

exports.findAllRepairsPending = async (req, res) => {
  try {

    const repairs = await Repair.findAll({
      where: {
        status: 'pending',
      },
    });
  
    res.status(200).json({
      status: 'success',
      message: `The pending repairs of user were counted`,
      results: repairs.length,
      repairs,
    });

  } catch (error) {
console.log(error);
return res.status(500).json({
status: 'fail',
message: 'Somethhing went wrong'
})  }
};

exports.createRepair = async (req, res) => {
  try {

    const { userid, date } =
      req.body;
  
    const repair = await Repair.create({
      userid,
      date,
    });
  
    res.status(201).json({
      status: 'success',
      message: 'The repair has been created!',
      repair,
    });

  } catch (error) {

  }
};


// //controllers con id

exports.updateRepair = async (req, res) => {
  try {

    // traer el userid de la res.params
    const { id } = req.params;
    // buscar la repair a actualizar
    const repair = await Repair.findOne({
      where: {
          id,
          status: 'pending',
      },
    });
    // validar si la repair existe, sino error
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `the repair with id: ${id} is not found`,
      });
    }
    // usar el update para pasar el estado a pending o completed
    await repair.update({ status: 'completed' });
    res.status(200).json({
      status: 'success',
      message: 'the repair has been completed',
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
};

exports.deleteRepair = async (req, res) => {
  try {
    
    // traer el userid de la res.params
    const { id } = req.params;
    // buscar la repair a actualizar
    const repair = await Repair.findOne({
      where: {
          id,
          status: 'pending' 
      },
    });
    // validar si la repair existe, sino error
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `the repair with id: ${id} is not found`,
      });
    }
    // usar el update para pasar el estado a pending o completed
    await repair.update({ status: 'cancelled' });
    res.status(200).json({
      status: 'success',
      message: 'the repair has been cancelled',
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
};

exports.findOneRepair = async (req, res) => {
  try {
    
    const { id } = req.params;
  
    const repair = await Repair.findOne({
      where: {
        id,
      },
    });
    if (!repair) {
      return res.status(404).json({
        message: `The repair with id ${id} not found`,
      });
    }
    res.status(200).json({
      message: 'The repair has been found successfully',
      repair,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong',
    })
  }
};
