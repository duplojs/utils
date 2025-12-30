'use strict';

var toNative = require('../toNative.cjs');

function addYears(...args) {
    if (args.length === 1) {
        const [year] = args;
        return (input) => addYears(input, year);
    }
    const [input, year] = args;
    const date = toNative.toNative(input);
    date.setUTCFullYear(date.getUTCFullYear() + year);
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.addYears = addYears;
