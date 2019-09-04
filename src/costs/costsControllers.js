'use strict';

const { validationResult } = require('express-validator');

const Cost = require('./costsModel');

// @route    POST /costs
// @desc     Create a cost
exports.addCost = async (req, res) => {
  // Check if added post meets all requirements
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const сost = new Cost(req.body);

  try {
    const savedCost = await сost.save();

    res.status(201).json({ addedCost: savedCost });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server error');
  }
};

// @route    GET /costs
// @desc     Get all costs
exports.getAllCosts = async (req, res) => {
  try {
    const allCosts = await Cost.find().sort({ created: -1 });

    res.status(200).json(allCosts);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server error');
  }
};

// @route    GET /costs/:id
// @desc     Get cost by ID
exports.findCostById = async (req, res) => {
  const costId = req.params.id;

  try {
    const cost = await Cost.findById(costId);

    // Make sure cost exists
    if (!cost) {
      return res.status(404).json({ err: 'Cost not found' });
    }

    res.status(200).json(cost);
  } catch (err) {
    console.error(err.message);

    // check if error was caused by wrong ID
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ err: 'Cost not found' });
    }

    res.status(500).send('Server error');
  }
};

// @route    PATCH /costs/:id
// @desc     Update cost by ID
exports.updateCost = async (req, res) => {
  const costId = req.params.id;
  const updatedData = { ...req.body };

  try {
    const cost = await Cost.findById(costId);

    // Make sure cost exists
    if (!cost) {
      return res.status(404).json({ err: 'Cost not found' });
    }

    await cost.updateOne({ $set: updatedData });

    // Get already updated post
    const updatedCost = await Cost.findById(costId);

    res.status(200).json(updatedCost);
  } catch (err) {
    console.error(err.message);

    // check if error was caused by wrong ID
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ err: 'Cost not found' });
    }

    res.status(500).send('Server error');
  }
};

// @route    DELETE /costs/:id
// @desc     Delete cost by ID
exports.deleteCost = async (req, res) => {
  const costId = req.params.id;

  try {
    const cost = await Cost.findById(costId);

    // Make sure cost exists
    if (!cost) {
      return res.status(404).json({ err: 'Cost not found' });
    }

    await cost.deleteOne();

    res.send(`Cost "${cost.name}" was deleted`);
  } catch (err) {
    console.error(err.message);

    // check if error was caused by wrong ID
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ err: 'Cost not found' });
    }

    res.status(500).send('Server error');
  }
};
