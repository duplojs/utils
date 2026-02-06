'use strict';

var toNative = require('../toNative.cjs');

/**
 * {@include date/getYear/index.md}
 */
function getYear(input, timezone = "UTC") {
    const date = toNative.toNative(input);
    if (timezone === "UTC") {
        return date.getUTCFullYear();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
    });
    return Number(formatter.format(date));
}

exports.getYear = getYear;
