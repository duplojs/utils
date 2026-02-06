import { toNative } from '../toNative.mjs';
import { millisecondsInOneDay } from '../constants.mjs';

/**
 * {@include date/getWeekOfYear/index.md}
 */
function getWeekOfYear(input, timezone = "UTC") {
    const date = toNative(input);
    let year = 0;
    let month = 0;
    let day = 0;
    if (timezone === "UTC") {
        year = date.getUTCFullYear();
        month = date.getUTCMonth();
        day = date.getUTCDate();
    }
    else {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            day: "numeric",
            year: "numeric",
            month: "numeric",
        }).formatToParts(date);
        const partsMap = new Map(parts.map((part) => [part.type, part.value]));
        year = Number(partsMap.get("year"));
        month = Number(partsMap.get("month")) - 1;
        day = Number(partsMap.get("day"));
    }
    const nativeDate = new Date(Date.UTC(year, month, day));
    const dayOfWeek = nativeDate.getUTCDay() || 7;
    const nearestThursday = day + 4 - dayOfWeek;
    nativeDate.setUTCDate(nearestThursday);
    const thursYearStart = Date.UTC(nativeDate.getUTCFullYear(), 0, 1);
    const millisecondsDiff = nativeDate.getTime() - thursYearStart;
    const daysDiff = Math.floor(millisecondsDiff / millisecondsInOneDay);
    return Math.ceil((daysDiff + 1) / 7);
}

export { getWeekOfYear };
