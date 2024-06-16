const fs = require('fs');
const path = require('path');
const projectsFilePath = path.join(__dirname, '../data/projects.json'); // Обновленный путь к файлу

const createProject = (req, res) => {
    const { name } = req.body;
    const newProject = { id: Date.now(), name };

    fs.readFile(projectsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading projects file:', err);
            return res.status(500).send({ message: 'Ошибка чтения файла проектов' });
        }

        const projects = JSON.parse(data);
        projects.push(newProject);

        fs.writeFile(projectsFilePath, JSON.stringify(projects, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to projects file:', err);
                return res.status(500).send({ message: 'Ошибка записи файла проектов' });
            }

            res.status(201).send({ message: 'Проект успешно создан', project: newProject });
        });
    });
};

const getAllProjects = (req, res) => {
    fs.readFile(projectsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading projects file:', err);
            return res.status(500).send({ message: 'Ошибка чтения файла проектов' });
        }

        const projects = JSON.parse(data);
        res.send(projects);
    });
};

module.exports = {
    createProject,
    getAllProjects,
};
