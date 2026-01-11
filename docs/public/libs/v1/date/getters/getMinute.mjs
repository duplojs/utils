import { toNative } from '../toNative.mjs';

/**
 * {@include date/getMinute/index.md}
 */
function getMinute(input, timezone = "UTC") {
    const nativeDate = toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCMinutes();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        minute: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

export { getMinute };
