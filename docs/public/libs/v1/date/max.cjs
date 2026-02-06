'use strict';

var theDate = require('./theDate.cjs');
var toTimestamp = require('./toTimestamp.cjs');

/**
 * {@include date/max/index.md}
 */
function max(input) {
    return theDate.TheDate.new(Math.max(...input.map(toTimestamp.toTimestamp)));
}

exports.max = max;
