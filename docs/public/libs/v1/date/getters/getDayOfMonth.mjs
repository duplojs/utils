import { toNative } from '../toNative.mjs';

function getDayOfMonth(input, timezone = "UTC") {
    const nativeDate = toNative(input);
    if (timezone === "UTC") {
        return nativeDate.getUTCDate();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        day: "numeric",
    });
    return Number(formatter.format(nativeDate));
}

export { getDayOfMonth };
