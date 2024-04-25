const express = require('express');
const app = express();

const addSnippetRoutes = require ('./routes/addSnippetRoutes');
const allProjectRoutes = require('./routes/allProjectRoutes');
const codeCommetsRoutes = require('./routes/codeCommentsRoutes');
const mySnippetsRoutes = require ('./routes/mySnippetsRoutes');
const newProjectRoutes = require ('./routes/newProjectRoutes');
const searchRoutes = require ('./routes/searchRoutes');
const tagsRoutes = require ('./routes/tagsRoutes');
const userRoutes = require ('./routes/userRoutes');

const PORT = process.env.PORT || 8919;
app.use(express.json());

app.use('/api/addSnippet', addSnippetRoutes);
app.use('/api/ mySnippets',  mySnippetsRoutes);
app.use('/api/allproject', allProjectRoutes);
app.use('/api/newProject', newProjectRoutes);
app.use('/api/codeComments', codeCommetsRoutes); 
app.use('/api/search', searchRoutes);
app.use('/api/tags', tagsRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Привет, мир!');
  });
  
  app.use((req, res, next) => {
    res.status(404).send("Страница не найдена");
  });
  // Слушаем указанный порт
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });