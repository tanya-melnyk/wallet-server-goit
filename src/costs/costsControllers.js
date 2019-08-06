const Cost = require("./costsModel");

exports.getAllCosts = (req, res) =>
  Cost.find()
    .then(docs => res.status(200).json(docs))
    .catch(err => {
      res.status(500).json({ err: err.message });
    });

exports.findCostById = (req, res) =>
  Cost.findById({ _id: req.params.id })
    .then(doc =>
      doc
        ? res.status(200).json(doc)
        : res.status(404).json({ err: "User not found" })
    )
    .catch(err => res.status(500).json({ err: err.message }));

exports.addCost = (req, res) => {
  const сost = new Cost({
    ...req.body
    // name: req.body.name,
    // description: req.body.description,
    // price: req.body.price,
    // currency: req.body.currency,
    // created: req.body.created,
    // modified: req.body.modified,
    // categories: req.body.categories
  });
  сost
    .save()
    .then(doc => res.status(201).json({ createdCost: doc }))
    .catch(err => res.status(500).json({ err: err.message }));
};

exports.updateCost = (req, res) => {
  const updatedData = {};
  Object.keys(req.body).forEach(
    field => (updatedData[field] = req.body[field])
  );
  Cost.updateOne({ _id: req.params.id }, { $set: updatedData })
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json({ err: err.message }));
};

exports.deleteCost = (req, res) =>
  Cost.deleteOne({ _id: req.params.id })
    .then(() => res.send("Cost was deleted"))
    .catch(err => res.status(500).json({ err: err.message }));
