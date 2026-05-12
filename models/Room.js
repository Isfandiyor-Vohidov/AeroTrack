const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    // ID комнаты из ROOM_MAP (например "Офис 1")
    roomId: { type: String, required: true, unique: true },
    name: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);