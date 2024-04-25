const fs = require('fs');
const path = require('path');

// Создание нового комментария
exports.createComment = (req, res) => {
    const { text, codeId } = req.body;
    if (!text ||!codeId) {
        return res.status(400).json({ error: 'Текст и идентификатор кода обязательны' });
    }

    const newComment = { 
        id: comments.length + 1,  // простой способ генерации уникального ID
        text, 
        codeId 
    };
    comments.push(newComment);
    res.status(201).json(newComment);
};

// Получение всех комментариев
exports.getAllComments = (req, res) => {
    if (comments.length === 0) {
        return res.status(404).json({ error: 'Комментарии не найдены' });
    }
    res.json(comments);
};

// Получение комментария по ID
exports.getCommentById = (req, res) => {
    const id = parseInt(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    if (!comment) {
        return res.status(404).json({ error: 'Комментарий не найден' });
    }
    res.json(comment);
};

// Обновление комментария по ID
exports.updateCommentById = (req, res) => {
    const id = parseInt(req.params.id);
    const { text } = req.body;

    const comment = comments.find(comment => comment.id === id);
    if (!comment) {
        return res.status(404).json({ error: 'Комментарий не найден' });
    }
    comment.text = text;  // Обновление текста комментария
    res.json(comment);
};

// Удаление комментария по ID
exports.deleteCommentById = (req, res) => {
    const id = parseInt(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Комментарий не найден' });
    }
    comments.splice(index, 1);  // Удаление комментария из массива
    res.json({ message: 'Комментарий успешно удален' });
};