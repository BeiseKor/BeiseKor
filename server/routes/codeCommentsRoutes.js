const express = require('express');
const router = express.Router();
const codeComments = require('../controllers/codeCommentsController.js');

router.post('/', codeComments.createComment);
router.get('/', codeComments.getAllComments);
router.get('/:id', codeComments.getCommentById);
router.put('/:id', codeComments.updateCommentById);
router.delete('/:id', codeComments.deleteCommentById);

module.exports = router;