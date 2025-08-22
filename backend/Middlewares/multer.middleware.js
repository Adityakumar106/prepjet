const multer = require('multer');
const path = require('path');

// Storage config for avatars or PDFs
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, 'uploads/avatars/');
    } else if (file.mimetype === 'application/pdf') {
      cb(null, 'uploads/pdfs/');
    } 
    else if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/gif ') {
      cb(null, 'uploads/documents/');

    }
    else {
      cb(new Error('Invalid file type'), false);
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    cb(null, uniqueName);
  }
});

function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file format'), false);
  }
}

const upload = multer({ storage, fileFilter });

module.exports = upload;

