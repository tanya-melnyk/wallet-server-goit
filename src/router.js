'use strict';

const express = require('express');

const costsRouter = require('./costs/costsRoutes');
const usersRouter = require('./users/usersRoutes');

const app = express();

app.use('/costs', costsRouter);
app.use('/users', usersRouter);

module.exports = app;
