'use strict';

var theDate = require('./theDate.cjs');
var toTimestamp = require('./toTimestamp.cjs');

/**
 * {@include date/toNative/index.md}
 */
function toNative(input) {
    if (input instanceof theDate.TheDate) {
        return input.toNative();
    }
    const timestamp = toTimestamp.toTimestamp(input);
    return new Date(timestamp);
}

exports.toNative = toNative;
