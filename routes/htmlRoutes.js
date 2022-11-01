const express = require('express');

// Import custom middleware
const { clog } = require('../middleware/clog');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');

const app = express();

app.use('/notes', notes);


// Initialize custom middleware
app.use(clog);

module.exports = app;