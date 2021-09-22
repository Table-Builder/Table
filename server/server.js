const express = require('express');
const app = express();
const path = require('path');
const router = require('./api/router');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', router);

app.use(express.json());

module.exports = app;
