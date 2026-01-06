'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var createTheTime = require('../../../../date/createTheTime.cjs');
var unwrap = require('../../../../common/unwrap.cjs');
var toTimestamp = require('../../../../date/toTimestamp.cjs');

function timeMax(input) {
    return wrapValue.wrapValue(createTheTime.createTheTime(Math.max(...input.map(unwrap.unwrap).map(toTimestamp.toTimestamp))));
}

exports.timeMax = timeMax;
