const Repair = require('../models/repairs.model');

exports.validRepairs = (req, res, next) => {
  const { date, status, userid } = req.body;
  if (!date) {
    return res.status(400).json({
      status: 'error',
      message: 'the date is required',
    });
  }

  if (!status) {
    return res.status(400).json({
      status: 'error',
      message: 'the status is required',
    });
  }

  if (!userid) {
    return res.status(400).json({
      status: 'error',
      message: 'the userid is required',
    });
  }

  next();
};

exports.validExistRepair = async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id,
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `Repair with id: ${id} not found`,
    });
  }

  req.repair = repair;
  next();
};
