const express = require('express');
const router = express.Router();

// Предположим, что у вас есть контроллер для создания новых проектов
const newProject = require('../controllers/newProjectController');

router.get('/', newProject.getAllUserProjects);
router.get('/:id', newProject.getProjectById);
router.post('/', newProject.createProject);
router.put('/:id', newProject.updateProject);
router.delete('/:id', newProject.deleteProject);

module.exports = router;