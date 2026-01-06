'use strict';

var constants = require('../constants.cjs');
var toNative = require('../toNative.cjs');

function getDayOfYear(input, timezone = "UTC") {
    const nativeDate = toNative.toNative(input);
    let year = 0;
    let month = 0;
    let day = 0;
    if (timezone === "UTC") {
        year = nativeDate.getUTCFullYear();
        month = nativeDate.getUTCMonth();
        day = nativeDate.getUTCDate();
    }
    else {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            day: "numeric",
            year: "numeric",
            month: "numeric",
        }).formatToParts(nativeDate);
        const partsMap = new Map(parts.map((part) => [part.type, part.value]));
        year = Number(partsMap.get("year"));
        month = Number(partsMap.get("month")) - 1;
        day = Number(partsMap.get("day"));
    }
    const yearStart = Date.UTC(year, 0, 1);
    const currentDate = Date.UTC(year, month, day);
    const millisecondsDiff = currentDate - yearStart;
    const dayOfYear = Math.floor(millisecondsDiff / constants.millisecondsInOneDay) + 1;
    return dayOfYear;
}

exports.getDayOfYear = getDayOfYear;
