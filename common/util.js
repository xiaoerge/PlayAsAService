/**
 * Created by xiaoerge on 1/13/17.
 */
'use strict';

function Util(){}

Util.prototype.randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Util.prototype.capFirst = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

Util.prototype.hostUrl = function(req) {
    return req.protocol + '://' + req.get('host');
};

Util.prototype.appUrl = function(req) {
    return this.hostUrl(req) + req.baseUrl;
};

module.exports = new Util();
