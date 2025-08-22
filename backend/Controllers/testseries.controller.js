const TestSeries = require('../Models/testseries.model');
const Test = require('../Models/test.model');
const Question = require('../Models/question.model');

exports.createTestSeries = async (req, res) => {
  try {
    const testSeries = new TestSeries(req.body);
    await testSeries.save();
    res.status(201).json({ message: 'Test Series created', testSeriesId: testSeries._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTestSeriesList = async (req, res) => {
  try {
    const testSeriesList = await TestSeries.find().sort({ createdAt: -1 });
    res.json(testSeriesList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTestSeriesById = async (req, res) => {
  try {
    const testSeries = await TestSeries.findById(req.params.id);
    if (!testSeries) return res.status(404).json({ message: 'Test Series not found' });
    res.json(testSeries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTestSeries = async (req, res) => {
  try {
    const testSeries = await TestSeries.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!testSeries) return res.status(404).json({ message: 'Test Series not found' });
    res.json({ message: 'Test Series updated', testSeries });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTestSeries = async (req, res) => {
  try {
    // Optionally cascade delete tests and questions linked to this series
    await Test.deleteMany({ testSeries: req.params.id });
    await Question.deleteMany({ test: { $in: await Test.find({ testSeries: req.params.id }).distinct('_id') } });
    const testSeries = await TestSeries.findByIdAndDelete(req.params.id);
    if (!testSeries) return res.status(404).json({ message: 'Test Series not found' });
    res.json({ message: 'Test Series and linked tests deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add more functions here for managing tests and questions if necessary
exports.addTestToSeries = async (req, res) => {
  try {
    const { testSeriesId, testData } = req.body;
    const test = new Test(testData);
    test.testSeries = testSeriesId;
    await test.save();

    const testSeries = await TestSeries.findByIdAndUpdate(testSeriesId, { $push: { tests: test._id } }, { new: true });
    if (!testSeries) return res.status(404).json({ message: 'Test Series not found' });

    res.json({ message: 'Test added to series', testId: test._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
