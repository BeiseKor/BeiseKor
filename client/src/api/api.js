import axios from 'axios';

axios.get('http://localhost:8919/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Ошибка запроса:', error);
  });