var express = require('express');
var User = require('../models/user-model');
var utils = require('../utils/utils');
const router = express.Router();

router.get('/', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
    }).then(rs => {
        if (!rs) {
        }
    });
});

module.exports = router;