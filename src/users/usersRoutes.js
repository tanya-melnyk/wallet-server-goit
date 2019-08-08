const { Router } = require('express');
const router = Router();

const usersCtrls = require('./usersControllers');

// @route /users

// POST request for creating User
router.post('/', usersCtrls.addUser);

// GET request for all Users
router.get('/', usersCtrls.getAllUsers);

// GET request for User by ID
router.get('/:id', usersCtrls.findUserById);

// PATCH request for updating User
router.patch('/:id', usersCtrls.updateUser);

// DELETE request for deleting User
router.delete('/:id', usersCtrls.deleteUser);

module.exports = router;
