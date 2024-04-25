const express = require('express');
const router = express.Router();

// Предположим, что у вас есть контроллер для получения всех проектов
const allProjectController = require('../controllers/allProjectController.js');

router.post('/', allProjectController.addProject);
router.get('/', allProjectController.getAllProjects);
router.delete('/', allProjectController.deleteProject);

module.exports = router;