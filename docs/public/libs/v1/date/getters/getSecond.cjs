'use strict';

var toNative = require('../toNative.cjs');

/**
 * {@include date/getSecond/index.md}
 */
function getSecond(input, timezone = "UTC") {
    const date = toNative.toNative(input);
    if (timezone === "UTC") {
        return date.getUTCSeconds();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        second: "numeric",
    });
    return Number(formatter.format(date));
}

exports.getSecond = getSecond;
