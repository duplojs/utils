'use strict';

var theDate = require('./theDate.cjs');
var toNative = require('./toNative.cjs');

/**
 * {@include date/toISOString/index.md}
 */
function toISOString(input) {
    if (input instanceof theDate.TheDate) {
        return input.toISOString();
    }
    return toNative.toNative(input).toISOString();
}

exports.toISOString = toISOString;
