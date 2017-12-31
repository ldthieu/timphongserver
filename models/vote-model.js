var { sequelize, Sequelize } = require('../config/connection');
const User = require('./user-model');
const Post = require('./post-model');
const Vote = sequelize.define('vote', {
    id: {
        type: Sequelize.INTEGER,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    user_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'user_id'
    },
    post_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'post_id'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    point: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'point'
    },
    create_at: {
        type: Sequelize.DATE,
        field: 'create_at'
    },
    update_at: {
        type: Sequelize.DATE,
        field: 'update_at'
    }
});

User.hasMany(Vote, { foreignKey: 'user_id', sourceKey: 'id' });
Vote.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

Post.hasMany(Vote, { foreignKey: 'post_id', sourceKey: 'id' });
Vote.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'id' });

module.exports = Vote;