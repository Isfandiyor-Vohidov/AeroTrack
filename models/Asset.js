const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    // Идентификатор из фронтенда (UUID)
    clientId: { type: String, required: true, unique: true },

    // Основные поля
    type: { type: String, required: true },
    name: { type: String, default: '' },
    category: { type: String, default: 'device_movable' },

    // Инвентарные данные
    inventory_number: { type: String, default: '' },
    model: { type: String, default: '' },
    serial_number: { type: String, default: '' },

    // Расположение
    room_id: { type: String, default: '' },
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    width: { type: Number, default: 64 },
    height: { type: Number, default: 64 },

    // Статус и стоимость
    status: {
        type: String,
        enum: ['active', 'repair', 'storage', 'written_off', 'reserved'],
        default: 'active'
    },
    sum: { type: Number, default: 0 },

    // Ответственный и даты
    responsible: { type: String, default: '' },
    purchase_date: { type: Date, default: null },
    warranty_until: { type: Date, default: null },

    // Дополнительно
    notes: { type: String, default: '' },
    custom_color: { type: String, default: null },
    parent_id: { type: String, default: null },   // ID родительской мебели (UUID)

    // Для совместимости с фронтендом
    show_icon: { type: Boolean, default: true },
    aspect_ratio: { type: Number, default: 1.0 }
}, {
    timestamps: true   // автоматически createdAt и updatedAt
});

module.exports = mongoose.model('Asset', assetSchema);