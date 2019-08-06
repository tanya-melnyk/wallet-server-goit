const User = require("./usersModel");

exports.getAllUsers = (req, res) =>
  User.find()
    .then(docs => res.status(200).json(docs))
    .catch(err => {
      res.status(500).json({ err: err.message });
    });

exports.findUserById = (req, res) =>
  User.findById({ _id: req.params.id })
    .then(doc =>
      doc
        ? res.status(200).json(doc)
        : res.status(404).json({ err: "User not found" })
    )
    .catch(err => res.status(500).json({ err: err.message }));

exports.addUser = (req, res) => {
  const user = new User({
    ...req.body
    // name: req.body.name,
    // description: req.body.description,
    // price: req.body.price,
    // currency: req.body.currency,
    // created: req.body.created,
    // modified: req.body.modified,
    // categories: req.body.categories
  });
  user
    .save()
    .then(doc => res.status(201).json({ createdUser: doc }))
    .catch(err => res.status(500).json({ err: err.message }));
};

exports.updateUser = (req, res) => {
  const updatedData = {};
  Object.keys(req.body).forEach(
    field => (updatedData[field] = req.body[field])
  );
  User.updateOne({ _id: req.params.id }, { $set: updatedData })
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json({ err: err.message }));
};

exports.deleteUser = (req, res) =>
  User.deleteOne({ _id: req.params.id })
    .then(() => res.send("User was deleted"))
    .catch(err => res.status(500).json({ err: err.message }));
