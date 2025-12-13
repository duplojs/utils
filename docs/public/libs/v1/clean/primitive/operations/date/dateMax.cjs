'use strict';

var max = require('../../../../date/max.cjs');
var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function dateMax(...input) {
    if (input.length === 1) {
        const [first] = input;
        return (...rest) => (dateMax(...[first, ...rest]));
    }
    return wrapValue.wrapValue(max.max(input.map(unwrap.unwrap)));
}

exports.dateMax = dateMax;
