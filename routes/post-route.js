var express = require('express');
var postController = require('../controllers/post-controller');
var utils = require('../utils/utils');
const router = express.Router();

router.route('/')
    .get(
        postController.getPost
    )
    .post(
        postController.createPost
    )
    .put(
        postController.updatePost
    )


module.exports = router;