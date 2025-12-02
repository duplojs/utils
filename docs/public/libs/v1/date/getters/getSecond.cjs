'use strict';

var toNative = require('../toNative.cjs');

function getSecond(input, timezone = "UTC") {
    const nativeDate = toNative.toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCSeconds();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        second: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

exports.getSecond = getSecond;
