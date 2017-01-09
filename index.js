'use strict';
/** @module myModule */

module.exports = function(params) {
    var logging = require('./lib/logging')(params);
    return logging;
};



