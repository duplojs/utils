'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var createTheTime = require('../../../../date/createTheTime.cjs');
var unwrap = require('../../../../common/unwrap.cjs');
var toTimeValue = require('../../../../date/toTimeValue.cjs');

/**
 * {@include clean/timeMax/index.md}
 */
function timeMax(input) {
    return wrapValue.wrapValue(createTheTime.createTheTime(Math.max(...input.map(unwrap.unwrap).map(toTimeValue.toTimeValue))));
}

exports.timeMax = timeMax;
