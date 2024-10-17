const Client = require('../models/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, phone, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const client = new Client({
        name,
        email,
        phone,
        password: hashedPassword
    });

    try {
        const savedClient = await client.save();
        res.status(201).json(savedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const client = await Client.findOne({ email });
    
    if (!client) return res.status(400).json({ message: 'Invalid credentials' + "hola"});

    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: client._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};
