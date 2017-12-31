
module.exports = {
    // db: {
    //     database: 'd6n82pvue4qnvs',
    //     username: 'yvxxfjnrnirlbj',
    //     password: '963132ee9ea9d0a9ad050416ac843b50b130eeefe607870f4f243d284c2968ef',
    //     host: 'ec2-23-21-164-107.compute-1.amazonaws.com',
    //     dialect: 'postgres',
    //     port: 5432
    // },
    db: {
        database: 'webphongtro',
        username: 'postgres',
        password: '0914814880',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    },
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    secret_key : "timphongtro",
    port_api: process.env.PORT || 5000
}