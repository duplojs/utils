'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function max(input) {
    return wrapValue.wrapValue(Math.max(...input.map(unwrap.unwrap)));
}

exports.max = max;
