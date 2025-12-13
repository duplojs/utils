'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function divide(...args) {
    if (args.length === 1) {
        const [divisor] = args;
        return (value) => divide(value, divisor);
    }
    const [value, divisor] = args;
    return wrapValue.wrapValue(unwrap.unwrap(value) / unwrap.unwrap(divisor));
}

exports.divide = divide;
