const SearchItem = require('../models/searchModel');

// Пример массива объектов для хранения элементов поиска
let searchItems = [
  new SearchItem(1, 'javascript', 'Programming', 'JavaScript programming language'),
  new SearchItem(2, 'node.js', 'Programming', 'Node.js runtime environment'),
  new SearchItem(3, 'express.js', 'Programming', 'Express.js web framework for Node.js')
];

// Получение всех элементов поиска
exports.getAllSearchItems = (req, res) => {
  res.json(searchItems);
};

// Создание нового элемента поиска
exports.createSearchItem = (req, res) => {
  const { keyword, category, description } = req.body;
  const id = searchItems.length + 1;
  const newItem = new SearchItem(id, keyword, category, description);
  searchItems.push(newItem);
  res.status(201).json(newItem);
};

// Получение элемента поиска по ID
exports.getSearchItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = searchItems.find(item => item.id === id);
  if (!item) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    res.json(item);
  }
};

// Обновление элемента поиска по ID
exports.updateSearchItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { keyword, category, description } = req.body;
  const item = searchItems.find(item => item.id === id);
  if (!item) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    item.keyword = keyword || item.keyword;
    item.category = category || item.category;
    item.description = description || item.description;
    res.json(item);
  }
};

// Удаление элемента поиска по ID
exports.deleteSearchItem = (req, res) => {
  const id = parseInt(req.params.id);
  searchItems = searchItems.filter(item => item.id !== id);
  res.status(200).json({ message: 'Item deleted' });
};
