const Song = require('../models/song');

exports.createSong = async (req, res) => {
    const song = new Song(req.body);
    try {
        const savedSong = await song.save();
        res.status(201).json(savedSong);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.json(song);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.json({ message: 'Song deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
