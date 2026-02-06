'use strict';

var toTimestamp = require('./toTimestamp.cjs');
var theDate = require('./theDate.cjs');

/**
 * {@include date/min/index.md}
 */
function min(input) {
    return theDate.TheDate.new(Math.min(...input.map(toTimestamp.toTimestamp)));
}

exports.min = min;
