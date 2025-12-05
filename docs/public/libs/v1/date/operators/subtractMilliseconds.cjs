'use strict';

var toNative = require('../toNative.cjs');

function subtractMilliseconds(...args) {
    if (args.length === 1) {
        const [millisecond] = args;
        return (input) => subtractMilliseconds(input, millisecond);
    }
    const [input, millisecond] = args;
    const date = toNative.toNative(input);
    const absoluteMillisecond = Math.abs(millisecond);
    date.setTime(date.getTime() - absoluteMillisecond);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.subtractMilliseconds = subtractMilliseconds;
