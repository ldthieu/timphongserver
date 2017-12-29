var express = require('express');
var districtController = require('../controllers/district-controller');

const router = express.Router();

router.route('/')
    .get(
        districtController.getDistrict
    )

module.exports = router;