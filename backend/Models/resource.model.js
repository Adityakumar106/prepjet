const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  pdfUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
