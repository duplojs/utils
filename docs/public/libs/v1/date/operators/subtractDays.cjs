'use strict';

var constants = require('../constants.cjs');
var toNative = require('../toNative.cjs');

function subtractDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => subtractDays(input, day);
    }
    const [input, day] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() - (day * constants.millisecondsInOneDay));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.subtractDays = subtractDays;
