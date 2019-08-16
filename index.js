'use strict';

const app = require('./src/server');
const config = require('config');

const defaultPort = config.get('PORT');
const PORT = process.env.PORT || defaultPort;

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
