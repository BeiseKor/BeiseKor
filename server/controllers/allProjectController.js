const projects = []; // Массив для хранения всех проектов

// Функция для добавления нового проекта
const addProject = (req, res) => {
    const { id, name, description, status, priority } = req.body;
    if (!id || !name) {  // Простая валидация
        res.status(400).send("Project ID and name are required.");
        return;
    }
    const project = { id, name, description, status, priority };
    projects.push(project);
    res.status(201).json(project);
};

// Функция для удаления проекта по ID
const deleteProject = (req, res) => {
    const { id } = req.params;
    const initialLength = projects.length;
    projects = projects.filter(project => project.id !== parseInt(id));
    if (projects.length === initialLength) {
        res.status(404).send("Project not found.");
    } else {
        res.status(200).send(`Project with ID ${id} deleted.`);
    }
};

// Функция для получения всех проектов
const getAllProjects = (req, res) => {
    res.json(projects);
};

module.exports = { addProject, deleteProject, getAllProjects };