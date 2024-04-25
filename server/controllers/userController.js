const fs = require('fs');
const path = require('path');
const User = require('../models/userModel');

const dataFilePath = path.join(__dirname, '..', 'data', 'users.json');

let users = [];

const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    users = JSON.parse(data);
  } catch (error) {
    console.error('Error reading data from file:', error);
    users = [];
  }
};

const writeDataToFile = () => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing data to file:', error);
  }
};

const getAllUsers = (req, res) => {
  try {
    readDataFromFile();
    res.json(users);
  } catch (error) {
    console.error('Error getting all users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserById = (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error getting user by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createUser = (req, res) => {
  try {
    readDataFromFile();
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = new User(id, name, email);
    users.push(newUser);
    writeDataToFile();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const updateUser = (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = users.find(user => user.id === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!name && !email) {
      return res.status(400).json({ message: 'Name or email is required for update' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteUser = (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);
    if (index === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    users.splice(index, 1);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Остальные методы контроллера можно реализовать аналогично с учетом чтения и записи данных в файл

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,

};