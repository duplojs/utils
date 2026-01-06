'use strict';

var createTheTime = require('./createTheTime.cjs');
var toTimestamp = require('./toTimestamp.cjs');

function maxTime(input) {
    return createTheTime.createTheTime(Math.max(...input.map(toTimestamp.toTimestamp)));
}

exports.maxTime = maxTime;
