const User = require('../Models/user.models');
const bcrypt = require('bcrypt');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('purchases');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'Profile updated', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateAvatar = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    const avatarUrl = req.file.path; // Adjust depending on upload middleware
    const user = await User.findByIdAndUpdate(req.user.id, { avatar: avatarUrl }, { new: true });
    res.json({ message: 'Avatar updated', avatar: avatarUrl });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPurchaseStatus = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('purchases');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ purchases: user.purchases });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
