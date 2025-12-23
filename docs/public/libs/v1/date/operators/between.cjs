'use strict';

var toTimestamp = require('../toTimestamp.cjs');

function between(...args) {
    if (args.length === 2) {
        const [greater, less] = args;
        return (input) => between(input, greater, less);
    }
    const [input, greater, less] = args;
    const inputTimestamp = toTimestamp.toTimestamp(input);
    const greaterTimestamp = toTimestamp.toTimestamp(greater);
    const lessTimestamp = toTimestamp.toTimestamp(less);
    return inputTimestamp >= greaterTimestamp && inputTimestamp <= lessTimestamp;
}

exports.between = between;
