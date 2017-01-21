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

module.exports = new Util();
