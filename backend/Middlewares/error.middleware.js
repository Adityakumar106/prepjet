// Centralized error handling middleware for Express

exports.errorHandler= async (err, req, res, next)=> {
  console.error(err);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    // Optionally include stack trace if in development mode
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};
