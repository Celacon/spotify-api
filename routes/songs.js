const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, songsController.createSong);
router.get('/', authMiddleware, songsController.getAllSongs);
router.get('/:id', authMiddleware, songsController.getSongById);
router.put('/:id', authMiddleware, songsController.updateSong);
router.delete('/:id', authMiddleware, songsController.deleteSong);

module.exports = router;
