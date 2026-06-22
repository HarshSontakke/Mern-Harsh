const express = require('express');
const {connectDB} = require('./db');
const routes = require('./Routes/CourseRoutes');


const cors = require('cors');
const app =express()
connectDB()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/course', routes);

app.listen(4000, () => {
    console.log('Server is Running.>.>.>');
});