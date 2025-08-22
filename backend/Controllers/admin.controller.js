const Admin =require ("../Models/admin.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET ;
const JWT_EXPIRES_IN = '7d';

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id, role: admin.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.json({ message: 'Admin login successful', token, role: admin.role });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Authorization middleware example to use in routes
exports.authorizeAdmin = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    const userRole = req.user.role;
    if (!roles.length || roles.includes(userRole)) {
      return next();
    }
    return res.status(403).json({ message: 'Forbidden: Unauthorized role' });
  };
};

// Redirect based on role can be handled in frontend with role in JWT or here by sending redirect URLs
