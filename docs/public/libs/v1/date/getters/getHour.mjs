import { toNative } from '../toNative.mjs';

/**
 * {@include date/getHour/index.md}
 */
function getHour(input, timezone = "UTC") {
    const date = toNative(input);
    if (timezone === "UTC") {
        return date.getUTCHours();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        hour12: false,
    });
    return Number(formatter.format(date));
}

export { getHour };
