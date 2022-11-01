const express = require('express');
const path = require('path');
const data = require('./db/db.json');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//GET /notes should return the notes.html file.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/notes', (req, res) => res.json(data));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);