'use strict';

const corsMiddleware = require('cors');
const express = require('express');
const morgan = require('morgan');

const connectDB = require('./db');
const router = require('./router');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(corsMiddleware());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());
// log all request in the Apache combined format to STDOUT
app.use(morgan('combined'));

// Use Routes
app.use(router);

// Error Handling
app.use((req, res, next) => {
  res.status(404).json({ err: '404' });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ err: '500' });
});

module.exports = app;
