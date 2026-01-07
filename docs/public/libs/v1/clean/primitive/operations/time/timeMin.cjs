'use strict';

var toTimeValue = require('../../../../date/toTimeValue.cjs');
var wrapValue = require('../../../../common/wrapValue.cjs');
var createTheTime = require('../../../../date/createTheTime.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function timeMin(input) {
    return wrapValue.wrapValue(createTheTime.createTheTime(Math.min(...input.map(unwrap.unwrap).map(toTimeValue.toTimeValue))));
}

exports.timeMin = timeMin;
