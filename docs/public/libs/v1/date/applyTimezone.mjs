import { getTimezoneOffset } from './getTimezoneOffset.mjs';
import { toTimestamp } from './toTimestamp.mjs';
import { TheDate } from './theDate.mjs';

function applyTimezone(...args) {
    if (args.length === 1) {
        const [timeZone] = args;
        return (theDate) => applyTimezone(theDate, timeZone);
    }
    const [theDate, timeZone] = args;
    const timestamp = toTimestamp(theDate);
    return TheDate.new(timestamp - getTimezoneOffset(theDate, timeZone));
}

export { applyTimezone };
