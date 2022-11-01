const express = require('express');
const path = require('path');
const api = require('./public/assets/js/index');

const PORT = process.env.port || 3001;

const app = express();