import { TheDate } from './theDate.mjs';
import { toNative } from './toNative.mjs';

function getTimezoneOffset(...args) {
    if (args.length === 1) {
        const [timeZone] = args;
        return (input) => getTimezoneOffset(input, timeZone);
    }
    const [input, timeZone] = args;
    const date = input instanceof TheDate
        ? input
        : toNative(input);
    const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    const parts = Object.fromEntries(fmt.formatToParts(date).map((part) => [part.type, part.value]));
    const tzDateAsUTC = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute), Number(parts.second));
    return tzDateAsUTC - date.getTime();
}

export { getTimezoneOffset };
