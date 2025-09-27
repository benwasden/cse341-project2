const express = require('express');
const router = express.Router();

const missionsController = require('../controllers/smissions');
const validation = require('../middleware/validate');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', missionsController.getAll);

router.get('/:id', missionsController.getSingle);

router.post('/', isAuthenticated, validation.saveMission, missionsController.createMission);

router.put('/:id', isAuthenticated, validation.saveMission, missionsController.updateMission);

router.delete('/:id', isAuthenticated, missionsController.deleteMission);

module.exports = router;