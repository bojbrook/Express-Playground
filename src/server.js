const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Got a request!');
    res.send('Hello, World!');
});

// Sends headers back in JSON format
app.get('/headers', (req, res) => {
    console.log('Request headers:', req.headers);
    const headers = req.headers;
    res.json(headers);
});

app.get('/server-error', (req, res) => {
    res.status(500).send('Server error!');
});



module.exports = app;