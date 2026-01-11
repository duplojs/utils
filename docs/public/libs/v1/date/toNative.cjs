'use strict';

var toTimestamp = require('./toTimestamp.cjs');

/**
 * {@include date/toNative/index.md}
 */
function toNative(input) {
    const timestamp = toTimestamp.toTimestamp(input);
    return new Date(timestamp);
}

exports.toNative = toNative;
