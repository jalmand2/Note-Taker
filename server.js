const express = require('express');
const path = require('path');
const data = require('./db/db.json');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//HTML Routes

//GET /notes should return the notes.html file.
//testing index.html get request 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
//GET * should return the index.html file.
//app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname, 'index.html'));
//});
//GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => res.json(data));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);