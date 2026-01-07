'use strict';

var min = require('../../../../date/min.cjs');
var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

/**
 * {@include clean/dateMin/index.md}
 */
function dateMin(input) {
    return wrapValue.wrapValue(min.min(input.map(unwrap.unwrap)));
}

exports.dateMin = dateMin;
