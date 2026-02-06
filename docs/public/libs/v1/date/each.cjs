'use strict';

var loop = require('../generator/loop.cjs');
var constants = require('./constants.cjs');
var toTimestamp = require('./toTimestamp.cjs');
var theDate = require('./theDate.cjs');

const stepMapper = {
    millisecond: (timestamp, direction) => timestamp + direction,
    second: (timestamp, direction) => timestamp + (direction * constants.millisecondsInOneSecond),
    minute: (timestamp, direction) => timestamp + (direction * constants.millisecondInOneMinute),
    hour: (timestamp, direction) => timestamp + (direction * constants.millisecondInOneHour),
    day: (timestamp, direction) => timestamp + (direction * constants.millisecondsInOneDay),
    month: (timestamp, direction) => {
        const date = new Date(timestamp);
        date.setUTCMonth(date.getUTCMonth() + direction);
        return date.getTime();
    },
    year: (timestamp, direction) => {
        const date = new Date(timestamp);
        date.setUTCFullYear(date.getUTCFullYear() + direction);
        return date.getTime();
    },
};
/**
 * {@include date/each/index.md}
 */
function each(range, unit = "day") {
    const startTimestamp = toTimestamp.toTimestamp(range.start);
    const endTimestamp = toTimestamp.toTimestamp(range.end);
    const direction = startTimestamp <= endTimestamp ? 1 : -1;
    const advanceTimestamp = stepMapper[unit];
    return loop.loop(({ exit, next, previousOutput, }) => {
        if (!previousOutput) {
            return range.start instanceof theDate.TheDate
                ? next(range.start)
                : next(theDate.TheDate.new(toTimestamp.toTimestamp(range.start)));
        }
        const currentTimestamp = advanceTimestamp(toTimestamp.toTimestamp(previousOutput), direction);
        const isWithinRange = direction === 1
            ? currentTimestamp < endTimestamp
            : currentTimestamp > endTimestamp;
        if (!isWithinRange) {
            return exit(currentTimestamp === endTimestamp
                ? theDate.TheDate.new(currentTimestamp)
                : undefined);
        }
        return next(theDate.TheDate.new(currentTimestamp));
    });
}

exports.each = each;
