'use strict';

var max = require('../../../../date/max.cjs');
var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

/**
 * {@include clean/dateMax/index.md}
 */
function dateMax(input) {
    return wrapValue.wrapValue(max.max(input.map(unwrap.unwrap)));
}

exports.dateMax = dateMax;
