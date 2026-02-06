'use strict';

var theTime = require('./theTime.cjs');

/**
 * {@include date/isTime/index.md}
 */
function isTime(input) {
    if (input instanceof theTime.TheTime) {
        return true;
    }
    return false;
}

exports.isTime = isTime;
