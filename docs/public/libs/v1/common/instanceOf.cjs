'use strict';

var coalescing = require('../array/coalescing.cjs');

function instanceOf(...args) {
    if (args.length === 1) {
        const [constructor] = args;
        return (input) => instanceOf(input, constructor);
    }
    const [input, constructor] = args;
    const formattedConstructor = coalescing.coalescing(constructor);
    for (const constructor of formattedConstructor) {
        if (input instanceof constructor) {
            return true;
        }
    }
    return false;
}

exports.instanceOf = instanceOf;
