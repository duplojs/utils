'use strict';

var createTheTime = require('./createTheTime.cjs');
var toTimeValue = require('./toTimeValue.cjs');

function minTime(input) {
    return createTheTime.createTheTime(Math.min(...input.map(toTimeValue.toTimeValue)));
}

exports.minTime = minTime;
