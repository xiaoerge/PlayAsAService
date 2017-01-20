var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var host = req.protocol + '://' + req.get('host');
    var appUrl = host + req.baseUrl;
    var title = 'PlayAsAService (PaaS)';
    var description = 'Play random games like Dice, Rock Paper Scissors on social media sites.';
    var data = {
        'title': title,
        'description': description,
        'author': 'xiaoerge',
        'keywords': 'Play, game, xiaoerge, github, opensource, mit',
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

        'xlgIconGif': '/static/icons/ms-icon-310x310.png',
        'lgIconGif': '/static/icons/android-icon-192x192.png',
        'mdIconGif': '/static/icons/favicon-96x96.png',
        'smIconGif': '/static/icons/favicon-32x32.png',
        'xsIconGif': '/static/icons/favicon-16x16.png',
        'xlgIconPng': '/static/icons/ms-icon-310x310.png',
        'lgIconPng': '/static/icons/android-icon-192x192.png',
        'mdIconPng': '/static/icons/favicon-96x96.png',
        'smIconPng': '/static/icons/favicon-32x32.png',
        'xsIconPng': '/static/icons/favicon-16x16.png'
    };

    res.render('index', data);
});

module.exports = router;
