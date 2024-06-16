const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

const addSnippetRoutes = require('./routes/addSnippetRoutes');
const codeCommentsRoutes = require('./routes/codeCommentsRoutes');
const mySnippetsRoutes = require('./routes/mySnippetsRoutes');
const projectRoutes = require('./routes/projectRoutes'); // Подключаем новый маршрут
const searchRoutes = require('./routes/searchRoutes');
const tagsRoutes = require('./routes/tagsRoutes');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 8919;

// Настройка Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

app.use('/api/add-snippet', addSnippetRoutes);
app.use('/api/my-snippets', mySnippetsRoutes);
app.use('/api/projects', projectRoutes); // Убедитесь, что маршрут подключен
app.use('/api/code-comments', codeCommentsRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/tags', tagsRoutes);
app.use('/api/user', userRoutes);

app.post('/api/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No file uploaded' });
    }
    res.send({ message: 'File uploaded successfully', file: req.file });
});

app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.use((req, res, next) => {
    res.status(404).send("Страница не найдена");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
