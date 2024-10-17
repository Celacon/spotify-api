const Album = require('../models/album');

exports.createAlbum = async (req, res) => {
    const album = new Album(req.body);
    try {
        const savedAlbum = await album.save();
        res.status(201).json(savedAlbum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (!album) return res.status(404).json({ message: 'Album not found' });
        res.json(album);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!album) return res.status(404).json({ message: 'Album not found' });
        res.json(album);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (!album) return res.status(404).json({ message: 'Album not found' });
        res.json({ message: 'Album deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
