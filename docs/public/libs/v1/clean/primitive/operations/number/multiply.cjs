'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function multiply(...args) {
    if (args.length === 1) {
        const [multiplier] = args;
        return (value) => multiply(value, multiplier);
    }
    const [value, multiplier] = args;
    return wrapValue.wrapValue(unwrap.unwrap(value) * unwrap.unwrap(multiplier));
}

exports.multiply = multiply;
