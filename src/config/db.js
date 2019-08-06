const MongoClient = require('mongodb').MongoClient;

// Database Name
const dbName = 'wallet';

const state = {
  db: null,
};

exports.connect = (url, done) => {
  if (state.db) return done();

  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) return done(err);

    console.log('Connected successfully to server');

    state.db = client.db(dbName);

    done();
  });
};

exports.get = () => state.db;
