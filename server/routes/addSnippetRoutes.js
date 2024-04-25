// addSnippetRoutes.js
const express = require('express');
const router = express.Router();
const addSnippetController = require('../controllers/addSnippetController');

// Создание нового сниппета
router.post('/', addSnippetController.addSnippet);

// Получение всех сниппетов
router.get('/', addSnippetController.getAllSnippets);

// Получение сниппета по ID
router.get('/:id', addSnippetController.getSnippetById);

// Обновление сниппета по ID
router.put('/:id', addSnippetController.updateSnippetById);

// Удаление сниппета по ID
router.delete('/:id', addSnippetController.deleteSnippetById);

module.exports = router;
