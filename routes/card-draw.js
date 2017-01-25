var express = require('express');
var router = express.Router();
var cardDraw = require('../core/card-draw');

router.get('/', function (req, res, next) {
    res.render('card-draw', cardDraw.indexGet(req));
});

router.post('/', function (req, res, next) {
    res.send(cardDraw.indexPost(req));
});

module.exports = router;
