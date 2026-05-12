module.exports = function errorHandler(err, req, res, next) {
  console.error('Global error handler:', err);
  const status = err.status || 500;
  const message = err.message || 'Внутренняя ошибка сервера';
  res.status(status).json({ message });
};