'use strict';

var toTimestamp = require('../../../../date/toTimestamp.cjs');
var wrapValue = require('../../../../common/wrapValue.cjs');
var createTheTime = require('../../../../date/createTheTime.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function timeMin(input) {
    return wrapValue.wrapValue(createTheTime.createTheTime(Math.min(...input.map(unwrap.unwrap).map(toTimestamp.toTimestamp))));
}

exports.timeMin = timeMin;
