'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function add(...args) {
    if (args.length === 1) {
        const [operand] = args;
        return (value) => add(value, operand);
    }
    const [value, operand] = args;
    return wrapValue.wrapValue(unwrap.unwrap(value) + unwrap.unwrap(operand));
}

exports.add = add;
