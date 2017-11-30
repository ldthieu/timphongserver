var { sequelize, Sequelize } = require('../config/connection');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    username: {
        type: Sequelize.STRING,
        notNull: true,
        unique: true,
        field: 'username'
    },
    password: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'password'
    },
    lastname: {
        type: Sequelize.STRING,
        field: 'lastname'
    },
    firstname: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'firstname'
    }
});

module.exports = User;