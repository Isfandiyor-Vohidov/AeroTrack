const mongoose = require('mongoose');

const actionLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true,
    enum: [
      'login', 'logout', 'register', 'password_change', 'password_reset',
      'profile_update', 'asset_create', 'asset_update', 'asset_delete',
      'user_create', 'user_update', 'user_delete', 'support_contact',
      'email_verification', 'admin_action'
    ]
  },
  details: {
    type: mongoose.Schema.Types.Mixed
  },
  ip: String,
  userAgent: String,
  timestamp: {
    type: Date,
    default: Date.now
  },
  success: {
    type: Boolean,
    default: true
  },
  error: String
});

// Индексы для быстрого поиска
actionLogSchema.index({ userId: 1, timestamp: -1 });
actionLogSchema.index({ action: 1, timestamp: -1 });
actionLogSchema.index({ timestamp: -1 });

module.exports = mongoose.model('ActionLog', actionLogSchema);