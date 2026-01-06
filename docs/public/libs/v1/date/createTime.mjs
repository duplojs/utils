import { isoTimeRegex, millisecondsInOneSecond, millisecondInOneMinute, millisecondInOneHour, millisecondsInOneDay, millisecondInOneWeek } from './constants.mjs';
import { createTheTime } from './createTheTime.mjs';

const unitsMapper = {
    week: millisecondInOneWeek,
    day: millisecondsInOneDay,
    hour: millisecondInOneHour,
    minute: millisecondInOneMinute,
    second: millisecondsInOneSecond,
    millisecond: 1,
};
function createTime(input, unit) {
    if (typeof input === "number") {
        return createTheTime(input * unitsMapper[unit ?? "millisecond"]);
    }
    const { value = "", week = 0, day = 0, hour = 0, minute = 0, second = 0, millisecond = 0, } = input;
    let fromValue = 0;
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
    return createTheTime(fromValue
        + (week * millisecondInOneWeek)
        + (day * millisecondsInOneDay)
        + (hour * millisecondInOneHour)
        + (minute * millisecondInOneMinute)
        + (second * millisecondsInOneSecond)
        + millisecond);
}

export { createTime };
