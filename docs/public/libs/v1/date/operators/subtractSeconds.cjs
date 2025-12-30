'use strict';

var constants = require('../constants.cjs');
var toNative = require('../toNative.cjs');

function subtractSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => subtractSeconds(input, second);
    }
    const [input, second] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() - (second * constants.millisecondsInOneSecond));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.subtractSeconds = subtractSeconds;
