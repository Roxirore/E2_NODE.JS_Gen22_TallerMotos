const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/users.routes');
const repairsRouter = require('./routes/repairs.routes');
const authRouter = require('./routes/auth.routes');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// if (process.env.NODE_ENV === 'production') {
//   console.log('hola estoy en produccion');
// }
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/users/:userid/repairs', repairsRouter);

app.all('*', (req, res, next) => {
  //  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  //  err.status = 'error';
  //  err.statusCode = 404;

  return next(new AppError(`Can't find ${req.originalUrl} on this server`), 404);
  //return res.status(404).json({
  //  status: 'error',
  // message: `Can't find ${req.originalUrl} on this server`
  // })
});

app.use(globalErrorHandler);

module.exports = app;
