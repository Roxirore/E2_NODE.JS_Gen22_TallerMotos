const express = require('express');
const repairsController = require('./../controllers/repairs.controller');

const repairsRouter = express.Router();

repairsRouter
  .route('/')
  // .get(repairsController.findAllRepairsUser)
  .get(repairsController.findAllRepairsPending)
  .post(repairsController.createRepair);

repairsRouter
  .route('/:id')
  .get(repairsController.findOneRepair)
  .patch(repairsController.updateRepair)
  .delete(repairsController.deleteRepair);

module.exports = repairsRouter;
