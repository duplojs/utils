'use strict';

var constants = require('./constants.cjs');
var toTimeValue = require('./toTimeValue.cjs');

const formatStringRegex = /WW|DD|HH|mm|ss|SSS/g;
function formatTime(...args) {
    if (args.length === 1) {
        const [formatString] = args;
        return (input) => formatTime(input, formatString);
    }
    const [input, formatString] = args;
    const timeValue = toTimeValue.toTimeValue(input);
    const isNegative = timeValue < 0;
    let remaining = Math.abs(timeValue);
    const weeks = Math.floor(remaining / constants.millisecondInOneWeek);
    remaining -= weeks * constants.millisecondInOneWeek;
    const days = Math.floor(remaining / constants.millisecondsInOneDay);
    remaining -= days * constants.millisecondsInOneDay;
    const hours = Math.floor(remaining / constants.millisecondInOneHour);
    remaining -= hours * constants.millisecondInOneHour;
    const minutes = Math.floor(remaining / constants.millisecondInOneMinute);
    remaining -= minutes * constants.millisecondInOneMinute;
    const seconds = Math.floor(remaining / constants.millisecondsInOneSecond);
    remaining -= seconds * constants.millisecondsInOneSecond;
    const tokens = {
        WW: weeks.toString().padStart(2, "0"),
        DD: days.toString().padStart(2, "0"),
        HH: hours.toString().padStart(2, "0"),
        mm: minutes.toString().padStart(2, "0"),
        ss: seconds.toString().padStart(2, "0"),
        SSS: remaining.toString().padStart(3, "0"),
    };
    const formatted = formatString.replace(formatStringRegex, (token) => tokens[token]);
    return isNegative ? `-${formatted}` : formatted;
}

exports.formatTime = formatTime;
