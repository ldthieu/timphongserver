var express = require('express');
var User = require('../models/user-model');
var UserType = require('../models/user-type-model');
var userRoute = require('./user-route');
var postRoute = require('./post-route');
var cityRoute = require('./city-route');
var imageRoute = require('./image-route');
var reportRoute = require('./report-route');
var userTypeRoute = require('./user-type-route');
var districtRoute = require('./district-route');
var voteRoute = require('./vote-route');

const router = express.Router();

router.use('/user', userRoute);
router.use('/post', postRoute);
router.use('/city', cityRoute);
router.use('/district', districtRoute);
router.use('/user_type', userTypeRoute);
router.use('/image', imageRoute);
router.use('/report', reportRoute);
router.use('/vote', voteRoute);

router.route('/').get(
    (req, res) => {
        res.json({message: "you are welcome!"})
    }
)

module.exports = router;