require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Маршруты
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const supportRoutes = require('./routes/support');
const assetsRoutes = require('./routes/assets');   // <-- новый
// const roomsRoutes = require('./routes/rooms');     // <-- новый

// Middleware
const errorHandler = require('./middleware/errorHandler');

// Утилиты и бот
const initSuperAdmin = require('./utils/initSuperAdmin');
const bot = require('./bot/bot');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Парсинг JSON
app.use(express.json());

// Статические файлы (из корня проекта)
app.use(express.static('.'));

// API-маршруты
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'WebInv backend running' });
});

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/support', supportRoutes);
app.use('/assets', assetsRoutes);   // <-- активы
// app.use('/rooms', roomsRoutes);     // <-- комнаты

// Обработчик 404 для SPA (если нужен)
app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});

// Обработчик ошибок
app.use(errorHandler);

// Подключение к MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async () => {
        console.log('✅ MongoDB connected');
        await initSuperAdmin();
        bot.startBot();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });