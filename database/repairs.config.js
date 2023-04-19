const { Sequelize } = require('sequelize');

const dbrepairs = new Sequelize({
    dialect: 'postgres',
    database: 'dbmotorepairs',
    username: 'postgres',
    password: 'MiPostgreSQL!',
    host: 'localhost',
    port: 5432,
    logging: false
});

module.exports = { dbrepairs };