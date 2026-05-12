const express = require('express');
const router = express.Router();
const Asset = require('../models/Asset');
const auth = require('../middleware/auth');
const { notifyNewAsset } = require('../bot/bot');

// Все маршруты требуют аутентификации
router.use(auth);

// Получить все активы (для синхронизации с фронтендом)
router.get('/', async (req, res) => {
    try {
        const assets = await Asset.find({}).lean();
        // Возвращаем в формате, который ожидает фронтенд
        const result = assets.map(a => ({
            id: a.clientId,            // фронтенд использует id как строку
            serverId: a._id,
            name: a.name,
            type: a.type,
            roomId: a.room_id,
            room_id: a.room_id,
            x: a.x,
            y: a.y,
            width: a.width,
            height: a.height,
            category: a.category,
            inventory_number: a.inventory_number,
            model: a.model,
            serial_number: a.serial_number,
            status: a.status,
            sum: a.sum,
            responsible: a.responsible,
            purchase_date: a.purchase_date ? a.purchase_date.toISOString() : null,
            warranty_until: a.warranty_until ? a.warranty_until.toISOString() : null,
            notes: a.notes,
            custom_color: a.custom_color,
            parent_id: a.parent_id,
            createdAt: a.createdAt,
            updatedAt: a.updatedAt
        }));
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: 'Ошибка получения активов' });
    }
});

// Создать новый актив
router.post('/', async (req, res) => {
    try {
        const data = req.body;

        if (!data.type || !data.id) {
            return res.status(400).json({ error: 'Не указан тип или ID актива' });
        }

        // Создаём актив, используя clientId = data.id (UUID)
        const asset = new Asset({
            clientId: data.id,
            type: data.type,
            name: data.name || data.type,
            category: data.category || 'device_movable',
            inventory_number: data.inventory_number || '',
            model: data.model || '',
            serial_number: data.serial_number || '',
            room_id: data.roomId || data.room_id || '',
            x: data.x || 0,
            y: data.y || 0,
            width: data.width || 100,
            height: data.height || 100,
            status: data.status || 'active',
            sum: data.sum || 0,
            responsible: data.responsible || '',
            purchase_date: data.purchase_date ? new Date(data.purchase_date) : null,
            warranty_until: data.warranty_until ? new Date(data.warranty_until) : null,
            notes: data.notes || '',
            custom_color: data.custom_color || null,
            parent_id: data.parent_id || null
        });

        await asset.save();

        // Уведомление боту
        await notifyNewAsset(asset);

        res.status(201).json({ id: asset.clientId, serverId: asset._id });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ error: 'Актив с таким ID уже существует' });
        }
        res.status(500).json({ error: 'Ошибка создания актива' });
    }
});

// Обновить актив (по clientId)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params; // это clientId из URL
        const data = req.body;

        const asset = await Asset.findOne({ clientId: id });
        if (!asset) {
            return res.status(404).json({ error: 'Актив не найден' });
        }

        // Обновляем поля
        const updatableFields = [
            'type', 'name', 'category', 'inventory_number', 'model', 'serial_number',
            'room_id', 'x', 'y', 'width', 'height', 'status', 'sum', 'responsible',
            'purchase_date', 'warranty_until', 'notes', 'custom_color', 'parent_id'
        ];

        updatableFields.forEach(field => {
            if (data[field] !== undefined) {
                asset[field] = data[field];
            }
        });

        // Конвертация дат, если переданы строки
        if (typeof asset.purchase_date === 'string') asset.purchase_date = new Date(asset.purchase_date);
        if (typeof asset.warranty_until === 'string') asset.warranty_until = new Date(asset.warranty_until);

        await asset.save();
        res.json({ id: asset.clientId, serverId: asset._id });
    } catch (err) {
        res.status(500).json({ error: 'Ошибка обновления актива' });
    }
});

// Удалить актив
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const asset = await Asset.findOneAndDelete({ clientId: id });
        if (!asset) {
            return res.status(404).json({ error: 'Актив не найден' });
        }
        res.json({ message: 'Актив удалён' });
    } catch (err) {
        res.status(500).json({ error: 'Ошибка удаления актива' });
    }
});

module.exports = router;