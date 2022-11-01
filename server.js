const express = require('express');
const path = require('path');
//const data = require('./db/db.json');
const api = require('./routes/htmlRoutes.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

//HTML Routes

//GET request returning the index.html file.

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET /notes should return the notes.html file.

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//GET /api/notes should read the db.json file and return all saved notes as JSON.
//app.get('/notes', (req, res) => res.json(data));

//POST /api/notes should receive a new note to save on the request body, 
//add it to the db.json file, and then return the new note to the client. 
//You'll need to find a way to give each note a unique id when it's saved 
//(look into npm packages that could do this for you).

// I think activity 19 would be a good reference for this part 
//app.post('/notes', (req, res) => {
    //res.json(req.body);
//});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);