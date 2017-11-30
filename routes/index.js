var express = require('express');
var User = require('../models/user-model');

const router = express.Router();

router.route('/').get(
    (req, res) => {
        User.findAll().then(rs => {
            res.json(rs);
        })
    }
)

module.exports = router;