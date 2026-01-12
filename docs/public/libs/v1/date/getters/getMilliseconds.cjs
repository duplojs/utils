'use strict';

var toNative = require('../toNative.cjs');

/**
 * {@include date/getMilliseconds/index.md}
 */
function getMilliseconds(input) {
    const nativeDate = toNative.toNative(input);
    return nativeDate.getUTCMilliseconds();
}

exports.getMilliseconds = getMilliseconds;
