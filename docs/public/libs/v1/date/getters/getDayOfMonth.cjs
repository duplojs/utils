'use strict';

var toNative = require('../toNative.cjs');

/**
 * {@include date/getDayOfMonth/index.md}
 */
function getDayOfMonth(input, timezone = "UTC") {
    const nativeDate = toNative.toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCDate();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        day: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

exports.getDayOfMonth = getDayOfMonth;
