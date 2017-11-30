
module.exports = {
    db: {
        database: 'webphongtro',
        username: 'postgres',
        password: '0914814880',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}