const getCostsById = require('./controllers/getCostsById');
const getCostsByCategory = require('./controllers/getCostsByCategory');
const { Router } = require('express');

const router = Router();

router.get('/:id', getCostsById);
router.get('/', getCostsByCategory);

module.exports = router;
