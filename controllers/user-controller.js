var { sequelize, Sequelize } = require('../config/connection');
var { enCrypt, deCrypt } = require('../utils/utils');
var User = require('../models/user-model');
var UserType = require('../models/user-type-model');

function login(req, res) {
    User.findOne({
        where: {
            username: req.body.username,
        }
    }).then(rs => {
        if (!rs) {
            res.sendStatus(204);
            // } else if (utils.deCrypt(req.body.password) != utils.deCrypt(rs.password)) {
        } else if (req.body.password != deCrypt(rs.password)) {
            res.sendStatus(400);
        } else {
            delete rs.dataValues.password;
            rs.dataValues["token"] = "";
            res.status(200).json(rs);
        }
    });
}

function register(req, res) {
    User.findOne({
        where: {
            username: req.body.username,
        }
    }).then(rs => {
        if (!rs) {
            User.create({
                username: req.body.username,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                user_type_id: req.body.user_type_id
            })
                .then(user => {
                    res.status(200).json({
                        success: true,
                        message: "Created user successfully!"
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        success: false,
                        message: "Failed to create user!"
                    });
                });
        } else {
            res.status(403).json({
                success: false,
                message: "The user already exists!"
            });
        }
    });
}

function getUser(req, res) {
    let params = {};
    if (req.query.id) {
        params.id = req.query.id;
    }
    User.findAll({
        where: params,
        include: {
            model: UserType
        }
    })
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get user success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No user found!"
                });
            }
        })
}

module.exports = { login, register, getUser };