const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const auth = require('../middleware/auth');
const ActionLog = require('../models/ActionLog');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, category, subject, message } = req.body;
    const userId = req.user ? req.user.id : null;
    const username = req.user ? req.user.username : 'Anonymous';

    // Generate verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Send verification email
    await transporter.sendMail({
      to: email,
      subject: 'Подтверждение обращения в поддержку - WebInv',
      html: `
        <h2>Подтверждение обращения</h2>
        <p>Здравствуйте, ${name}!</p>
        <p>Вы отправили обращение в поддержку WebInv.</p>
        <p>Код подтверждения: <strong>${verificationCode}</strong></p>
        <p>Категория: ${category}</p>
        <p>Тема: ${subject}</p>
        <p>Если вы не отправляли это обращение, игнорируйте это письмо.</p>
      `
    });

    // Store verification code temporarily (in production, use Redis or database)
    global.verificationCodes = global.verificationCodes || {};
    global.verificationCodes[email] = {
      code: verificationCode,
      data: { name, email, category, subject, message, userId, username },
      expires: Date.now() + 30 * 60 * 1000 // 30 minutes
    };

    // Log the contact attempt
    if (userId) {
      await ActionLog.create({
        userId,
        username,
        action: 'support_contact',
        details: { category, subject, email },
        ip: req.ip,
        userAgent: req.get('User-Agent')
      });
    }

    res.json({
      message: 'Код подтверждения отправлен на ваш email',
      requiresVerification: true
    });
  } catch (error) {
    console.error('Support contact error:', error);
    res.status(500).json({ message: 'Ошибка отправки. Попробуйте позже.' });
  }
});

// Verify contact form
router.post('/verify', async (req, res) => {
  try {
    const { code } = req.body;
    const email = req.body.email; // From stored data

    const stored = global.verificationCodes && global.verificationCodes[email];
    if (!stored || stored.code !== code || stored.expires < Date.now()) {
      return res.status(400).json({ message: 'Неверный или истекший код' });
    }

    const { name, category, subject, message, userId, username } = stored.data;

    // Send the actual support message
    await transporter.sendMail({
      to: '1984dilshod.abdullayev@gmail.com',
      subject: `[${category.toUpperCase()}] ${subject}`,
      html: `
        <h2>Новое обращение в поддержку</h2>
        <p><strong>От:</strong> ${name} (${email})</p>
        <p><strong>Пользователь:</strong> ${username || 'Не авторизован'}</p>
        <p><strong>Категория:</strong> ${category}</p>
        <p><strong>Тема:</strong> ${subject}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Отправлено: ${new Date().toLocaleString('ru-RU')}</small></p>
      `
    });

    // Clean up
    delete global.verificationCodes[email];

    res.json({ message: 'Обращение отправлено успешно' });
  } catch (error) {
    console.error('Support verification error:', error);
    res.status(500).json({ message: 'Ошибка обработки. Попробуйте позже.' });
  }
});

// Resend verification code
router.post('/resend', async (req, res) => {
  try {
    const { email } = req.body;
    const stored = global.verificationCodes && global.verificationCodes[email];

    if (!stored) {
      return res.status(400).json({ message: 'Сессия истекла. Отправьте форму заново.' });
    }

    // Generate new code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    await transporter.sendMail({
      to: email,
      subject: 'Подтверждение обращения в поддержку - WebInv (повторно)',
      html: `
        <h2>Подтверждение обращения</h2>
        <p>Код подтверждения: <strong>${verificationCode}</strong></p>
      `
    });

    stored.code = verificationCode;
    stored.expires = Date.now() + 30 * 60 * 1000;

    res.json({ message: 'Код отправлен повторно' });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ message: 'Ошибка отправки' });
  }
});

module.exports = router;