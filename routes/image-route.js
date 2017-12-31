var express = require('express');
var imageController = require('../controllers/image-controller');

const router = express.Router();

router.route('/')
    .get(
        imageController.getImageByPostID
    )
    .post(
        imageController.addImage
    )

module.exports = router;