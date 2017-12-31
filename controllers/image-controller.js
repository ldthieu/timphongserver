var { sequelize, Sequelize } = require('../config/connection');
var Image = require('../models/image-model');
var Post = require('../models/post-model');

function getImageByPostID(req, res) {
    Image.findAll({
        where: {
            post_id: req.query.post_id
        },
        include: {
            model: Post
        }
    })
        .then(rs => {
            if (rs.length > 0) {
                res.status(200).json({
                    success: true,
                    message: "get image success!",
                    data: rs
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No image found!"
                });
            }
        })
}

function addImage(req, res) {
    Image.create({
        url: req.body.url,
        post_id: req.body.post_id
    })
        .then(image => {
            res.status(200).json({
                success: true,
                message: "Add image successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to add image!"
            });
        });
}

module.exports = { getImageByPostID, addImage };