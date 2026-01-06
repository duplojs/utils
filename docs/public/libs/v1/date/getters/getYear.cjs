'use strict';

var toNative = require('../toNative.cjs');

/**
 * {@include date/getYear/index.md}
 */
function getYear(input, timezone = "UTC") {
    const nativeDate = toNative.toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCFullYear();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

exports.getYear = getYear;
