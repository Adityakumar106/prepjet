const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  testSeries: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSeries', required: true },
  purchaseDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'expired', 'cancelled'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
