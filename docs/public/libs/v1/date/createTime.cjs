'use strict';

var constants = require('./constants.cjs');
var createTheTime = require('./createTheTime.cjs');

const unitsMapper = {
    week: constants.millisecondInOneWeek,
    day: constants.millisecondsInOneDay,
    hour: constants.millisecondInOneHour,
    minute: constants.millisecondInOneMinute,
    second: constants.millisecondsInOneSecond,
    millisecond: 1,
};
function createTime(input, unit) {
    if (typeof input === "number") {
        return createTheTime.createTheTime(input * unitsMapper[unit ?? "millisecond"]);
    }
    const { value = "", week = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0, } = input;
    let fromValue = 0;
    const theTimeMatch = value.match(constants.isoTimeRegex);
    if (theTimeMatch) {
        const { sign = "+", hour, minute, second = 0, millisecond = 0, } = theTimeMatch.groups;
        fromValue = (Number(hour) * constants.millisecondInOneHour)
            + (Number(minute) * constants.millisecondInOneMinute)
            + (Number(second) * constants.millisecondsInOneSecond)
            + Number(millisecond);
        fromValue = sign === "-"
            ? -fromValue
            : fromValue;
    }
    return createTheTime.createTheTime(fromValue
        + (week * constants.millisecondInOneWeek)
        + (day * constants.millisecondsInOneDay)
        + (hour * constants.millisecondInOneHour)
        + (minute * constants.millisecondInOneMinute)
        + (second * constants.millisecondsInOneSecond)
        + millisecond);
}

exports.createTime = createTime;
