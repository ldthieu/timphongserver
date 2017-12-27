var { sequelize, Sequelize } = require('../config/connection');
const UserType = sequelize.define('user_type', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING,
        notNull: true,
        unique: true,
        field: 'name'
    }
});

module.exports = UserType;