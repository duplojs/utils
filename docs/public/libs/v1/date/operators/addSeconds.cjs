'use strict';

var constants = require('../constants.cjs');
var toNative = require('../toNative.cjs');

function addSeconds(...args) {
    if (args.length === 1) {
        const [second] = args;
        return (input) => addSeconds(input, second);
    }
    const [input, second] = args;
    const absoluteSecond = Math.abs(second);
    const date = toNative.toNative(input);
    date.setTime(date.getTime() + (absoluteSecond * constants.millisecondsInOneSecond));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.addSeconds = addSeconds;
