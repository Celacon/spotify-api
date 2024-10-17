const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albumsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, albumsController.createAlbum);
router.get('/', authMiddleware, albumsController.getAllAlbums);
router.get('/:id', authMiddleware, albumsController.getAlbumById);
router.put('/:id', authMiddleware, albumsController.updateAlbum);
router.delete('/:id', authMiddleware, albumsController.deleteAlbum);

module.exports = router;

