var { sequelize, Sequelize } = require('../config/connection');
var Report = require('../models/report-model');
var Post = require('../models/post-model');
var User = require('../models/user-model');

function getReport(req, res) {
    let reqParams = {};
    if (req.query.post_id) {
        reqParams.post_id = req.query.post_id;
    }
    if (req.query.user_id) {
        reqParams.user_id = req.query.user_id;
    }
    Report.findAll({
        where: reqParams,
        include: [{
            model: Post
        }, {
            model: User
        }]
    })
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get report success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No report found!"
                });
            }
        })
}

function addReport(req, res) {
    Report.create({
        post_id: req.body.post_id,
        user_id: req.body.user_id,
        title: req.body.title,
        content: req.body.content
    })
        .then(report => {
            res.status(200).json({
                success: true,
                message: "Add report successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to add report!"
            });
        });
}

module.exports = { getReport, addReport };