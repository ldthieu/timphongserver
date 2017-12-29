var { sequelize, Sequelize } = require('../config/connection');
var { enCrypt, deCrypt } = require('../utils/utils');
var City = require('../models/city-model');
var District = require('../models/district-model');

function getDistrict(req, res) {
    District.findAll({
        include: {
            model: City
        }
    })
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get district success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No district found!"
                });
            }
        })
}

module.exports = { getDistrict };