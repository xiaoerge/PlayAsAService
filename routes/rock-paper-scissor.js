var express = require('express');
var router = express.Router();
var util = require('../common/util');

router.get('/', function (req, res, next) {

    var host = req.protocol + '://' + req.get('host');
    var appUrl = host + req.baseUrl;
    var randVal = util.randomInt(1, 3);
    var staticUrl = '/static/images/rockpaperscissor/';
    var staticMap = {
        1: {'val': 'Rock', 'png': staticUrl+'rock.png', 'gif': staticUrl+'rock.gif'},
        2: {'val': 'Paper', 'png': staticUrl+'paper.png', 'gif': staticUrl+'paper.gif'},
        3: {'val': 'Scissor', 'png': staticUrl+'scissor.png', 'gif': staticUrl+'scissor.gif'}
    };

    var title = 'Rock Paper Scissor (PlayAsAService)';
    var description = 'You played a '+staticMap[randVal]['val'];
    var data = {
        'title': title,
        'description': description,
        'author': 'xiaoerge',
        'keywords': 'Play, rock paper scissor, game, xiaoerge, github, opensource',
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
        'fullUrl': appUrl,
        'randSrc': staticMap[randVal]['gif'],
        'randVal': staticMap[randVal]['val']
    };

    res.render('rock-paper-scissor', data);
});

module.exports = router;
