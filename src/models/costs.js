const ObjectID = require('mongodb').ObjectID;

const db = require('../config/db');

exports.all = cb =>
  db
    .get()
    .collection('costs')
    .find()
    .toArray((err, docs) => cb(err, docs));

exports.findById = (id, cb) =>
  db
    .get()
    .collection('costs')
    .findOne({ _id: ObjectID(id) }, (err, doc) => cb(err, doc));

exports.create = (cost, cb) =>
  db
    .get()
    .collection('costs')
    .insertOne(cost, (err, result) => cb(err, result));

exports.update = (id, newData, cb) =>
  db
    .get()
    .collection('costs')
    .updateOne({ _id: ObjectID(id) }, { $set: newData }, (err, doc) =>
      cb(err, doc),
    );

exports.delete = (id, cb) =>
  db
    .get()
    .collection('costs')
    .deleteOne({ _id: ObjectID(id) }, (err, result) => cb(err, result));
