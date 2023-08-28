const express = require('express');
const { normalize } = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const users = [
    {id: 1, name: 'marcio' },
    {id: 2, name: 'claudio' },
    {id: 3, name: 'leo' },
]


app.use(cors());
app.use(morgan());
app.use(express.json());

app.get('/', (req, res) => {
    const initialFile = normalize(`${__dirname}/../public/index.html`);

    res.sendFile(initialFile);
})

app.get('/users', (req, res) => {
    res.json(users);
})

module.exports = app;