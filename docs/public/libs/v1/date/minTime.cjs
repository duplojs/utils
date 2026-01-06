'use strict';

var createTheTime = require('./createTheTime.cjs');
var toTimestamp = require('./toTimestamp.cjs');

function minTime(input) {
    return createTheTime.createTheTime(Math.min(...input.map(toTimestamp.toTimestamp)));
}

exports.minTime = minTime;
