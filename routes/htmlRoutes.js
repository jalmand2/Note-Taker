const express = require('express');

// Imported modular route for notes
const notes = require('./apiRoutes');

const app = express();

app.use('/notes', notes);

module.exports = app;