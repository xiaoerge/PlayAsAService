var express = require('express');
var router = express.Router();

var r1 = function (req, res, next) {
    console.log('hello in r1');
    next();
};

var r2 = function (req, res, next) {
    console.log('hello in r2');
    next();
};

router.use(function timeLog (req, res, next) {
    req.requestTime = Date.now();
    console.log('Request Time: ', req.requestTime);
    next()
});

/* GET home page. */
router.get('/', [r1, r2], function(req, res, next) {
    res.responseTime = Date.now();
    console.log('Response Time: ', res.responseTime);

    var rTime = (res.responseTime - req.requestTime) / 1000;

    res.render('index', {'title': 'Express', 'rTime': rTime});
});

module.exports = router;
