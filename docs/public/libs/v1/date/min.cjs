'use strict';

var createOrThrow = require('./createOrThrow.cjs');
var toTimestamp = require('./toTimestamp.cjs');

function min(input) {
    return createOrThrow.createOrThrow(Math.min(...input.map(toTimestamp.toTimestamp)));
}

exports.min = min;
