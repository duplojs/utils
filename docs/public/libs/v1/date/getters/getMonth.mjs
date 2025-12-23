import { toNative } from '../toNative.mjs';

function getMonth(input, timezone = "UTC") {
    const nativeDate = toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCMonth() + 1;
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        month: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

export { getMonth };
