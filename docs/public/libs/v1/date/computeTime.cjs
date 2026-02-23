'use strict';

var constants = require('./constants.cjs');
var toTimeValue = require('./toTimeValue.cjs');

const unitMapper = {
    week: 1 / constants.millisecondInOneWeek,
    day: 1 / constants.millisecondsInOneDay,
    hour: 1 / constants.millisecondInOneHour,
    minute: 1 / constants.millisecondInOneMinute,
    second: 1 / constants.millisecondsInOneSecond,
    millisecond: 1,
};
function computeTime(...args) {
    if (args.length === 1) {
        const [unit] = args;
        return (input) => computeTime(input, unit);
    }
    const [input, unit] = args;
    return toTimeValue.toTimeValue(input) * unitMapper[unit];
}

exports.computeTime = computeTime;
