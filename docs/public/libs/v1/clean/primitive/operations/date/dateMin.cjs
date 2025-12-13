'use strict';

var min = require('../../../../date/min.cjs');
var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function dateMin(...input) {
    if (input.length === 1) {
        const [first] = input;
        return (...rest) => (dateMin(...[first, ...rest]));
    }
    return wrapValue.wrapValue(min.min(input.map(unwrap.unwrap)));
}

exports.dateMin = dateMin;
