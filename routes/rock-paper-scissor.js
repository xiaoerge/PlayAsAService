var express = require('express');
var router = express.Router();
var util = require('../common/util');

router.get('/', function (req, res, next) {

    var randVal = util.randomInt(1, 3);
    var staticUrl = '/static/images/rockpaperscissor/';
    var staticMap = {
        1: {'val': 'Rock', 'png': staticUrl+'rock.png', 'gif': staticUrl+'rock.gif'},
        2: {'val': 'Paper', 'png': staticUrl+'paper.png', 'gif': staticUrl+'paper.gif'},
        3: {'val': 'Scissor', 'png': staticUrl+'scissor.png', 'gif': staticUrl+'scissor.gif'}
    };

    var title = 'PlayAsAService (PaaS) Rock Paper Scissor';
    var description = 'Rock Paper Scissor open source on Github https://github.com/xiaoerge/PlayAsAService';
    var data = {
        'title': title,
        'description': description,
        'author': 'xiaoerge',
        'keywords': 'Play, rock paper scissor, game, xiaoerge, github, opensource, mit',
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
        'randSrc': staticMap[randVal]['gif'],
        'randVal': staticMap[randVal]['val']
    };

    res.render('rock-paper-scissor', data);
});

module.exports = router;
