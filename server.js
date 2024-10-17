const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const albumRoutes = require('./routes/albums');
const artistRoutes = require('./routes/artists');
const songRoutes = require('./routes/songs');
const clientRoutes = require('./routes/clients');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/albums', albumRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
