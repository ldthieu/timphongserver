var { sequelize, Sequelize } = require('../config/connection');
var Vote = require('../models/vote-model');
var Post = require('../models/post-model');
var User = require('../models/user-model');

function getVote(req, res) {
    let reqParams = {};
    if (req.query.post_id) {
        reqParams.post_id = req.query.post_id;
    }
    if (req.query.user_id) {
        reqParams.user_id = req.query.user_id;
    }
    Vote.findAll({
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
                    message: "get vote success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No vote found!"
                });
            }
        })
}

function addVote(req, res) {
    Vote.create({
        post_id: req.body.post_id,
        user_id: req.body.user_id,
        description: req.body.description,
        point: req.body.point,
        create_at: Date.now(),
        update_at: Date.now()
    })
        .then(vote => {
            res.status(200).json({
                success: true,
                message: "Add vote successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to add vote!"
            });
        });
}

module.exports = { getVote, addVote };