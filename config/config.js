
module.exports = {
    db: {
        database: 'deaqnunoovochd',
        username: 'tempvzmllinfeh',
        password: '81eb9d7960cdf723170baa65ef907358bf0cb015d876ed32f1a7f59a5b0c8a7e',
        host: 'ec2-23-21-155-53.compute-1.amazonaws.com',
        dialect: 'postgres',
        port: 5432
    },
    // db: {
    //     database: 'webphongtro',
    //     username: 'postgres',
    //     password: '0914814880',
    //     host: 'localhost',
    //     dialect: 'postgres',
    //     port: 5432
    // },
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    secret_key : "timphongtro",
    port_api: process.env.PORT || 5000
}