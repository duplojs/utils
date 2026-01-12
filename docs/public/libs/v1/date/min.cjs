'use strict';

var createOrThrow = require('./createOrThrow.cjs');
var toTimestamp = require('./toTimestamp.cjs');

/**
 * {@include date/min/index.md}
 */
function min(input) {
    return createOrThrow.createOrThrow(Math.min(...input.map(toTimestamp.toTimestamp)));
}

exports.min = min;
