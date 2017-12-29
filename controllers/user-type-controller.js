var { sequelize, Sequelize } = require('../config/connection');
var UserType = require('../models/user-type-model');

function getUserType(req, res) {
    UserType.findAll()
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get user type success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No user type found!"
                });
            }
        })
}

function createUserType(req, res) {
    UserType.create({
        name: req.body.name
    })
        .then(post => {
            res.status(200).json({
                success: true,
                message: "Created user type successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to create user type!"
            });
        });
}

module.exports = { getUserType, createUserType };