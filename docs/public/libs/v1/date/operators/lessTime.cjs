'use strict';

var toTimeValue = require('../toTimeValue.cjs');

function lessTime(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => lessTime(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimeValue.toTimeValue(input);
    const thresholdTimestamp = toTimeValue.toTimeValue(threshold);
    return inputTimestamp <= thresholdTimestamp;
}

exports.lessTime = lessTime;
