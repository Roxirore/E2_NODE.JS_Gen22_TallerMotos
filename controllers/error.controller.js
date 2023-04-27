const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statsCode || 500;
    err.status = err.status || 'fail';
  
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  };

module.exports = globalErrorHandler;