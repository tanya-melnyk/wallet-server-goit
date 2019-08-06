const Costs = require('../models/costs');

exports.all = (req, res) =>
  Costs.all((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.status(200).json(docs);
  });

exports.findById = (req, res) =>
  Costs.findById(req.params.id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.status(200).json(doc);
  });

exports.create = (req, res) => {
  const cost = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    currency: req.body.currency,
    created: req.body.created,
    modified: req.body.modified,
    categories: req.body.categories,
  };

  Costs.create(cost, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.status(200).json(cost);
  });
};

exports.updatePrice = (req, res) => {
  const updatedPrice = {
    price: req.body.price,
  };

  Costs.update(req.params.id, updatedPrice, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  });
};

exports.delete = (req, res) =>
  Costs.delete(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  });
