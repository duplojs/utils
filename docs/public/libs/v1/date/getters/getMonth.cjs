'use strict';

var toNative = require('../toNative.cjs');

/**
 * {@include date/getMonth/index.md}
 */
function getMonth(input, timezone = "UTC") {
    const nativeDate = toNative.toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCMonth() + 1;
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        month: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

exports.getMonth = getMonth;
