'use strict';

var util = require('../common/util');

function DiceRoll(){}

DiceRoll.prototype.generateStatic = function() {
    var staticUrl = '/static/images/diceroll/';
    return {
        1: {'val': 1, 'png': staticUrl + 'dice-rolling-1.png', 'gif': staticUrl + 'dice-rolling-1.gif'},
        2: {'val': 2, 'png': staticUrl + 'dice-rolling-2.png', 'gif': staticUrl + 'dice-rolling-2.gif'},
        3: {'val': 3, 'png': staticUrl + 'dice-rolling-3.png', 'gif': staticUrl + 'dice-rolling-3.gif'},
        4: {'val': 4, 'png': staticUrl + 'dice-rolling-4.png', 'gif': staticUrl + 'dice-rolling-4.gif'},
        5: {'val': 5, 'png': staticUrl + 'dice-rolling-5.png', 'gif': staticUrl + 'dice-rolling-5.gif'},
        6: {'val': 6, 'png': staticUrl + 'dice-rolling-6.png', 'gif': staticUrl + 'dice-rolling-6.gif'}
    };
};

DiceRoll.prototype.indexGet = function(req) {

    var host = util.hostUrl(req);
    var appUrl = util.appUrl(req);
    var randVal = util.randomInt(1, 6);
    var staticMap = this.generateStatic();

    var title = 'Dice Roll (PlayAsAService)';
    var description = 'You rolled a '+randVal;
    return {
        'title': title,
        'description': description,
        'author': 'xiaoerge',
        'keywords': 'Play, dice, game, xiaoerge, github, opensource',
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
};

DiceRoll.prototype.indexPost = function (req) {

    var host = util.hostUrl(req);
    var appUrl = util.appUrl(req);
    var randVal = util.randomInt(1, 6);
    var staticMap = this.generateStatic();

    var title = 'Dice Roll (PlayAsAService)';
    var description = 'You rolled a '+randVal;

    return {
        "response_type": "in_channel",
        "text": "",
        "attachments": [
            {
                "author_name": "PlayAsAService",
                "author_link": "https://github.com/xiaoerge/PlayAsAService",
                "author_icon": "https://avatars3.githubusercontent.com/u/2677490?v=3&s=460",
                "title": title,
                "title_link": appUrl,
                "text": description,
                "image_url": host + staticMap[randVal]['gif'],
                "thumb_url": host + staticMap[randVal]['gif'],
                "footer": "Dice Roll",
                "footer_icon": "https://paas.idpie.com/static/icons/ms-icon-310x310.png",
                "ts": Date.now()
            }
        ]
    };
};

module.exports = new DiceRoll();
