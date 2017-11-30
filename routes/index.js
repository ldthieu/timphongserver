var express = require('express');
var User = require('../models/user-model');
var loginRoute = require('./login-route');

const router = express.Router();

router.use('/login', loginRoute);

// router.route('/').get(
//     (req, res) => {
//         User.findAll().then(rs => {
//             res.json(rs);
//         })
//     }
// )

module.exports = router;