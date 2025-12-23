'use strict';

var toTimestamp = require('./toTimestamp.cjs');

function toNative(input) {
    const timestamp = toTimestamp.toTimestamp(input);
    return new Date(timestamp);
}

exports.toNative = toNative;
