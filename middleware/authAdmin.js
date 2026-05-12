module.exports = function authAdmin(req, res, next) {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Необходимо авторизоваться' });
    }
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Доступ запрещен: требуется роль админа' });
    }
    next();
  } catch (error) {
    console.error('authAdmin middleware error', error);
    res.status(500).json({ message: 'Ошибка прав доступа' });
  }
};