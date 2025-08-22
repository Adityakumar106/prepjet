const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/admin.controller');
const {authenticateAdmin} = require('../Middlewares/auth.middleware');

// Public admin login route
router.post('/login', adminController.login);

// Protect routes below to admins only
router.use(authenticateAdmin);
// Example: router.use(authenticateAdmin, authorizeRoles('superadmin'));

module.exports = router;
