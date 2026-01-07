'use strict';

var toTimeValue = require('../toTimeValue.cjs');

function lessThanTime(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => lessThanTime(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimeValue.toTimeValue(input);
    const thresholdTimestamp = toTimeValue.toTimeValue(threshold);
    return inputTimestamp < thresholdTimestamp;
}

exports.lessThanTime = lessThanTime;
