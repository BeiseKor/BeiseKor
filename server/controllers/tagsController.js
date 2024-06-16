const fs = require('fs');

// Функция для загрузки текущих тегов из файла
function loadTags() {
    try {
        const data = fs.readFileSync('./data/tags.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Не удалось загрузить теги:", err);
        return [];
    }
}

// Функция для сохранения тегов в файл
function saveTags(tags) {
    fs.writeFileSync('./data/tags.json', JSON.stringify(tags, null, 2), 'utf8');
}

// Получение всех тегов
exports.getAllTags = (req, res) => {
    const tags = loadTags();
    res.json(tags);
};

// Создание нового тега
exports.createTag = (req, res) => {
    const newTag = req.body.tag;
    if (!newTag) {
        return res.status(400).send("Требуется указать тег.");
    }
    const tags = loadTags();
    if (tags.includes(newTag)) {
        return res.status(409).send("Тег уже существует.");
    }
    tags.push(newTag);
    saveTags(tags);
    res.status(201).json({message: "Тег успешно добавлен.", tag: newTag});
};

// Удаление тега
exports.deleteTag = (req, res) => {
    const tag = req.params.tag;
    let tags = loadTags();
    if (!tags.includes(tag)) {
        return res.status(404).send("Тег не найден.");
    }
    tags = tags.filter(t => t !== tag);
    saveTags(tags);
    res.status(200).json({message: "Тег удалён.", tag: tag});
};
