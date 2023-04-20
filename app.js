const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/users.routes');
const repairsRouter = require('./routes/repairs.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/users/:userid/repairs', repairsRouter);

module.exports = app;