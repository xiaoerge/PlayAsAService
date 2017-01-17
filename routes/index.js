var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var title = 'PlayAsAService (PaaS)';
    var description = 'Play random games like Dice, Rock Paper Scissors on social media sites.';
    var data = {
        'title': title,
        'description': description,
        'author': 'xiaoerge',
        'keywords': 'Play, game, xiaoerge, github, opensource, mit',
        'fbAppId': '',
        'fbAdmin': '',
        'ogType': 'website',
        'ogUrl': 'https://github.com/xiaoerge/PlayAsAService',
        'ogDescription': description,
        'twitterCard': 'summary',
        'twitterCreator': '@',
        'twitterTitle': title,
        'twitterDescription': description,
        'xlgIconPng': '/static/icons/ms-icon-310x310.png',
        'lgIconPng': '/static/icons/android-icon-192x192.png',
        'mdIconPng': '/static/icons/favicon-96x96.png',
        'smIconPng': '/static/icons/favicon-32x32.png',
        'xsIconPng': '/static/icons/favicon-16x16.png'
    };

    res.render('index', data);
});

module.exports = router;
