const { DataTypes } = require('sequelize');
const { dbrepairs } = require('../database/repairs.config');

const Repair = dbrepairs.define('repairs', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending','completed','cancelled'),
        defaultValue: 'pending',
        allowNull: false,
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Repair;