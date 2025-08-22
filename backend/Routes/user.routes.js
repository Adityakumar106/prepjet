const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const { authenticateUser } = require('../Middlewares/auth.middleware');
const upload = require('../Middlewares/multer.middleware');

router.use(authenticateUser);

router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);
router.put('/avatar', upload.single('avatar'), userController.updateAvatar);
router.get('/purchases', userController.getPurchaseStatus);

module.exports = router;
