const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const ActionLog = require('../models/ActionLog');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

exports.register = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    // 1. Базовая проверка полей
    if (!username || !password) {
      return res.status(400).json({ message: 'Требуются username и password' });
    }

    // 2. Умная проверка на существование
    // Собираем условия для поиска только из тех данных, что реально пришли
    const searchConditions = [{ username }];
    if (email && email.trim() !== "") {
      searchConditions.push({ email: email.toLowerCase() });
    }

    const existing = await User.findOne({ $or: searchConditions });

    if (existing) {
      // Уточняем, что именно занято, для понятного ответа
      const isUsernameTaken = existing.username === username;
      return res.status(409).json({ 
        message: isUsernameTaken 
          ? 'Это имя пользователя уже занято' 
          : 'Пользователь с таким email уже зарегистрирован' 
      });
    }

    // 3. Создание пользователя
    const hashed = await bcrypt.hash(password, 12);
    const emailVerificationToken = crypto.randomBytes(32).toString('hex');

    const user = await User.create({
      username,
      password: hashed,
      email: email ? email.toLowerCase() : undefined, // Не сохраняем пустую строку
      emailVerificationToken,
      emailVerificationExpires: Date.now() + 24 * 60 * 60 * 1000
    });

    // 4. Логирование
    await ActionLog.create({
      userId: user._id,
      username: user.username,
      action: 'register',
      details: { email: user.email },
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    // 5. Отправка почты (теперь с обработкой ошибок, чтобы сервер не падал)
    if (user.email) {
      try {
        const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:5000'}/verify-email?token=${emailVerificationToken}`;
        await transporter.sendMail({
          to: user.email,
          subject: 'Подтверждение email - WebInv',
          html: `
            <h2>Добро пожаловать в WebInv!</h2>
            <p>Пожалуйста, подтвердите ваш email, перейдя по ссылке:</p>
            <a href="${verificationUrl}">Подтвердить email</a>
            <p>Ссылка действительна 24 часа.</p>
          `
        });
      } catch (mailError) {
        console.error('Ошибка отправки почты:', mailError);
        // Не прерываем ответ клиенту, если письмо не отправилось, 
        // так как пользователь в базе уже создан.
      }
    }

    res.status(201).json({
      message: 'Регистрация успешна! Проверьте почту для подтверждения.',
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Требуются username и password' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Неверный логин или пароль' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      await ActionLog.create({
        userId: user._id,
        username: user.username,
        action: 'login',
        success: false,
        error: 'Invalid password',
        ip: req.ip,
        userAgent: req.get('User-Agent')
      });
      return res.status(401).json({ message: 'Неверный логин или пароль' });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    const payload = { id: user._id, username: user.username, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    });

    // Log successful login
    await ActionLog.create({
      userId: user._id,
      username: user.username,
      action: 'login',
      success: true,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        email: user.email,
        isEmailVerified: user.isEmailVerified,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get user profile
exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password -resetPasswordToken -resetPasswordExpires');
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Update user profile
exports.updateProfile = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const userId = req.user.id;

    const updateData = {};
    if (username) updateData.username = username;
    if (email) updateData.email = email;

    const user = await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');

    await ActionLog.create({
      userId: userId,
      username: req.user.username,
      action: 'profile_update',
      details: updateData,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Change password
exports.changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);

    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Неверный текущий пароль' });
    }

    const hashed = await bcrypt.hash(newPassword, 12);
    user.password = hashed;
    await user.save();

    await ActionLog.create({
      userId: req.user.id,
      username: req.user.username,
      action: 'password_change',
      success: true,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.json({ message: 'Пароль изменен' });
  } catch (error) {
    next(error);
  }
};

// Forgot password
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Пользователь с таким email не найден' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5000'}/reset-password?token=${resetToken}`;

    await transporter.sendMail({
      to: email,
      subject: 'Сброс пароля - WebInv',
      html: `
        <h2>Сброс пароля</h2>
        <p>Вы запросили сброс пароля. Перейдите по ссылке:</p>
        <a href="${resetUrl}">Сбросить пароль</a>
        <p>Ссылка действительна 1 час.</p>
        <p>Если вы не запрашивали сброс, игнорируйте это письмо.</p>
      `
    });

    await ActionLog.create({
      userId: user._id,
      username: user.username,
      action: 'password_reset',
      details: { email },
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.json({ message: 'Инструкции отправлены на email' });
  } catch (error) {
    next(error);
  }
};

// Verify reset code (for frontend verification)
exports.verifyResetCode = async (req, res, next) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({
      email,
      resetPasswordToken: code,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Неверный или истекший код' });
    }

    res.json({ message: 'Код подтвержден', token: user.resetPasswordToken });
  } catch (error) {
    next(error);
  }
};

// Reset password
exports.resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Неверный или истекший токен' });
    }

    const hashed = await bcrypt.hash(password, 12);
    user.password = hashed;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    await ActionLog.create({
      userId: user._id,
      username: user.username,
      action: 'password_change',
      details: { method: 'reset' },
      success: true,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.json({ message: 'Пароль сброшен' });
  } catch (error) {
    next(error);
  }
};

// Verify email
exports.verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.body;
    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Неверный или истекший токен' });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    await ActionLog.create({
      userId: user._id,
      username: user.username,
      action: 'email_verification',
      success: true,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    res.json({ message: 'Email подтвержден' });
  } catch (error) {
    next(error);
  }
};