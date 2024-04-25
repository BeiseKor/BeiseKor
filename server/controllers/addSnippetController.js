let snippets = []; // Здесь должно быть использование постоянного хранилища в реальном приложении

// Создание нового сниппета
function addSnippet(req, res) {
    const { title, content } = req.body;

    // Валидация ввода
    if (!title || !content) {
        return res.status(400).json({ error: 'Заголовок и содержимое сниппета обязательны' });
    }

    const newSnippet = { id: snippets.length + 1, title, content };
    snippets.push(newSnippet);

    // Отправка правильного ответа с созданным сниппетом
    res.status(201).json(newSnippet);
}

// Получение всех сниппетов
function getAllSnippets(req, res) {
    // Проверка наличия сниппетов
    if (snippets.length === 0) {
        return res.status(404).json({ error: 'Сниппеты не найдены' });
    }

    res.json(snippets);
}

// Получение сниппета по ID
function getSnippetById(req, res) {
    const id = parseInt(req.params.id);

    const snippet = snippets.find(snippet => snippet.id === id);
    if (!snippet) {
        return res.status(404).json({ error: 'Сниппет не найден' });
    }

    res.json(snippet);
}

// Обновление сниппета по ID
function updateSnippetById(req, res) {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;

    const snippetIndex = snippets.findIndex(snippet => snippet.id === id);
    if (snippetIndex === -1) {
        return res.status(404).json({ error: 'Сниппет не найден' });
    }

    snippets[snippetIndex].title = title;
    snippets[snippetIndex].content = content;

    res.json(snippets[snippetIndex]);
}

// Удаление сниппета по ID
function deleteSnippetById(req, res) {
    const id = parseInt(req.params.id);

    const snippetIndex = snippets.findIndex(snippet => snippet.id === id);
    if (snippetIndex === -1) {
        return res.status(404).json({ error: 'Сниппет не найден' });
    }

    snippets.splice(snippetIndex, 1);

    res.json({ message: 'Сниппет успешно удален' });
}

module.exports = { addSnippet, getAllSnippets, getSnippetById, updateSnippetById, deleteSnippetById };
  