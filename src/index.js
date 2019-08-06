const corsMiddleware = require('cors');
const express = require('express');

const costsRouter = require('./routes/costs');
const db = require('./db/db');

// db Connection URL
const url =
  'mongodb+srv://Test-user:123@test-so7gz.mongodb.net/test?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware());

app.use('/costs', costsRouter);

db.connect(url, function(err) {
  if (err) {
    return console.log(err);
  }

  app.listen(PORT, () => {
    console.log('server is running on ' + PORT);
  });
});
