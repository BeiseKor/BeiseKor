const express = require('express');
const router = express.Router();
const mySnippets = require('../controllers/mySnippetsController');

router.get('/', mySnippets.getAllUserSnippets);
router.get('/:id', mySnippets.getSnippetById);
router.post('/', mySnippets.createSnippet);
router.put('/:id', mySnippets.updateSnippet);
router.delete('/:id', mySnippets.deleteSnippet);

module.exports = router;
