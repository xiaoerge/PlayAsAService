var express = require('express');
var router = express.Router();
var util = require('../common/util');

router.get('/', function (req, res, next) {

    var rollVal = util.randomInt(1, 6);
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
        'diceSrc': staticMap[rollVal],
        'diceVal': rollVal,
        'xlgIcon': staticMap[rollVal]['gif'],
        'mdIcon': staticMap[rollVal]['gif'],
        'smIcon': staticMap[rollVal]['gif'],
        'xsIcon': staticMap[rollVal]['gif']
    };

    res.render('diceroll', data);
});

module.exports = router;
