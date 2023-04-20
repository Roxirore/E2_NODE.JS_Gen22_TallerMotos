const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const usersrouter = require('./routes/users.routes');
const repairsrouter = require('./routes/repairs.routes');

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());


app.use('/api/v1/users', usersrouter);
app.use('/api/v1/users/:userid/repairs', repairsrouter);

module.exports = app;