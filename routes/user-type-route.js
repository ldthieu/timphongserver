var express = require('express');
var userTypeController = require('../controllers/user-type-controller');

const router = express.Router();

router.route('/')
    .get(
        userTypeController.getUserType
    )
    .post(
        userTypeController.createUserType
    )

module.exports = router;