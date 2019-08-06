const { Router } = require("express");
const router = Router();

const usersCtrls = require("./usersControllers");

// POST request for creating a new User.
router.post("/", usersCtrls.addUser);

// GET request for list of all Users.
router.get("/", usersCtrls.getAllUsers);

// GET request for a certain User.
router.get("/:id", usersCtrls.findUserById);

// PATCH request for updating any fields in a certain User.
router.patch("/:id", usersCtrls.updateUser);

// DELETE request for deleting a User.
router.delete("/:id", usersCtrls.deleteUser);

module.exports = router;
