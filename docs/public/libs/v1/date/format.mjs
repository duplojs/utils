import { toNative } from './toNative.mjs';

const formatStringRegex = /YYYY|YY|MM|DD|HH|mm|ss|SSS|ZZ/g;
function format(...args) {
    if (args.length === 2) {
        const [formatString, timezone] = args;
        return (input) => format(input, formatString, timezone);
    }
    const [input, formatString, timezone] = args;
    const date = toNative(input);
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
    const parts = Object.fromEntries(formatter.formatToParts(date).map((part) => [part.type, part.value]));
    const tokens = {
        YYYY: parts.year,
        YY: parts.year.slice(-2),
        MM: parts.month,
        DD: parts.day,
        HH: parts.hour,
        mm: parts.minute,
        ss: parts.second,
        SSS: date.getMilliseconds().toString(),
        ZZ: timezone,
    };
    return formatString.replace(formatStringRegex, (token) => tokens[token]);
}

export { format };
