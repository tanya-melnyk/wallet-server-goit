const { Router } = require("express");
const router = Router();

const costsCtrls = require("./costsControllers");

// POST request for creating a Cost item.
router.post("/", costsCtrls.addCost);

// GET request for list of all Cost items.
router.get("/", costsCtrls.getAllCosts);

// GET request for one Cost item.
router.get("/:id", costsCtrls.findCostById);

// PATCH request for updating any fields in a certain Cost item.
router.patch("/:id", costsCtrls.updateCost);

// DELETE request for deleting a Cost item.
router.delete("/:id", costsCtrls.deleteCost);

module.exports = router;
