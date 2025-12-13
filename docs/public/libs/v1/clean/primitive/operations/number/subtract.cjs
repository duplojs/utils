'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function subtract(...args) {
    if (args.length === 1) {
        const [subtrahend] = args;
        return (value) => subtract(value, subtrahend);
    }
    const [value, subtrahend] = args;
    return wrapValue.wrapValue(unwrap.unwrap(value) - unwrap.unwrap(subtrahend));
}

exports.subtract = subtract;
