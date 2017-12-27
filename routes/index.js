var express = require('express');
var User = require('../models/user-model');
var UserType = require('../models/user-type-model');
var loginRoute = require('./login-route');
var registerRoute = require('../routes/register-route');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/register', registerRoute);

router.route('/').get(
    (req, res) => {
        User.findAll({
            include: [{
                model: UserType
            }]
        }).then(rs => {
            res.json(rs);
        })
    }
)

module.exports = router;