const { DataTypes } = require('sequelize');
const { dbusers } = require('../database/users.config');

const User = dbusers.define('users', {
    userid: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
    },
    password:{
            type: DataTypes.STRING,
            allowNull: false,
    },
    role:{
            type: DataTypes.ENUM('client','employee'),
            allowNull: false,
            defaultValue: 'client',
    },
    status:{
            type: DataTypes.ENUM('available','disabled'),
            allowNull: false,
            defaultValue: 'available',
    },

}) ;

module.exports = User;

