'use strict';

const config = require('config');

const app = require('./src/app');
const connectDB = require('./src/db');

// Connect Database
connectDB();

// Run Server
const defaultPort = config.get('PORT');
const PORT = process.env.PORT || defaultPort;

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
