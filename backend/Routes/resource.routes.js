const express = require('express');
const router = express.Router();
const resourceController = require('../Controllers/resource.controller');
const { authenticateAdmin, authorizeRoles } = require('../Middlewares/auth.middleware');
const upload = require('../Middlewares/multer.middleware');

// Public routes
router.get('/', resourceController.getResources);
router.get('/:id', resourceController.getResourceById);

// Protected routes for admins with upload for PDFs
router.post(
  '/',
  authenticateAdmin,
  authorizeRoles('superadmin', 'moderator'),
  upload.single('pdf'),
  resourceController.createResource
);

router.put(
  '/:id',
  authenticateAdmin,
  authorizeRoles('superadmin', 'moderator'),
  upload.single('pdf'),
  resourceController.updateResource
);

router.delete(
  '/:id',
  authenticateAdmin,
  authorizeRoles('superadmin'),
  resourceController.deleteResource
);

module.exports = router;
