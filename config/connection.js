var { db, pool } = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    port: db.port,
    define: {
        freezeTableName: true,
        timestamps: false
    },
    pool: {
        max: pool.max,
        min: pool.min,
        acquire: pool.acquire,
        idle: pool.idle
    },
    dialectOptions: {
        ssl: true
    }
});

module.exports = { sequelize, Sequelize };