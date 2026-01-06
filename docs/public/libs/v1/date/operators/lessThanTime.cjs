'use strict';

var toTimestamp = require('../toTimestamp.cjs');

function lessThanTime(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => lessThanTime(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimestamp.toTimestamp(input);
    const thresholdTimestamp = toTimestamp.toTimestamp(threshold);
    return inputTimestamp < thresholdTimestamp;
}

exports.lessThanTime = lessThanTime;
