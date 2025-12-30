'use strict';

var toNative = require('../toNative.cjs');
var constants = require('../constants.cjs');

function addDays(...args) {
    if (args.length === 1) {
        const [day] = args;
        return (input) => addDays(input, day);
    }
    const [input, day] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() + (day * constants.millisecondsInOneDay));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.addDays = addDays;
