var express = require('express');
var router = express.Router();
var util = require('../common/util');

router.get('/', function (req, res, next) {

    var host = req.protocol + '://' + req.get('host');
    var appUrl = host + req.baseUrl;
    var randVal = util.randomInt(1, 13);
    var randFace = util.randomInt(1, 4);
    var staticUrl = '/static/images/pokercard/';
    var staticMap = [];
    //1 is ace,   11 is jack, 12 is queen, 13 is king
    for (var i = 1; i < 14; i++) {

        staticMap[i] = [];

        for (var j = 1; j < 5; j++) {

            var faceCap = '';
            var suiteCap = '';
            var face = '';
            var suite = '';

            if (i == 1) {
                faceCap = 'Ace';
                face = 'ace';
            }
            else if (i == 11) {
                faceCap = 'Jack';
                face = 'jack';
            }
            else if (i == 12) {
                faceCap = 'Queen';
                face = 'queen';
            }
            else if (i == 13) {
                faceCap = 'King';
                face = 'king';
            }
            else {
                faceCap = i + "";
                face = i + "";
            }

            if (j == 1) {
                suiteCap = 'Spades';
                suite = 'spades';
            }
            else if (j == 2) {
                suiteCap = 'Hearts';
                suite = 'hearts';
            }
            else if (j == 3) {
                suiteCap = 'Clubs';
                suite = 'clubs';
            }
            else if (j == 4) {
                suiteCap = 'Diamonds';
                suite = 'diamonds';
            }

            //set gif anyway
            staticMap[i][j] = {
                'val': faceCap + ' of ' + suiteCap,
                'png': staticUrl + face + '_of_' + suite + '.png',
                'gif': staticUrl + face + '_of_' + suite + '.png'
            };

        }
    }

    var title = 'Card Draw (PlayAsAService)';
    var description = 'You drew a ' + staticMap[randVal][randFace]['val'];
    var data = {
        'title': title,
        'description': description,
        'author': 'xiaoerge',
        'keywords': 'Play, card draw, game, xiaoerge, github, opensource',
        'host': host,
        'fbAppId': '',
        'fbAdmin': '',
        'ogType': 'website',
        'ogUrl': appUrl,
        'ogDescription': description,
        'twitterCard': 'summary',
        'twitterCreator': '@',
        'twitterTitle': title,
        'twitterDescription': description,

        'xlgIconGif': staticMap[randVal][randFace]['gif'],
        'lgIconGif': staticMap[randVal][randFace]['gif'],
        'mdIconGif': staticMap[randVal][randFace]['gif'],
        'smIconGif': staticMap[randVal][randFace]['gif'],
        'xsIconGif': staticMap[randVal][randFace]['gif'],
        'xlgIconPng': staticMap[randVal][randFace]['png'],
        'lgIconPng': staticMap[randVal][randFace]['png'],
        'mdIconPng': staticMap[randVal][randFace]['png'],
        'smIconPng': staticMap[randVal][randFace]['png'],
        'xsIconPng': staticMap[randVal][randFace]['png'],

        //view specific stuff
        'fullUrl': appUrl,
        'randSrc': staticMap[randVal][randFace]['gif'],
        'randVal': staticMap[randVal][randFace]['val']
    };

    console.log(staticMap[randVal][randFace]);

    res.render('card-draw', data);
});

module.exports = router;
