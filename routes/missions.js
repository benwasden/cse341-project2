const express = require('express');
const router = express.Router();

const missionsController = require('../controllers/missions');
// const validation = require('../middleware/validation');

router.get('/', missionsController.getAll);

router.get('/:id', missionsController.getSingle);

router.post('/', missionsController.createMission);

router.put('/:id', missionsController.updateMission);

router.delete('/:id', missionsController.deleteMission);

module.exports = router;