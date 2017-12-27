var { sequelize, Sequelize } = require('../config/connection');
const City = require('./city-model');
const District = sequelize.define('district', {
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
    },
    city_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'city_id'
    }
});

City.hasMany(District, { foreignKey: 'city_id', sourceKey: 'id' });
District.belongsTo(City, { foreignKey: 'city_id', targetKey: 'id' });

module.exports = City;