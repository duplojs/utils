'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var theTime = require('../../../../date/theTime.cjs');
var unwrap = require('../../../../common/unwrap.cjs');
var toTimeValue = require('../../../../date/toTimeValue.cjs');

/**
 * {@include clean/timeMax/index.md}
 */
function timeMax(input) {
    return wrapValue.wrapValue(theTime.TheTime.new(Math.max(...input.map(unwrap.unwrap).map(toTimeValue.toTimeValue))));
}

exports.timeMax = timeMax;
