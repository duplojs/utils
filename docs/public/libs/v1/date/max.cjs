'use strict';

var createOrThrow = require('./createOrThrow.cjs');
var toTimestamp = require('./toTimestamp.cjs');

/**
 * {@include date/max/index.md}
 */
function max(input) {
    return createOrThrow.createOrThrow(Math.max(...input.map(toTimestamp.toTimestamp)));
}

exports.max = max;
