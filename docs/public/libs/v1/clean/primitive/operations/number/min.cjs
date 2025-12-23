'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function min(input) {
    return wrapValue.wrapValue(Math.min(...input.map(unwrap.unwrap)));
}

exports.min = min;
