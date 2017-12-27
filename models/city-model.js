var { sequelize, Sequelize } = require('../config/connection');
const City = sequelize.define('city', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        notNull: true,
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

module.exports = City;