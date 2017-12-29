var { sequelize, Sequelize } = require('../config/connection');
var Post = require('../models/post-model');
var op = Sequelize.Op;

function editResponseData(arr) {
    let len = arr.length;
    let rs = [];
    if (len > 0) {
        for (let i = 0; i < len; i++) {
            rs[i] = { ...arr[i].dataValues }
            if (arr[i]["dataValues"].create_at) {
                rs[i].create_at = new Date(arr[i]["dataValues"].create_at).getTime();
            }
            if (arr[i]["dataValues"].update_at) {
                rs[i].update_at = new Date(arr[i]["dataValues"].update_at).getTime();
            }
            if (arr[i]["dataValues"].expired) {
                rs[i].expired = new Date(arr[i]["dataValues"].expired).getTime();
            }
        }
        return rs
    }
    return arr;
}

function getSearchParams(inputObj) {
    let rs = {};
    if (inputObj.id) {
        rs.id = object.id;
    }
    if (inputObj.user_id) {
        rs.user_id = inputObj.user_id;
    }
    if (inputObj.title) {
        rs.title = { $like: '%' + inputObj.title + '%' };
    }
    if (inputObj.description) {
        rs.description = { $like: '%' + inputObj.description + '%' };
    }
    if (inputObj.city_id) {
        rs.city_id = inputObj.city_id;
    }
    if (inputObj.district_id) {
        rs.district_id = inputObj.district_id;
    }
    if (inputObj.address) {
        rs.address = { $like: '%' + inputObj.address + '%' };
    }
    if (inputObj.acreage) {
        rs.acreage = { $like: '%' + inputObj.acreage + '%' };
    }
    if (inputObj.status) {
        rs.status = inputObj.status;
    }

    return rs;
}

function getUpdateParams(inputObj) {
    let rs = {};
    if (inputObj.title) {
        rs.title = inputObj.title;
    }
    if (inputObj.description) {
        rs.description = inputObj.description;
    }
    if (inputObj.city_id) {
        rs.city_id = inputObj.city_id;
    }
    if (inputObj.district_id) {
        rs.district_id = inputObj.district_id;
    }
    if (inputObj.address) {
        rs.address = inputObj.address;
    }
    if (inputObj.acreage) {
        rs.acreage = inputObj.acreage;
    }
    if (inputObj.price) {
        rs.price = inputObj.price;
    }
    if (inputObj.update_at) {
        rs.update_at = inputObj.update_at;
    }
    if (inputObj.longitude) {
        rs.longitude = inputObj.longitude;
    }
    if (inputObj.latitude) {
        rs.latitude = inputObj.latitude;
    }
    if (inputObj.count_vote) {
        rs.count_vote = inputObj.count_vote;
    }
    if (inputObj.total_vote_value) {
        rs.total_vote_value = inputObj.total_vote_value;
    }
    if (inputObj.status) {
        rs.status = inputObj.status;
    }
    if (inputObj.expired) {
        rs.expired = inputObj.expired;
    }

    return rs;
}

function createPost(req, res) {
    Post.create({
        user_id: req.body.user_id,
        title: req.body.title,
        description: req.body.description,
        city_id: req.body.city_id,
        district_id: req.body.district_id,
        address: req.body.address,
        acreage: req.body.acreage,
        price: req.body.price,
        create_at: Date.now(),
        update_at: Date.now(),
        longitude: req.body.longitude || -1,
        latitude: req.body.latitude || -1,
        count_vote: 0,
        total_vote_value: 0,
        status: true,
        expired: Date.now() + 7 * 24 * 3600 * 1000
    })
        .then(post => {
            res.status(200).json({
                success: true,
                message: "Created post successfully!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Failed to create post!"
            });
        });
}

function getPost(req, res) {
    let searchParams = getSearchParams(req.query)
    Post.findAll({
        where: searchParams
    })
        .then(rs => {
            if (rs.length > 0) {
                let editedObj = editResponseData(rs);
                res.status(200).json({
                    success: true,
                    message: "get post success!",
                    data: editedObj
                });
            } else {
                res.status(204).json({
                    success: false,
                    message: "No post found!"
                });
            }
        })
}

function updatePost(req, res) {
    Post.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(rs => {
            if (rs) {
                let updateParams = getUpdateParams(req.body);
                Post.update(updateParams, {
                    where: {
                        id: req.body.id
                    }
                }).then(rows => {
                    console.log(JSON.stringify(rows));
                    if (rows[0] === 1) {
                        return res.status(200).json({
                            success: true,
                            message: "Update post successfully!"
                        });
                    } else {
                        return res.status(500).json({
                            success: false,
                            message: "No post is updated"
                        });
                    }
                });
            }
        });
}

module.exports = { createPost, updatePost, getPost };