var express = require('express');
var router = express.Router();

var diceRoll = require('../core/dice-roll');
var rockPaperScissor = require('../core/rock-paper-scissor');
var cardDraw = require('../core/card-draw');

router.post('/', function (req, res, next) {

    var host = req.protocol + '://' + req.get('host');
    var response = {
        "response_type": "ephemeral",
        "text": 'Sorry, that didn\'t work. Are you missing a correct command parameter?'
    };

    //slack command will send 'text' in body
    if (!('text' in req.body)) {
        res.send(response);
    }

    var commandText = req.body.text;
    var commandTextUpper = commandText.toUpperCase();

    switch (commandTextUpper) {
        case "DICEROLL":
            res.send(diceRoll.indexPost(req));
            break;
        case "ROCKPAPERSCISSOR":
            res.send(rockPaperScissor.indexPost(req));
            break;
        case "CARDDRAW":
            res.send(cardDraw.indexPost(req));
            break;
        default:
            res.send(response);
            break;
    }
});

module.exports = router;
