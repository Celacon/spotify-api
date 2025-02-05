const Artist = require('../models/artist');

exports.createArtist = async (req, res) => {
    const artist = new Artist(req.body);
    try {
        const savedArtist = await artist.save();
        res.status(201).json(savedArtist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (!artist) return res.status(404).json({ message: 'Artist not found' });
        res.json(artist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!artist) return res.status(404).json({ message: 'Artist not found' });
        res.json(artist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndDelete(req.params.id);
        if (!artist) return res.status(404).json({ message: 'Artist not found' });
        res.json({ message: 'Artist deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
