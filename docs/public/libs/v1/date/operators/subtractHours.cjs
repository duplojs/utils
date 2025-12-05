'use strict';

var constants = require('../constants.cjs');
var toNative = require('../toNative.cjs');

function subtractHours(...args) {
    if (args.length === 1) {
        const [hour] = args;
        return (input) => subtractHours(input, hour);
    }
    const [input, hour] = args;
    const date = toNative.toNative(input);
    const absoluteHour = Math.abs(hour);
    date.setTime(date.getTime() - (absoluteHour * constants.millisecondInOneHour));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.subtractHours = subtractHours;
