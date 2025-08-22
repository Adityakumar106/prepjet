const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const errorMiddleware = require('./Middlewares/error.middleware').errorHandler;

const authRoutes = require('./Routes/auth.routes.js');
const userRoutes = require('./Routes/user.routes.js');
const adminRoutes = require('./Routes/admin.routes.js');
const blogRoutes = require('./Routes/blog.routes.js');
const resourceRoutes = require('./Routes/resource.routes.js');
const testSeriesRoutes = require('./Routes/testSeries.route.js');
const purchaseRoutes = require('./Routes/purchase.routes.js');

const app = express();

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP if you serve inline scripts/styles or adjust as needed
    crossOriginResourcePolicy: { policy: "cross-origin" }, // Adjust based on your resource sharing needs
    referrerPolicy: { policy: "no-referrer" }, // Example: set a strict referrer policy
    // Add or adjust other Helmet options as needed for your app
  })
);

// Enable morgan logging only in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads')); // serve uploaded files

// Route prefixes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/test-series', testSeriesRoutes);
app.use('/api/purchases', purchaseRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
