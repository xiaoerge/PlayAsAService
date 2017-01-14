/**
 * Created by xiaoerge on 1/13/17.
 */
'use strict';

function Util(){}

Util.prototype.randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = new Util();
