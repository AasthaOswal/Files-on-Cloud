const logError = (err, req) => {

  const redact = (input = {}) => {
    const clone = { ...input };
    delete clone.password;
    delete clone.confirmPassword;
    delete clone.token;
    return clone;
  };

  const sanitizedBody = redact(req.body);
  const sanitizedParams = redact(req.params);
  const sanitizedQuery = redact(req.query);

  console.error('Unhandled Exception:', {
    timestamp: new Date().toISOString(),

    method: req.method,
    route: req.originalUrl,
    ip: req.ip,

    userAgent: req.get('User-Agent'),
    referrer: req.get('Referer') || 'N/A',

    params: sanitizedParams,
    query: sanitizedQuery,
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