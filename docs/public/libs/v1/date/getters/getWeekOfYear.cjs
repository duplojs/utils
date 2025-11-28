'use strict';

require('../types/timezone.cjs');
require('../../either/bool/falsy.cjs');
require('../../either/bool/truthy.cjs');
require('../../either/bool/base.cjs');
require('../../either/left/create.cjs');
require('../../either/left/error.cjs');
require('../../either/left/fail.cjs');
require('../../either/kind.cjs');
require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../common/override.cjs');
require('../../either/right/success.cjs');
require('../../either/right/create.cjs');
require('../../either/right/ok.cjs');
require('../../either/future/success.cjs');
require('../../either/future/error.cjs');
require('../../either/future/base.cjs');
require('../../either/nullable/empty.cjs');
require('../../either/nullable/filled.cjs');
require('../../either/nullable/base.cjs');
require('../../either/nullish/empty.cjs');
require('../../either/nullish/filled.cjs');
require('../../either/nullish/base.cjs');
require('../../either/optional/empty.cjs');
require('../../either/optional/filled.cjs');
require('../../either/optional/base.cjs');
var toNative = require('../toNative.cjs');
require('../toTimestamp.cjs');
require('../createOrThrow.cjs');

function getWeekOfYear(input, timezone = "UTC") {
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
    const date = new Date(Date.UTC(year, month, day));
    const dayOfWeek = date.getUTCDay() || 7;
    const nearestThursday = day + 4 - dayOfWeek;
    date.setUTCDate(nearestThursday);
    const thursYearStart = Date.UTC(date.getUTCFullYear(), 0, 1);
    const millisecondsDiff = date.getTime() - thursYearStart;
    const daysDiff = Math.floor(millisecondsDiff / 86400000);
    return Math.ceil((daysDiff + 1) / 7);
}

exports.getWeekOfYear = getWeekOfYear;
