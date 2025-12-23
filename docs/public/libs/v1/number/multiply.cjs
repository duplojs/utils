'use strict';

function multiply(...args) {
    if (args.length === 1) {
        const [operand] = args;
        return (value) => multiply(value, operand);
    }
    const [value, operand] = args;
    return value * operand;
}

exports.multiply = multiply;
