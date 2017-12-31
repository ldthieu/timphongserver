var { sequelize, Sequelize } = require('../config/connection');
const Post = require('./post-model');
const Image = sequelize.define('image', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    url: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'url'
    },
    post_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'post_id'
    }
});

Post.hasMany(Image, { foreignKey: 'post_id', sourceKey: 'id' });
Image.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'id'});

module.exports = Image;