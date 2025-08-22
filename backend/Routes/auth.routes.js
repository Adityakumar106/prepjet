const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth.controller');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
// Add routes for logout, password reset, etc.

module.exports = router;
