'use strict';

var toNative = require('../toNative.cjs');

/**
 * {@include date/getMinute/index.md}
 */
function getMinute(input, timezone = "UTC") {
    const date = toNative.toNative(input);
    if (timezone === "UTC") {
        return date.getUTCMinutes();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        minute: "numeric",
    });
    return Number(formatter.format(date));
}

exports.getMinute = getMinute;
