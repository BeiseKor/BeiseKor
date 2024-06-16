function errorMiddleware(err, req, res, next) {
    // Обработка ошибок
    console.error(err.stack);
    // Отправка ответа с кодом ошибки и сообщением
    res.status(500).json({ message: 'Internal Server Error' });
  }
  
  module.exports = errorMiddleware; 