'use strict';

var theTime = require('./theTime.cjs');
var toTimeValue = require('./toTimeValue.cjs');

/**
 * {@include date/minTime/index.md}
 */
function minTime(input) {
    return theTime.TheTime.new(Math.min(...input.map(toTimeValue.toTimeValue)));
}

exports.minTime = minTime;
