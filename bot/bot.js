const { Telegraf, Markup } = require('telegraf');
const mongoose = require('mongoose');
const User = require('../models/User');
const ActionLog = require('../models/ActionLog');
const Asset = require('../models/Asset');
const Room = require('../models/Room');

const token = process.env.TELEGRAM_BOT_TOKEN;
const adminTelegramId = Number(process.env.TELEGRAM_ADMIN_ID);

if (!token) {
    console.warn('⚠️ Telegram token не задан в .env, бот не будет запущен');
}

const bot = token ? new Telegraf(token) : null;

// Главное меню (Keyboard)
const mainKeyboard = Markup.keyboard([
    ['📊 Статистика', '👥 Пользователи'],
    ['📦 Активы', '📍 Комнаты'],
    ['📝 Логи действий', '🔌 Статус БД'],
    ['🛠️ Команды']
]).resize();

const mainTip = `💡 *Команды бота Web Inv:*
• /start - Обновить меню
• /stats - Статистика пользователей
• /users - Список пользователей
• /assets - Статистика активов
• /rooms - Количество активов по комнатам
• /find <текст> - Поиск актива по типу/модели/инв.номеру
• /asset <инв.номер> - Информация об активе
• /logs - Последние действия пользователей
• /dbstatus - Статус подключения к БД
• /delete <ID> - Удалить пользователя безвозвратно`;

// Функции уведомлений
async function sendMessagesToAdmin(text) {
    if (!bot || !adminTelegramId) return;
    try {
        await bot.telegram.sendMessage(adminTelegramId, text, { parse_mode: 'Markdown' });
    } catch (error) {
        console.error('Ошибка отправки сообщения админу:', error);
    }
}

async function notifyNewRegistration(user) {
    const message = `🆕 *Новый пользователь зарегистрирован:*\n\n👤 *Логин:* ${user.username}\n🆔 *ID:* \`${user._id}\`\n🎭 *Роль:* ${user.role}`;
    await sendMessagesToAdmin(message);
}

async function notifyNewAsset(asset) {
    if (!bot || !adminTelegramId) return;
    try {
        await bot.telegram.sendMessage(
            adminTelegramId,
            `➕ *Новый актив добавлен:*\n` +
            `📦 ${asset.type}\n` +
            `🔢 Инв. номер: \`${asset.inventory_number}\`\n` +
            `📍 Комната: ${asset.room_id || '-'}\n` +
            `💰 Сумма: ${(asset.sum || 0).toLocaleString()} сум`,
            { parse_mode: 'Markdown' }
        );
    } catch (error) {
        console.error('Ошибка уведомления о новом активе:', error);
    }
}

// Получение списка пользователей строкой
async function safeUsersList() {
    try {
        const users = await User.find({}, 'username role telegramId createdAt').lean();
        if (users.length === 0) return 'Список пользователей пуст.';
        return users
            .map((u) => `👤 ${u.username} | Role: ${u.role} | ID: \`${u._id}\``)
            .join('\n');
    } catch (err) {
        return 'Ошибка при чтении базы данных.';
    }
}

