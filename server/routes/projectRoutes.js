const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/create-project', projectController.createProject);
router.get('/all-projects', projectController.getAllProjects);

module.exports = router;
