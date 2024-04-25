function loggingMiddleware(req, res, next) {
    // Журналирование запроса
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    // Переход к следующему middleware или маршруту
    next();
  }
  
  module.exports = loggingMiddleware;