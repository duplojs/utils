'use strict';

var constants = require('../constants.cjs');
var toNative = require('../toNative.cjs');

function subtractWeeks(...args) {
    if (args.length === 1) {
        const [week] = args;
        return (input) => subtractWeeks(input, week);
    }
    const [input, week] = args;
    const date = toNative.toNative(input);
    const absoluteWeek = Math.abs(week);
    date.setTime(date.getTime() - (absoluteWeek * constants.millisecondInOneWeek));
    const timestamp = date.getTime();
    const isNegative = timestamp < 0;
    return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}`;
}

exports.subtractWeeks = subtractWeeks;
