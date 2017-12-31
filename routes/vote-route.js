var express = require('express');
var voteController = require('../controllers/vote-controller');

const router = express.Router();

router.route('/')
    .get(
        voteController.getVote
    )
    .post(
        voteController.addVote
    )

module.exports = router;