const express = require('express');
const usersrouter = require('./routes/users.routes');
const repairsrouter = require('./routes/repairs.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', usersrouter);
// app.use('/api/v1/users/:userid/repairs', repairsrouter);

module.exports = app;