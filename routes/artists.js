const express = require('express');
const router = express.Router();
const artistsController = require('../controllers/artistsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, artistsController.createArtist);
router.get('/', authMiddleware, artistsController.getAllArtists);
router.get('/:id', authMiddleware, artistsController.getArtistById);
router.put('/:id', authMiddleware, artistsController.updateArtist);
router.delete('/:id', authMiddleware, artistsController.deleteArtist);

module.exports = router;
