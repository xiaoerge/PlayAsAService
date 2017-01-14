var express = require('express');
var router = express.Router();
var util = require('../common/util');

router.get('/', function (req, res, next) {

    var randVal = util.randomInt(1, 6);
    var staticUrl = '/static/images/diceroll/';
    var staticMap = {
        1: {'png': staticUrl+'dice-rolling-1.png', 'gif': staticUrl+'dice-rolling-1.gif'},
        2: {'png': staticUrl+'dice-rolling-2.png', 'gif': staticUrl+'dice-rolling-2.gif'},
        3: {'png': staticUrl+'dice-rolling-3.png', 'gif': staticUrl+'dice-rolling-3.gif'},
        4: {'png': staticUrl+'dice-rolling-4.png', 'gif': staticUrl+'dice-rolling-4.gif'},
        5: {'png': staticUrl+'dice-rolling-5.png', 'gif': staticUrl+'dice-rolling-5.gif'},
        6: {'png': staticUrl+'dice-rolling-6.png', 'gif': staticUrl+'dice-rolling-6.gif'}
    };

    var title = 'PlayAsAService (PaaS) Dice Roll';
    var description = 'Roll and random dice open source on Github https://github.com/xiaoerge/PlayAsAService';
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
        'xlgIcon': staticMap[randVal]['gif'],
        'lgIcon': staticMap[randVal]['gif'],
        'mdIcon': staticMap[randVal]['gif'],
        'smIcon': staticMap[randVal]['gif'],
        'xsIcon': staticMap[randVal]['gif'],

        //view specific stuff
        'fullUrl': req.protocol + '://' + req.get('host') + req.baseUrl,
        'randSrc': staticMap[randVal],
        'randVal': randVal
    };

    res.render('dice-roll', data);
});

module.exports = router;
