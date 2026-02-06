'use strict';

var toNative = require('../toNative.cjs');

/**
 * {@include date/getMilliseconds/index.md}
 */
function getMilliseconds(input) {
    const date = toNative.toNative(input);
    return date.getUTCMilliseconds();
}

exports.getMilliseconds = getMilliseconds;
