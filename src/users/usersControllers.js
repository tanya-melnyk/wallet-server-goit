const User = require('./usersModel');

// Create User
exports.addUser = (req, res) => {
  // const { name, created, modified } = req.body;
  // const user = new User({
  //   name,
  //   created,
  //   modified,
  // });

  const user = new User({
    ...req.body,
  });
  user
    .save()
    .then(doc => res.status(201).json({ createdUser: doc }))
    .catch(err => res.status(500).json({ err: err.message }));
};

// Get all Users
exports.getAllUsers = (req, res) =>
  User.find()
    .sort({ name: 1 })
    .then(docs => res.status(200).json(docs))
    .catch(err => {
      res.status(500).json({ err: err.message });
    });

// Find User by ID
exports.findUserById = (req, res) =>
  User.findById({ _id: req.params.id })
    .then(doc =>
      doc
        ? res.status(200).json(doc)
        : res.status(404).json({ err: 'User not found' }),
    )
    .catch(err => res.status(500).json({ err: err.message }));

// Update User
exports.updateUser = (req, res) => {
  const updatedData = {};
  Object.keys(req.body).forEach(
    field => (updatedData[field] = req.body[field]),
  );
  User.updateOne({ _id: req.params.id }, { $set: updatedData })
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json({ err: err.message }));
};

// Delete User
exports.deleteUser = (req, res) =>
  User.deleteOne({ _id: req.params.id })
    .then(() => res.send('User was deleted'))
    .catch(err => res.status(500).json({ err: err.message }));
