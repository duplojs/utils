'use strict';

var toNative = require('../toNative.cjs');

function addMonths(...args) {
    if (args.length === 1) {
        const [month] = args;
        return (input) => addMonths(input, month);
    }
    const [input, month] = args;
    const date = toNative.toNative(input);
    date.setUTCMonth(date.getUTCMonth() + month);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.addMonths = addMonths;
