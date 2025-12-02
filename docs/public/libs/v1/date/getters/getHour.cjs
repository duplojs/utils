'use strict';

var toNative = require('../toNative.cjs');

function getHour(input, timezone = "UTC") {
    const nativeDate = toNative.toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCHours();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        hour12: false,
    });
    return Number(formatter.format(nativeDate));
}

exports.getHour = getHour;
