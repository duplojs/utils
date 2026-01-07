'use strict';

var toTimeValue = require('../toTimeValue.cjs');

function betweenTime(...args) {
    if (args.length === 2) {
        const [greater, less] = args;
        return (input) => betweenTime(input, greater, less);
    }
    const [input, greater, less] = args;
    const inputTimestamp = toTimeValue.toTimeValue(input);
    const greaterTimestamp = toTimeValue.toTimeValue(greater);
    const lessTimestamp = toTimeValue.toTimeValue(less);
    return inputTimestamp >= greaterTimestamp && inputTimestamp <= lessTimestamp;
}

exports.betweenTime = betweenTime;
