var { sequelize, Sequelize } = require('../config/connection');
const User = require('./user-model');
const Post = require('./post-model');
const Report = sequelize.define('report', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    post_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'post_id'
    },
    user_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        field: 'user_id'
    },
    title: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'title'
    },
    content: {
        type: Sequelize.STRING,
        notNull: true,
        field: 'content'
    }
});

Post.hasMany(Report, { foreignKey: 'post_id', sourceKey: 'id' });
Report.belongsTo(Post, { foreignKey: 'post_id', targetKey: 'id' });

User.hasMany(Report, { foreignKey: 'user_id', sourceKey: 'id' });
Report.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

module.exports = Report;