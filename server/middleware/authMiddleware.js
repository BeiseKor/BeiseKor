function authMiddleware(req, res, next) {
    // Проверка аутентификации пользователя
    // Если пользователь не аутентифицирован, выполните какие-то действия, например, отправьте ошибку 401
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // Если пользователь аутентифицирован, переходите к следующему middleware или маршруту
    next();
  }
  
  module.exports = authMiddleware;  