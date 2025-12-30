'use strict';

var toNative = require('../toNative.cjs');

function addMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => addMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() + millisecond);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.addMilliseconds = addMilliseconds;
