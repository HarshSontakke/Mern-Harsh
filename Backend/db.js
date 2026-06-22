const mongoose = require('mongoose');

const connectDB = () => mongoose
    .connect('mongodb://127.0.0.1:27017/Courses')
    .then(() => console.log('Connected.>.>.>'))
    .catch((err) => console.error('MongoDB connection error:', err));

module.exports = { connectDB };