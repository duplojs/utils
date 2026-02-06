'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var theTime = require('../../../../date/theTime.cjs');
var unwrap = require('../../../../common/unwrap.cjs');
var toTimeValue = require('../../../../date/toTimeValue.cjs');

/**
 * {@include clean/timeMin/index.md}
 */
function timeMin(input) {
    return wrapValue.wrapValue(theTime.TheTime.new(Math.min(...input.map(unwrap.unwrap).map(toTimeValue.toTimeValue))));
}

exports.timeMin = timeMin;
