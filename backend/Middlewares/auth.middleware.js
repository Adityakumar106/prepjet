const jwt = require('jsonwebtoken');
const User = require('../Models/user.models');
const Admin = require('../Models/admin.model');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

exports.authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: 'Invalid token user' });
    req.user = { id: user._id, role: 'user' };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

exports.authenticateAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const admin = await Admin.findById(decoded.id);
    if (!admin) return res.status(401).json({ message: 'Invalid token admin' });
    req.user = { id: admin._id, role: admin.role };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

// Role-based access control middleware
exports.authorizeRoles = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden: Access denied' });
  }
  next();
};

