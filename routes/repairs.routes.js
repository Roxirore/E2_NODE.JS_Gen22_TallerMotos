const express = require('express')
const repairsController = require('./../controllers/repairs.controller')

const repairsrouter = express.Router();

repairsrouter
.route('/')
// .get(repairsController.findAllRepairsUser)
// .get(repairsController.findAllRepairsPending)
.post(repairsController.createRepair)

// repairsrouter
// .route('/:id')
// .get(repairsController.findOneRepair)
// .patch(repairsController.updateRepair)
// .delete(repairsController.deleteRepair)

module.exports = repairsrouter;