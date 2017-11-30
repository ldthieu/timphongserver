var { sequelize, Sequelize } = require('../config/connection');

const User = sequelize.define('users', {
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
    user_type: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'user_type'
    },
    last_name: {
        type: Sequelize.STRING,
        field: 'last_name'
    },
    first_name: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'first_name'
    },
    phone: {
        type: Sequelize.STRING,
        field: 'phone'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    avatar: {
        type: Sequelize.STRING,
        field: 'avatar'
    },
    active: {
        type: Sequelize.BOOLEAN,
        field: 'active'
    }
});

module.exports = User;