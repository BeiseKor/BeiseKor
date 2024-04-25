const fs = require('fs');
const path = require('path');

const snippetsFilePath = path.join(__dirname, 'snippets.json');

// Функция для чтения всех сниппетов из файла JSON
const readAllSnippetsFromFile = () => {
  try {
    const snippetsData = fs.readFileSync(snippetsFilePath, 'utf8');
    return JSON.parse(snippetsData);
  } catch (error) {
    return [];
  }
};

// Функция для записи всех сниппетов в файл JSON
const writeAllSnippetsToFile = (snippets) => {
  fs.writeFileSync(snippetsFilePath, JSON.stringify(snippets, null, 2), 'utf8');
};

// Функция для получения всех сниппетов пользователя
exports.getAllUserSnippets = async (userId) => {
  try {
    const snippets = readAllSnippetsFromFile();
    return snippets.filter(snippet => snippet.userId === userId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функция для создания нового сниппета
exports.createSnippet = async (snippetData) => {
  try {
    const snippets = readAllSnippetsFromFile();
    snippets.push(snippetData);
    writeAllSnippetsToFile(snippets);
    return snippetData;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функция для получения сниппета по его ID
exports.getSnippetById = async (snippetId) => {
  try {
    const snippets = readAllSnippetsFromFile();
    const snippet = snippets.find(snippet => snippet.id === snippetId);
    if (!snippet) {
      throw new Error('Snippet not found');
    }
    return snippet;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функция для обновления сниппета по его ID
exports.updateSnippet = async (snippetId, updatedSnippetData) => {
  try {
    const snippets = readAllSnippetsFromFile();
    const index = snippets.findIndex(snippet => snippet.id === snippetId);
    if (index === -1) {
      throw new Error('Snippet not found');
    }
    snippets[index] = { ...snippets[index], ...updatedSnippetData };
    writeAllSnippetsToFile(snippets);
    return snippets[index];
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функция для удаления сниппета по его ID
exports.deleteSnippet = async (snippetId) => {
  try {
    const snippets = readAllSnippetsFromFile();
    const index = snippets.findIndex(snippet => snippet.id === snippetId);
    if (index === -1) {
      throw new Error('Snippet not found');
    }
    const deletedSnippet = snippets.splice(index, 1)[0];
    writeAllSnippetsToFile(snippets);
    return deletedSnippet;
  } catch (error) {
    throw new Error(error.message);
  }
};
