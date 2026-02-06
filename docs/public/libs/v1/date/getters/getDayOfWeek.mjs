import { toNative } from '../toNative.mjs';

const weekdayMapper = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
};
/**
 * {@include date/getDayOfWeek/index.md}
 */
function getDayOfWeek(input, timezone = "UTC") {
    const date = toNative(input);
    if (timezone === "UTC") {
        return date.getUTCDay();
    }
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        weekday: "long",
    });
    const weekday = formatter.format(date);
    return weekdayMapper[weekday];
}

export { getDayOfWeek };
