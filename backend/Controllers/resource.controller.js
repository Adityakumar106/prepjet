const Resource = require('../Models/resource.model');

exports.createResource = async (req, res) => {
  try {
    // For upload, middleware like multer should handle file and set req.file
    const resourceData = req.body;
    if (req.file) {
      resourceData.pdfUrl = req.file.path; // Adjust according to your upload config
    }
    const resource = new Resource(resourceData);
    await resource.save();
    res.status(201).json({ message: 'Resource created', resourceId: resource._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find().sort({ createdAt: -1 });
    res.json(resources);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateResource = async (req, res) => {
  try {
    const updates = req.body;
    if (req.file) updates.pdfUrl = req.file.path;
    const resource = await Resource.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.json({ message: 'Resource updated', resource });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    // Optionally delete file from storage here
    res.json({ message: 'Resource deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.downloadResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource || !resource.pdfUrl) return res.status(404).json({ message: 'Resource not found' });

    res.download(resource.pdfUrl, (err) => {
      if (err) {
        res.status(500).json({ error: 'Error downloading file' });
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};