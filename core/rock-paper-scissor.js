'use strict';

var util = require('../common/util');

function RockPaperScissor(){}

RockPaperScissor.prototype.generateStatic = function() {
    var staticUrl = '/static/images/rockpaperscissor/';
    return {
        1: {'val': 'Rock', 'png': staticUrl+'rock.png', 'gif': staticUrl+'rock.gif'},
        2: {'val': 'Paper', 'png': staticUrl+'paper.png', 'gif': staticUrl+'paper.gif'},
        3: {'val': 'Scissor', 'png': staticUrl+'scissor.png', 'gif': staticUrl+'scissor.gif'}
    };
};

RockPaperScissor.prototype.indexGet = function (req) {

    var host = util.hostUrl(req);
    var appUrl = util.appUrl(req);
    var randVal = util.randomInt(1, 3);
    var staticMap = this.generateStatic();

    var title = 'Rock Paper Scissor (PlayAsAService)';
    var description = 'You played a '+staticMap[randVal]['val'];
    return {
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
};

RockPaperScissor.prototype.indexPost = function (req) {
    var host = util.hostUrl(req);
    var appUrl = util.appUrl(req);
    var randVal = util.randomInt(1, 3);
    var staticMap = this.generateStatic();

    var title = 'Rock Paper Scissor (PlayAsAService)';
    var description = 'You played a '+staticMap[randVal]['val'];

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
                "footer": "Rock Paper Scissor",
                "footer_icon": "https://paas.idpie.com/static/icons/ms-icon-310x310.png",
                "ts": Date.now()
            }
        ]
    };
};

module.exports = new RockPaperScissor();
