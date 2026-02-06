'use strict';

var theTime = require('./theTime.cjs');
var toTimeValue = require('./toTimeValue.cjs');

/**
 * {@include date/maxTime/index.md}
 */
function maxTime(input) {
    return theTime.TheTime.new(Math.max(...input.map(toTimeValue.toTimeValue)));
}

exports.maxTime = maxTime;
