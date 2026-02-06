import { toNative } from '../toNative.mjs';

/**
 * {@include date/getYear/index.md}
 */
function getYear(input, timezone = "UTC") {
    const date = toNative(input);
    if (timezone === "UTC") {
        return date.getUTCFullYear();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
    });
    return Number(formatter.format(date));
}

export { getYear };
