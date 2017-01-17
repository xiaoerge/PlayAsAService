var express = require('express');
var router = express.Router();
var util = require('../common/util');

router.get('/', function (req, res, next) {

    var randVal = util.randomInt(1, 6);
    var staticUrl = '/static/images/diceroll/';
    var staticMap = {
        1: {'val': 1, 'png': staticUrl+'dice-rolling-1.png', 'gif': staticUrl+'dice-rolling-1.gif'},
        2: {'val': 2, 'png': staticUrl+'dice-rolling-2.png', 'gif': staticUrl+'dice-rolling-2.gif'},
        3: {'val': 3, 'png': staticUrl+'dice-rolling-3.png', 'gif': staticUrl+'dice-rolling-3.gif'},
        4: {'val': 4, 'png': staticUrl+'dice-rolling-4.png', 'gif': staticUrl+'dice-rolling-4.gif'},
        5: {'val': 5, 'png': staticUrl+'dice-rolling-5.png', 'gif': staticUrl+'dice-rolling-5.gif'},
        6: {'val': 6, 'png': staticUrl+'dice-rolling-6.png', 'gif': staticUrl+'dice-rolling-6.gif'}
    };

    var title = 'Dice Roll';
    var description = 'Roll and random dice on Github https://github.com/xiaoerge/PlayAsAService';
    var data = {
        'title': title,
        'description': description,
        'author': 'xiaoerge',
        'keywords': 'Play, dice, game, xiaoerge, github, opensource, mit',
        'fbAppId': '',
        'fbAdmin': '',
        'ogType': 'website',
        'ogUrl': 'https://github.com/xiaoerge/PlayAsAService',
        'ogDescription': description,
        'twitterCard': 'summary',
        'twitterCreator': '@',
        'twitterTitle': title,
        'twitterDescription': description,

        'xlgIconGif': staticMap[randVal]['gif'],
        'lgIconGif': staticMap[randVal]['gif'],
        'mdIconGif': staticMap[randVal]['gif'],
        'smIconGif': staticMap[randVal]['gif'],
        'xsIconGif': staticMap[randVal]['gif'],
        'xlgIconPng': staticMap[randVal]['png'],
        'lgIconPng': staticMap[randVal]['png'],
        'mdIconPng': staticMap[randVal]['png'],
        'smIconPng': staticMap[randVal]['png'],
        'xsIconPng': staticMap[randVal]['png'],

        //view specific stuff
        'fullUrl': req.protocol + '://' + req.get('host') + req.baseUrl,
        'randSrc': staticMap[randVal]['gif'],
        'randVal': staticMap[randVal]['val']
    };

    res.render('dice-roll', data);
});

module.exports = router;
