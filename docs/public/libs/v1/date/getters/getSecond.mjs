import { toNative } from '../toNative.mjs';

/**
 * {@include date/getSecond/index.md}
 */
function getSecond(input, timezone = "UTC") {
    const nativeDate = toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCSeconds();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        second: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

export { getSecond };
