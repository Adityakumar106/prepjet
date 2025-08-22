const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  questionText: { type: String, required: true },
  image: String,
  marks: { type: Number, required: true },
  section: String,
  options: [{ type: String, required: true }],
  correctAnswerIndex: { type: Number, required: true },
  explanation: String,
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
