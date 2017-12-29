var express = require('express');
var User = require('../models/user-model');
var UserType = require('../models/user-type-model');
var userRoute = require('./user-route');
var postRoute = require('./post-route');
var cityRoute = require('./city-route');
var districtRoute = require('./district-route');

const router = express.Router();

router.use('/user', userRoute);
router.use('/post', postRoute);
router.use('/city', cityRoute);
router.use('/district', districtRoute);

router.route('/').get(
    (req, res) => {
        res.json({message: "you are welcome!"})
    }
)

module.exports = router;