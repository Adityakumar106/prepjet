const express = require('express');
const router = express.Router();
const testSeriesController = require('../Controllers/testseries.controller');
const { authenticateAdmin, authorizeRoles } = require('../Middlewares/auth.middleware');

router.get('/', testSeriesController.getTestSeriesList);
router.get('/:id', testSeriesController.getTestSeriesById);

router.post('/', authenticateAdmin, authorizeRoles('superadmin', 'moderator'), testSeriesController.createTestSeries);
router.put('/:id', authenticateAdmin, authorizeRoles('superadmin', 'moderator'), testSeriesController.updateTestSeries);
router.delete('/:id', authenticateAdmin, authorizeRoles('superadmin'), testSeriesController.deleteTestSeries);

// You can add nested routers for tests and questions here if you want

module.exports = router;
