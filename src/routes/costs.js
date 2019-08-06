const { Router } = require('express');

const costsController = require('../controllers/costs');

const router = Router();

// POST request for creating Cost.
router.post('/', costsController.save);

// GET request for list of all Cost items.
router.get('/', costsController.all);

// GET request for one Cost.
router.get('/:id', costsController.findById);

// PATCH request for updating Price field at one Cost.
router.patch('/:id', costsController.updatePrice);

// DELETE request for deleting one Cost.
router.delete('/:id', costsController.delete);

module.exports = router;
