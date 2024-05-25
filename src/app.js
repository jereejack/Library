const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

module.exports = app;
