const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

router.use(auth, authAdmin);

router.get('/users', adminController.getUsers);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

// Дополнительные методы для телеграм и админки
router.get('/stats', adminController.getStats);
router.get('/db-status', adminController.getDbStatus);

// Логирование действий пользователей
router.post('/log-action', adminController.logAction);

module.exports = router;
