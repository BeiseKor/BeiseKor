const express = require('express');
const router = express.Router();
const tags = require('../controllers/tagsController');

router.get('/', tags.getAllTags);
router.post('/', tags.createTag);
router.delete('/', tags.deleteTag);

module.exports = router;
