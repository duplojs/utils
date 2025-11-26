'use strict';

var toNative = require('../toNative.cjs');

function subtractMonths(...args) {
    if (args.length === 1) {
        const [month] = args;
        return (input) => subtractMonths(input, month);
    }
    const [input, month] = args;
    const date = toNative.toNative(input);
    const absoluteMonth = Math.abs(month);
    date.setUTCMonth(date.getUTCMonth() - absoluteMonth);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.subtractMonths = subtractMonths;
