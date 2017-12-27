var { sequelize, Sequelize } = require('../config/connection');
const User = require('./user-model');
const City = require('./city-model');
const District = require('./district-model');
const Post = sequelize.define('post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    user_id: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'user_id'
    },
    title: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'title'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    city_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'city'
    },
    district_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'district'
    },
    address: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'address'
    },
    acreage: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'acreage'
    },
    price: {
        type: Sequelize.NUMERIC,
        notNull: true,
        field: 'price'
    },
    create_at: {
        type: Sequelize.DATE,
        notNull: true,
        field: 'create_at'
    },
    update_at: {
        type: Sequelize.DATE,
        notNull: true,
        field: 'update_at'
    },
    longitude: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'longitude'
    },
    latitude: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'latitude'
    },
    count_vote: {
        type: Sequelize.INTEGER,
        field: 'count_vote'
    },
    total_vote_value: {
        type: Sequelize.INTEGER,
        field: 'total_vote_value'
    },
    status: {
        type: Sequelize.BOOLEAN,
        notNull: true,
        field: 'status'
    },
    expired: {
        type: Sequelize.DATE,
        notNull: true,
        field: 'expired'
    }
});

User.hasMany(Post, { foreignKey: 'user_id', sourceKey: 'id' });
Post.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

City.hasMany(Post, { foreignKey: 'city_id', sourceKey: 'id' });
Post.belongsTo(City, { foreignKey: 'city_id', targetKey: 'id' });

District.hasMany(Post, { foreignKey: 'district_id', sourceKey: 'id' });
Post.belongsTo(District, { foreignKey: 'district_id', targetKey: 'id' });

module.exports = Post;