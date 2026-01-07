'use strict';

var constants = require('./constants.cjs');
var createTheTime = require('./createTheTime.cjs');
var isSafeTimeValue = require('./isSafeTimeValue.cjs');
var isTime = require('./isTime.cjs');
var create = require('../either/left/create.cjs');
var create$1 = require('../either/right/create.cjs');

const unitsMapper = {
    week: constants.millisecondInOneWeek,
    day: constants.millisecondsInOneDay,
    hour: constants.millisecondInOneHour,
    minute: constants.millisecondInOneMinute,
    second: constants.millisecondsInOneSecond,
    millisecond: 1,
};
function createTime(input, unit) {
    if (typeof input === "number" && unit) {
        return createTheTime.createTheTime(input * unitsMapper[unit]);
    }
    if (typeof input === "number") {
        return createFromTimeValue(input * unitsMapper[unit ?? "millisecond"]);
    }
    if (typeof input === "string" && isTime.isTime(input)) {
        return input;
    }
    const { value = 0, week = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0, } = input;
    let fromValue = 0;
    if (typeof value === "number") {
        fromValue = value;
    }
    else {
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
    }
    return createFromTimeValue(fromValue
        + (week * constants.millisecondInOneWeek)
        + (day * constants.millisecondsInOneDay)
        + (hour * constants.millisecondInOneHour)
        + (minute * constants.millisecondInOneMinute)
        + (second * constants.millisecondsInOneSecond)
        + millisecond);
}
function createFromTimeValue(input) {
    if (!isSafeTimeValue.isSafeTimeValue(input)) {
        return create.left("time-created-error", null);
    }
    return create$1.right("time-created", createTheTime.createTheTime(input));
}

exports.createTime = createTime;
