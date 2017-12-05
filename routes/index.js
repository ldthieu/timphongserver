var express = require('express');
var User = require('../models/user-model');
var loginRoute = require('./login-route');
var registerRoute = require('../routes/register-route');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/register', registerRoute);

// router.route('/').get(
//     (req, res) => {
//         User.findAll().then(rs => {
//             res.json(rs);
//         })
//     }
// )

module.exports = router;