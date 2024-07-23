const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Sends headers back in JSON format
app.get('/headres', (req, res) => {
    const headers = req.headers;
    res.json(headers);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});