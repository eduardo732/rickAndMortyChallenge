'use strict'
const express = require('express');
const app = express();
const routes = require('../src/Routes/route');


//Routes
app.use('/api', routes);

module.exports = app;