function setupBotCommands() {
    if (!bot) return;

    // Middleware: Проверка на админа (только ваш ID)
    bot.use((ctx, next) => {
        if (ctx.from?.id !== adminTelegramId) {
            return ctx.reply('⛔ Доступ запрещен: этот бот только для администратора Web Inv.');
        }
        return next();
    });

    // Команда /start
    bot.start((ctx) => {
        ctx.replyWithMarkdown(`👋 *Привет, ${ctx.from.first_name || 'Админ'}!*\n\n${mainTip}`, mainKeyboard);
    });

    // ---------- ПОЛЬЗОВАТЕЛИ ----------
    const getStats = async (ctx) => {
        try {
            const total = await User.countDocuments();
            const admins = await User.countDocuments({ role: 'admin' });
            const users = total - admins;
            await ctx.replyWithMarkdown(`📊 *Статистика системы:*\n\n• Всего в базе: ${total}\n• Администраторов: ${admins}\n• Обычных юзеров: ${users}`);
        } catch (error) {
            ctx.reply('❌ Ошибка при получении статистики');
        }
    };

    bot.command('stats', getStats);
    bot.hears('📊 Статистика', getStats);

    const getUsers = async (ctx) => {
        const list = await safeUsersList();
        ctx.replyWithMarkdown(`👥 *Список пользователей:*\n\n${list}`);
    };

    bot.command('users', getUsers);
    bot.hears('👥 Пользователи', getUsers);

    const deleteHandler = async (ctx) => {
        const id = ctx.message.text.split(' ')[1];
        if (!id) return ctx.reply('Использование: /delete <ID_пользователя>');
        
        try {
            const target = await User.findByIdAndDelete(id);
            if (!target) return ctx.reply('❌ Пользователь с таким ID не найден.');
            ctx.reply(`✅ Пользователь *${target.username}* удален безвозвратно.`, { parse_mode: 'Markdown' });
        } catch (error) {
            ctx.reply('❌ Ошибка: проверьте корректность ID.');
        }
    };

    bot.command('delete', deleteHandler);
    bot.command('ban', deleteHandler);

    // ---------- АКТИВЫ ----------
    const getAssetStats = async (ctx) => {
        try {
            const total = await Asset.countDocuments();
            const totalSum = await Asset.aggregate([
                { $group: { _id: null, sum: { $sum: '$sum' } } }
            ]);
            const sum = totalSum[0]?.sum || 0;
            const byStatus = await Asset.aggregate([
                { $group: { _id: '$status', count: { $sum: 1 } } }
            ]);
            const statuses = byStatus.map(s => `${s._id}: ${s.count}`).join(', ');
            ctx.replyWithMarkdown(
                `📦 *Инвентаризация:*\n` +
                `• Всего активов: ${total}\n` +
                `• Общая сумма: ${sum.toLocaleString()} сум\n` +
                `• По статусам: ${statuses || 'нет данных'}`
            );
        } catch (err) {
            ctx.reply('❌ Ошибка получения статистики активов');
        }
    };
    bot.command('assets', getAssetStats);
    bot.hears('📦 Активы', getAssetStats);

    const getRoomsStats = async (ctx) => {
        try {
            const stats = await Asset.aggregate([
                { $group: { _id: '$room_id', count: { $sum: 1 }, totalSum: { $sum: '$sum' } } },
                { $sort: { count: -1 } }
            ]);
            if (stats.length === 0) return ctx.reply('Нет активов в комнатах.');
            const lines = stats.map(s => `📍 ${s._id || 'Без комнаты'}: ${s.count} шт, ${(s.totalSum || 0).toLocaleString()} сум`);
            ctx.replyWithMarkdown(`📋 *Активы по комнатам:*\n\n${lines.join('\n')}`);
        } catch (err) {
            ctx.reply('❌ Ошибка получения данных по комнатам');
        }
    };
    bot.command('rooms', getRoomsStats);
    bot.hears('📍 Комнаты', getRoomsStats);

    bot.command('find', async (ctx) => {
        const query = ctx.message.text.split(' ').slice(1).join(' ').trim();
        if (!query) return ctx.reply('✏️ Использование: /find <инв.номер или тип или модель>');
        try {
            const assets = await Asset.find({
                $or: [
                    { inventory_number: { $regex: query, $options: 'i' } },
                    { type: { $regex: query, $options: 'i' } },
                    { model: { $regex: query, $options: 'i' } }
                ]
            }).limit(5).lean();
            if (assets.length === 0) return ctx.reply('🔍 Ничего не найдено.');
            const result = assets.map(a =>
                `🔹 ${a.type} (${a.inventory_number})\n   Статус: ${a.status} | Сумма: ${(a.sum || 0).toLocaleString()} сум\n   Ответственный: ${a.responsible || '-'} | Комната: ${a.room_id || '-'}`
            ).join('\n\n');
            ctx.replyWithMarkdown(`🔍 *Результаты поиска:*\n\n${result}`);
        } catch (err) {
            ctx.reply('❌ Ошибка при поиске');
        }
    });

    bot.command('asset', async (ctx) => {
        const inv = ctx.message.text.split(' ').slice(1).join(' ').trim();
        if (!inv) return ctx.reply('Укажите инвентарный номер: /asset ИНВ-123');
        try {
            const asset = await Asset.findOne({ inventory_number: inv }).lean();
            if (!asset) return ctx.reply('Актив не найден.');
            ctx.replyWithMarkdown(
                `📦 *${asset.type}*\n` +
                `• Инв. номер: \`${asset.inventory_number}\`\n` +
                `• Модель: ${asset.model || '-'}\n` +
                `• Серийный: ${asset.serial_number || '-'}\n` +
                `• Статус: ${asset.status}\n` +
                `• Сумма: ${(asset.sum || 0).toLocaleString()} сум\n` +
                `• Ответственный: ${asset.responsible || '-'}\n` +
                `• Комната: ${asset.room_id || '-'}`
            );
        } catch (err) {
            ctx.reply('Ошибка получения данных');
        }
    });

    // ---------- ЛОГИ И СТАТУС БД ----------
    bot.hears('🔌 Статус БД', async (ctx) => {
        const states = { 0: '🔴 Отключено', 1: '🟢 Подключено', 2: '🟡 Соединение...', 3: '🟠 Разрыв связи' };
        const status = mongoose.connection.readyState;
        ctx.reply(`Статус MongoDB: ${states[status] || 'Неизвестно'}`);
    });

    const getLogs = async (ctx) => {
        try {
            const limit = 10;
            const logs = await ActionLog.find({})
                .populate('userId', 'username')
                .sort({ timestamp: -1 })
                .limit(limit)
                .lean();

            if (logs.length === 0) {
                return ctx.reply('📝 Логов действий пока нет.');
            }

            const logMessages = logs.map(log => {
                const time = new Date(log.timestamp).toLocaleString('ru-RU');
                const user = log.userId?.username || 'Unknown';
                const action = log.action;
                const success = log.success ? '✅' : '❌';
                return `${success} ${time} | ${user} | ${action}`;
            }).join('\n');

            ctx.replyWithMarkdown(`📝 *Последние действия пользователей:*\n\n${logMessages}`);
        } catch (error) {
            ctx.reply('❌ Ошибка при получении логов');
        }
    };

    bot.command('logs', getLogs);
    bot.hears('📝 Логи действий', getLogs);

    bot.hears('🛠️ Команды', (ctx) => ctx.replyWithMarkdown(mainTip));

    // Глобальный перехват ошибок бота (чтобы не ронять процесс)
    bot.catch((err) => console.error('🔥 Ошибка в работе бота:', err));
}

// Безопасный запуск бота
async function startBot() {
    if (!bot) return;
    setupBotCommands();
    try {
        await bot.launch();
        console.log('🤖 Telegram бот Web Inv успешно запущен');
    } catch (error) {
        console.error('❌ Ошибка запуска Telegram бота:', error.message);
        // Не падаем, сервер продолжает работу
    }
}

module.exports = {
    startBot,
    notifyNewRegistration,
    notifyNewAsset
};
