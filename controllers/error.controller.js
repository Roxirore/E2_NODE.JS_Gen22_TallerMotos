const sendErrorDev = (err, res) => {

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });

}
const sendErrorProd = (err, res) => {
  // operational, trusted error: send message to client
  if(err.isOperational){
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // programing or other unknown error: don't leak error details
    console.error('Error ☠', err)
    res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
}

const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statsCode || 500;
    err.status = err.status || 'fail';
  
    if (process.env.NODE_ENV === 'development') {
      sendErrorDev(err,res)
    }
    if (process.env.NODE_ENV === 'production') {
      sendErrorProd(err,res)
    }

  };

module.exports = globalErrorHandler;