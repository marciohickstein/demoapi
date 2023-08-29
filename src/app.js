const express = require('express');
const { normalize } = require('path');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');

const app = express();

// middlewares
app.use(cors());
app.use(morgan());
app.use(express.json());

// routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    const initialFile = normalize(`${__dirname}/../public/index.html`);
    res.sendFile(initialFile);
})


module.exports = app;