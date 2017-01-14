var express = require('express');
var router = express.Router();
var util = require('../common/util');

router.get('/', function (req, res, next) {

    var randVal = util.randomInt(1, 6);
    var staticUrl = '/static/images/diceroll/';
    var staticMap = {
        1: {'png': staticUrl+'one.png', 'gif': staticUrl+'one.gif'},
        2: {'png': staticUrl+'two.png', 'gif': staticUrl+'two.gif'},
        3: {'png': staticUrl+'three.png', 'gif': staticUrl+'three.gif'},
        4: {'png': staticUrl+'four.png', 'gif': staticUrl+'four.gif'},
        5: {'png': staticUrl+'five.png', 'gif': staticUrl+'five.gif'},
        6: {'png': staticUrl+'six.png', 'gif': staticUrl+'six.gif'}
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
        'randSrc': staticMap[randVal],
        'randVal': randVal,
        'xlgIcon': staticMap[randVal]['gif'],
        'lgIcon': staticMap[randVal]['gif'],
        'mdIcon': staticMap[randVal]['gif'],
        'smIcon': staticMap[randVal]['gif'],
        'xsIcon': staticMap[randVal]['gif']
    };

    res.render('dice-roll', data);
});

module.exports = router;
