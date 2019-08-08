const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = global.Promise;

// mongoDB connection URL
const dbURI = config.get('mongoURI');
// or
// const dbURI =
//   "mongodb+srv://Test-user:" +
//   process.env.MONGO_ATLAS_PW +
//   "@test-so7gz.mongodb.net/test";

const connectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  dbName: 'wallet',
  w: 'majority',
  retryWrites: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, connectionOptions);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
