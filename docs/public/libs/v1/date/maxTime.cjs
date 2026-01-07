'use strict';

var createTheTime = require('./createTheTime.cjs');
var toTimeValue = require('./toTimeValue.cjs');

function maxTime(input) {
    return createTheTime.createTheTime(Math.max(...input.map(toTimeValue.toTimeValue)));
}

exports.maxTime = maxTime;
