var express = require('express');
var cityController = require('../controllers/city-controller');

const router = express.Router();

router.route('/')
    .get(
        cityController.getCity
    )
    .post(
        cityController.createCity
    )

module.exports = router;