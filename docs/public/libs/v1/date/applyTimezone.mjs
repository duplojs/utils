import { createOrThrow } from './createOrThrow.mjs';
import { getTimezoneOffset } from './getTimezoneOffset.mjs';
import { toTimestamp } from './toTimestamp.mjs';

function applyTimezone(...args) {
    if (args.length === 1) {
        const [timeZone] = args;
        return (theDate) => applyTimezone(theDate, timeZone);
    }
    const [theDate, timeZone] = args;
    const timestamp = toTimestamp(theDate);
    return createOrThrow(timestamp - getTimezoneOffset(theDate, timeZone));
}

export { applyTimezone };
