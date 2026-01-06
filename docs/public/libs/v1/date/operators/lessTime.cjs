'use strict';

var toTimestamp = require('../toTimestamp.cjs');

function lessTime(...args) {
    if (args.length === 1) {
        const [threshold] = args;
        return (input) => lessTime(input, threshold);
    }
    const [input, threshold] = args;
    const inputTimestamp = toTimestamp.toTimestamp(input);
    const thresholdTimestamp = toTimestamp.toTimestamp(threshold);
    return inputTimestamp <= thresholdTimestamp;
}

exports.lessTime = lessTime;
