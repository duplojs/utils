'use strict';

var loop = require('../generator/loop.cjs');
var constants = require('./constants.cjs');
var toTimestamp = require('./toTimestamp.cjs');
var createOrThrow = require('./createOrThrow.cjs');

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
function each(range, unit = "day") {
    const startTimestamp = toTimestamp.toTimestamp(range.start);
    const endTimestamp = toTimestamp.toTimestamp(range.end);
    const direction = startTimestamp <= endTimestamp ? 1 : -1;
    const advanceTimestamp = stepMapper[unit];
    return loop.loop(({ exit, next, previousOutput, }) => {
        if (!previousOutput) {
            return next(range.start);
        }
        const currentTimestamp = advanceTimestamp(toTimestamp.toTimestamp(previousOutput), direction);
        const isWithinRange = direction === 1
            ? currentTimestamp < endTimestamp
            : currentTimestamp > endTimestamp;
        if (!isWithinRange) {
            return exit(currentTimestamp === endTimestamp
                ? createOrThrow.createOrThrow(currentTimestamp)
                : undefined);
        }
        return next(createOrThrow.createOrThrow(currentTimestamp));
    });
}

exports.each = each;
