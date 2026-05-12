const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// GET /rooms – отдаёт список комнат
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find({}).lean();
        res.json(rooms.map(r => ({ id: r.roomId, name: r.name })));
    } catch (err) {
        res.status(500).json({ error: 'Ошибка получения комнат' });
    }
});

module.exports = router;