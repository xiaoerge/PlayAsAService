'use strict';

var util = require('../common/util');

function CardDraw(){}

CardDraw.prototype.generateStatic = function() {
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
    return staticMap;
};

CardDraw.prototype.indexGet = function (req) {

    var host = util.hostUrl(req);
    var appUrl = util.appUrl(req);
    var randVal = util.randomInt(1, 13);
    var randFace = util.randomInt(1, 4);
    var staticMap = this.generateStatic();

    var title = 'Card Draw (PlayAsAService)';
    var description = 'You drew a ' + staticMap[randVal][randFace]['val'];
    return {
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
};

CardDraw.prototype.indexPost = function (req) {
    var host = util.hostUrl(req);
    var appUrl = util.appUrl(req);
    var randVal = util.randomInt(1, 13);
    var randFace = util.randomInt(1, 4);
    var staticMap = this.generateStatic();

    var title = 'Card Draw (PlayAsAService)';
    var description = 'You drew a ' + staticMap[randVal][randFace]['val'];

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
                "image_url": host + staticMap[randVal][randFace]['gif'],
                "thumb_url": host + staticMap[randVal][randFace]['gif'],
                "footer": "Card Draw",
                "footer_icon": "https://paas.idpie.com/static/icons/ms-icon-310x310.png",
                "ts": Date.now()
            }
        ]
    };
};

module.exports = new CardDraw();
