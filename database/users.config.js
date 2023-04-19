const { Sequelize } = require('sequelize');

const dbusers = new Sequelize({
    dialect: 'postgres',
    database: 'dbmotousers',
    username: 'postgres',
    password: 'MiPostgreSQL!',
    host: 'localhost',
    port: 5432,
    logging: false
});

module.exports = { dbusers };