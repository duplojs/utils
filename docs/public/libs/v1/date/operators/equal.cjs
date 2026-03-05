'use strict';

var toTimestamp = require('../toTimestamp.cjs');

function equal(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (first) => equal(first, second);
    }
    const [first, second] = args;
    return toTimestamp.toTimestamp(first) === toTimestamp.toTimestamp(second);
}

exports.equal = equal;
