const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  testSeries: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSeries', required: true },
  name: { type: String, required: true },
  time: { type: Number, required: true }, // in minutes
  order: Number, // order inside series
  description: { type: String, default: '' },//test instruction
  
}, { timestamps: true });

module.exports = mongoose.model('Test', testSchema);
