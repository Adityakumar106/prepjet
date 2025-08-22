const mongoose = require('mongoose');

const testSeriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  instructions: String,
}, { timestamps: true });

module.exports = mongoose.model('TestSeries', testSeriesSchema);
