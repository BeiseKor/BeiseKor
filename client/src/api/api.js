import axios from 'axios';

// Выполнение GET-запроса к серверу
axios.get('/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Ошибка при выполнении GET-запроса:', error);
  });