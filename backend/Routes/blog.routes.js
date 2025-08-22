const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blog.controller');
const { authenticateAdmin, authorizeRoles } = require('../Middlewares/auth.middleware');

router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogById);

// Protect create/update/delete for admins
router.post('/', authenticateAdmin, authorizeRoles('superadmin', 'moderator'), blogController.createBlog);
router.put('/:id', authenticateAdmin, authorizeRoles('superadmin', 'moderator'), blogController.updateBlog);
router.delete('/:id', authenticateAdmin, authorizeRoles('superadmin'), blogController.deleteBlog);

module.exports = router;
