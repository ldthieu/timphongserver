var express = require('express');
var userController = require('../controllers/user-controller');

const router = express.Router();

router.route('/login')
    .post(
        userController.login
    );

router.route('/register')
    .post(
        userController.register
    );

router.route('/')
    .get(
        userController.getUser
    )

module.exports = router;