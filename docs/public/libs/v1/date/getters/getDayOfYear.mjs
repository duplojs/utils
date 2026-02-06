import { toNative } from '../toNative.mjs';
import { millisecondsInOneDay } from '../constants.mjs';

/**
 * {@include date/getDayOfYear/index.md}
 */
function getDayOfYear(input, timezone = "UTC") {
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
    const yearStart = Date.UTC(year, 0, 1);
    const currentDate = Date.UTC(year, month, day);
    const millisecondsDiff = currentDate - yearStart;
    const dayOfYear = Math.floor(millisecondsDiff / millisecondsInOneDay) + 1;
    return dayOfYear;
}

export { getDayOfYear };
