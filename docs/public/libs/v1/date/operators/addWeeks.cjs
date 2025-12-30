'use strict';

var constants = require('../constants.cjs');
var toNative = require('../toNative.cjs');

function addWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => addWeeks(input, week);
    }
    const [input, week] = args;
    const date = toNative.toNative(input);
    date.setTime(date.getTime() + (week * constants.millisecondInOneWeek));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.addWeeks = addWeeks;
