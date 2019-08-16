'use strict';

const costsCtrls = require('./costsControllers');
const { check } = require('express-validator');
const { Router } = require('express');
const router = Router();

// @route /costs

// POST request for creating Cost
router.post(
  '/',
  [
    check('name', 'Cost name is required')
      .not()
      .isEmpty(),
    check('price', 'Please include a price')
      .not()
      .isEmpty(),
  ],
  costsCtrls.addCost,
);

// GET request for all Costs
router.get('/', costsCtrls.getAllCosts);

// GET request for Cost by ID.
router.get('/:id', costsCtrls.findCostById);

// PATCH request for updating Cost
router.patch('/:id', costsCtrls.updateCost);

// DELETE request for deleting Cost
router.delete('/:id', costsCtrls.deleteCost);

module.exports = router;
