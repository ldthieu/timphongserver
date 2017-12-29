var { sequelize, Sequelize } = require('../config/connection');
var { enCrypt, deCrypt } = require('../utils/utils');
var City = require('../models/city-model');

function getCity(req, res) {
    City.findAll()
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get city success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No city found!"
                });
            }
        })
}

module.exports = { getCity };