'use strict';

var toNative = require('../toNative.cjs');

const weekdayMapper = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
};
function getDayOfWeek(input, timezone = "UTC") {
    const nativeDate = toNative.toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCDay();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        weekday: "long",
    });
    const weekday = formatter.format(nativeDate);
    return weekdayMapper[weekday];
}

exports.getDayOfWeek = getDayOfWeek;
