const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = async function initSuperAdmin() {
  try {
    const count = await User.countDocuments();
    if (count > 0) {
      console.log('Users already exist, superadmin initialization skipped');
      return;
    }

    const username = process.env.ADMIN_DEFAULT_USERNAME || 'superadmin';
    const password = process.env.ADMIN_DEFAULT_PASSWORD || 'SuperPass123!';
    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      username,
      password: hashedPassword,
      role: 'admin'
    });

    console.log(`Superadmin создан: ${username}`);
  } catch (error) {
    console.error('Ошибка при инициализации superadmin:', error);
    throw error;
  }
};