var { sequelize, Sequelize } = require('../config/connection');
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

function createDistrict(req, res) {
    District.create({
        name: req.body.name,
        city_id: req.body.city_id
    })
        .then(post => {
            res.status(200).json({
                success: true,
                message: "Created district successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to create district!"
            });
        });
}

module.exports = { getDistrict, createDistrict };