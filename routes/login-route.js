var express = require('express');
var User = require('../models/user-model');
var utils = require('../utils/utils');
const router = express.Router();

router.post('/', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
    }).then(rs => {
        if (!rs) {
            res.sendStatus(204);
        // } else if (utils.deCrypt(req.body.password) != utils.deCrypt(rs.password)) {
        } else if (req.body.password != utils.deCrypt(rs.password)) {
            res.sendStatus(400);
        } else {
            delete rs.dataValues.password;
            rs.dataValues["token"] = "";
            res.status(200).json(rs);
        }
    });
});

module.exports = router;