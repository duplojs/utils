import { toNative } from '../toNative.mjs';

/**
 * {@include date/getDayOfMonth/index.md}
 */
function getDayOfMonth(input, timezone = "UTC") {
    const date = toNative(input);
    if (timezone === "UTC") {
        return date.getUTCDate();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        day: "numeric",
    });
    return Number(formatter.format(date));
}

export { getDayOfMonth };
