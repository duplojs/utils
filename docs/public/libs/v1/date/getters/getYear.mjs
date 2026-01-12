import { toNative } from '../toNative.mjs';

/**
 * {@include date/getYear/index.md}
 */
function getYear(input, timezone = "UTC") {
    const nativeDate = toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCFullYear();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

export { getYear };
