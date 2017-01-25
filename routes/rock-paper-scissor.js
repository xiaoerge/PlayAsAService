var express = require('express');
var router = express.Router();
var rockPaperScissor = require('../core/rock-paper-scissor');

router.get('/', function (req, res, next) {
    res.render('rock-paper-scissor', rockPaperScissor.indexGet(req));
});


router.post('/', function (req, res, next) {
    res.send(rockPaperScissor.indexPost(req));
});
module.exports = router;
