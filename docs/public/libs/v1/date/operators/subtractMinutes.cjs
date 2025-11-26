'use strict';

var constants = require('../constants.cjs');
var toNative = require('../toNative.cjs');

function subtractMinutes(...args) {
    if (args.length === 1) {
        const [minute] = args;
        return (input) => subtractMinutes(input, minute);
    }
    const [input, minute] = args;
    const date = toNative.toNative(input);
    const absoluteMinute = Math.abs(minute);
    date.setTime(date.getTime() - (absoluteMinute * constants.millisecondInOneMinute));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.subtractMinutes = subtractMinutes;
