require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const supportRoutes = require('./routes/support');
const assetsRoutes = require('./routes/assets');
const errorHandler = require('./middleware/errorHandler');
const initSuperAdmin = require('./utils/initSuperAdmin');
const { startBot } = require('./bot/bot');

const app = express();
const PORT = process.env.PORT || 5000;

// Базовые middleware
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization'] }));
app.use(express.json());

// Статические файлы (фронтенд) – ДО API, чтобы index.html и login.html работали
app.use(express.static('.'));

// API маршруты
app.get('/health', (req, res) => res.json({ status: 'ok' }));  // healthcheck для Railway
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/support', supportRoutes);
app.use('/assets', assetsRoutes);

// Обработчик ошибок
app.use(errorHandler);

// Запускаем HTTP-сервер НЕМЕДЛЕННО
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Подключаем MongoDB и бота асинхронно, без блокировки сервера
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async () => {
        console.log('✅ MongoDB connected');
        await initSuperAdmin();
        // Запуск бота (если токен задан)
        if (process.env.TELEGRAM_BOT_TOKEN) {
            try {
                await startBot();
            } catch (err) {
                console.error('❌ Ошибка бота:', err.message);
            }
        }
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err.message);
        console.log('⚠️ Работаем без базы данных');
    });
