var { sequelize, Sequelize } = require('../config/connection');
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

function createCity(req, res) {
    City.create({
        name: req.body.name
    })
        .then(post => {
            res.status(200).json({
                success: true,
                message: "Created city successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to create city!"
            });
        });
}

module.exports = { getCity, createCity };