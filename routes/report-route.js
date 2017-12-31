var express = require('express');
var reportController = require('../controllers/report-controller');

const router = express.Router();

router.route('/')
    .get(
        reportController.getReport
    )
    .post(
        reportController.addReport
    )

module.exports = router;