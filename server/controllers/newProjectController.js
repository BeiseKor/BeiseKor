let projects = [];

// Функция для получения всех проектов пользователя
exports.getAllUserProjects = async (userId) => {
  try {
    // Фильтруем проекты по пользователю
    const userProjects = projects.filter(project => project.userId === userId);
    return userProjects;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функция для создания нового проекта
exports.createProject = async (projectData) => {
  try {
    // Присваиваем проекту уникальный идентификатор
    const projectId = projects.length + 1;
    // Добавляем проект в массив
    const newProject = { id: projectId, ...projectData };
    projects.push(newProject);
    return newProject;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функция для получения проекта по его ID
exports.getProjectById = async (projectId) => {
  try {
    // Находим проект по его ID в массиве
    const project = projects.find(p => p.id === projectId);
    return project;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функция для обновления проекта по его ID
exports.updateProject = async (projectId, updatedProjectData) => {
  try {
    // Находим индекс проекта в массиве
    const projectIndex = projects.findIndex(p => p.id === projectId);
    if (projectIndex !== -1) {
      // Обновляем данные проекта
      projects[projectIndex] = { ...projects[projectIndex], ...updatedProjectData };
      return projects[projectIndex];
    } else {
      return null; // Если проект не найден
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// Функция для удаления проекта по его ID
exports.deleteProject = async (projectId) => {
  try {
    // Удаляем проект из массива
    const deletedProject = projects.find(p => p.id === projectId);
    projects = projects.filter(p => p.id !== projectId);
    return deletedProject;
  } catch (error) {
    throw new Error(error.message);
  }
};
