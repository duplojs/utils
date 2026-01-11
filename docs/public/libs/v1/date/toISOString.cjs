'use strict';

var toNative = require('./toNative.cjs');

/**
 * {@include date/toISOString/index.md}
 */
function toISOString(input) {
    const date = toNative.toNative(input);
    return date.toISOString();
}

exports.toISOString = toISOString;
