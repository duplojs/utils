import { millisecondsInOneSecond, millisecondInOneMinute, millisecondInOneHour, millisecondsInOneDay, millisecondInOneWeek, serializeTheTimeRegex, isoTimeRegex } from './constants.mjs';
import { isSafeTimeValue } from './isSafeTimeValue.mjs';
import { TheTime } from './theTime.mjs';
import { left } from '../either/left/create.mjs';
import { right } from '../either/right/create.mjs';

const unitsMapper = {
    week: millisecondInOneWeek,
    day: millisecondsInOneDay,
    hour: millisecondInOneHour,
    minute: millisecondInOneMinute,
    second: millisecondsInOneSecond,
    millisecond: 1,
};
function createTime(input, unit) {
    if (input instanceof TheTime) {
        return input;
    }
    if (typeof input === "number") {
        if (unit) {
            return TheTime.new(input * unitsMapper[unit]);
        }
        return createFromTimeValue(input * unitsMapper[unit ?? "millisecond"]);
    }
    if (typeof input === "string") {
        const serializeTheTimeMatch = input.match(serializeTheTimeRegex);
        if (!serializeTheTimeMatch) {
            return left("time-created-error", null);
        }
        const { value, sign } = serializeTheTimeMatch.groups;
        return createFromTimeValue(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    const { value = 0, week = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0, } = input;
    let fromValue = 0;
    if (typeof value === "number") {
        fromValue = value;
    }
    else {
        const theTimeMatch = value.match(isoTimeRegex);
        if (theTimeMatch) {
            const { sign = "+", hour, minute, second = 0, millisecond = 0, } = theTimeMatch.groups;
            fromValue = (Number(hour) * millisecondInOneHour)
                + (Number(minute) * millisecondInOneMinute)
                + (Number(second) * millisecondsInOneSecond)
                + Number(millisecond);
            fromValue = sign === "-"
                ? -fromValue
                : fromValue;
        }
    }
    return createFromTimeValue(fromValue
        + (week * millisecondInOneWeek)
        + (day * millisecondsInOneDay)
        + (hour * millisecondInOneHour)
        + (minute * millisecondInOneMinute)
        + (second * millisecondsInOneSecond)
        + millisecond);
}
function createFromTimeValue(input) {
    if (!isSafeTimeValue(input)) {
        return left("time-created-error", null);
    }
    return right("time-created", TheTime.new(input));
}

export { createTime };
