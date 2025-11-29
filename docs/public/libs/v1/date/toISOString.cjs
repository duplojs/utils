'use strict';

var toNative = require('./toNative.cjs');

function toISOString(input) {
    const date = toNative.toNative(input);
    return date.toISOString();
}

exports.toISOString = toISOString;
