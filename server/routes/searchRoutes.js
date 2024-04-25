const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/', searchController.getAllSearchItems);
router.post('/', searchController.createSearchItem);
router.get('/:id', searchController.getSearchItemById);
router.put('/:id', searchController.updateSearchItem);
router.delete('/:id', searchController.deleteSearchItem);

module.exports = router;
