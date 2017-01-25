var express = require('express');
var router = express.Router();
var diceRoll = require('../core/dice-roll');

router.get('/', function (req, res, next) {
    res.render('dice-roll', diceRoll.indexGet(req));
});

router.post('/', function (req, res, next) {
    res.send(diceRoll.indexPost(req));
});

module.exports = router;
