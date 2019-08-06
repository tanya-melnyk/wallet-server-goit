const { Router } = require('express');

const costsController = require('../controllers/costs');

const router = Router();

// POST request for creating new Cost item.
router.post('/', costsController.create);

// GET request for list of all Cost items.
router.get('/', costsController.all);

// GET request for one Cost item.
router.get('/:id', costsController.findById);

// PATCH request for updating Price field at one Cost item.
router.patch('/:id', costsController.updatePrice);

// DELETE request for deleting one Cost item.
router.delete('/:id', costsController.delete);

module.exports = router;
