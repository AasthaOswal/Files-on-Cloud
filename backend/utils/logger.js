const logError = (err, req) => {
  const sanitizedBody = { ...req.body };

  // Remove sensitive fields
  delete sanitizedBody.password;
  delete sanitizedBody.confirmPassword;
  delete sanitizedBody.token;

  console.error('❌ Unhandled Exception:', {
    timestamp: new Date().toISOString(),

    method: req.method,
    route: req.originalUrl,
    ip: req.ip,

    userAgent: req.get('User-Agent'),
    referrer: req.get('Referer') || 'N/A',

    params: req.params,
    query: req.query,
    body: sanitizedBody,

    errorMessage: err.message,
    stack: err.stack,

    environment: process.env.NODE_ENV || 'development',

    memoryUsage: {
      rss: `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`,
      heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
      heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`
    }
  });
};

module.exports = {
  logError
};