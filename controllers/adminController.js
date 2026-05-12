const User = require('../models/User');
const ActionLog = require('../models/ActionLog');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, '-password');
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, role, telegramId } = req.body;

    const data = {};
    if (username) data.username = username;
    if (role) data.role = role;
    if (telegramId !== undefined) data.telegramId = telegramId;

    const updated = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true, context: 'query' });
    if (!updated) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    res.json({ message: 'Данные пользователя обновлены', user: updated.toJSON() });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    res.json({ message: 'Пользователь удален безвозвратно', user: deleted.toJSON() });
  } catch (error) {
    next(error);
  }
};

exports.getDbStatus = async (req, res, next) => {
  try {
    const stats = await User.db.db.admin().serverStatus();
    res.json({ status: 'ok', uptime: stats.uptime, connections: stats.connections });
  } catch (error) {
    next(error);
  }
};

exports.getStats = async (req, res, next) => {
  try {
    const total = await User.countDocuments();
    const admins = await User.countDocuments({ role: 'admin' });
    const users = total - admins;

    res.json({ total, admins, users });
  } catch (error) {
    next(error);
  }
};

exports.logAction = async (req, res, next) => {
  try {
    const { action, assetId, details } = req.body;
    const userId = req.user.id;

    if (!action) {
      return res.status(400).json({ message: 'Необходим action' });
    }

    const logDetails = { ...details };
    if (assetId) logDetails.assetId = assetId;

    const log = new ActionLog({
      userId,
      username: req.user.username,
      action,
      details: logDetails,
      timestamp: new Date()
    });

    await log.save();

    res.json({ message: 'Действие залогировано' });
  } catch (error) {
    next(error);
  }
};