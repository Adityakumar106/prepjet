const Purchase = require('../Models/purchase.model');

exports.createPurchase = async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.status(201).json({ message: 'Purchase created', purchaseId: purchase._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPurchasesByUser = async (req, res) => {
  try {
    const purchases = await Purchase.find({ user: req.params.userId }).populate('testSeries');
    res.json(purchases);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPurchaseById = async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id).populate('user testSeries');
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    res.json(purchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    res.json({ message: 'Purchase updated', purchase });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePurchase = async (req, res) => {
  try {
    const purchase = await Purchase.findByIdAndDelete(req.params.id);
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    res.json({ message: 'Purchase deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getPurchaseStatus = async (req, res) => {
  try {
    const purchases = await Purchase.find({ user: req.user.id }).populate('testSeries');
    if (!purchases) return res.status(404).json({ message: 'No purchases found' });
    res.json({ purchases });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};  