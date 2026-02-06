'use strict';

var theDate = require('./theDate.cjs');
var toNative = require('./toNative.cjs');

const stepMapper = {
    second: (date) => date.setUTCMilliseconds(0),
    minute: (date) => date.setUTCSeconds(0, 0),
    hour: (date) => date.setUTCMinutes(0, 0, 0),
    day: (date) => date.setUTCHours(0, 0, 0, 0),
    month: (date) => new Date(date.setUTCDate(1)).setUTCHours(0, 0, 0, 0),
    year: (date) => {
        date.setUTCMonth(0, 1);
        return date.setUTCHours(0, 0, 0, 0);
    },
};
/**
 * {@include date/round/index.md}
 */
function round(input, unit = "day") {
    const date = toNative.toNative(input);
    const timestamp = stepMapper[unit](date);
    return theDate.TheDate.new(timestamp);
}

exports.round = round;
