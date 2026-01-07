import { theDateRegex, theTimeRegex } from './constants.mjs';
import { makeSafeTimestamp } from './makeSafeTimestamp.mjs';

/**
 * {@include date/toTimestamp/index.md}
 */
function toTimestamp(input) {
    const match = input.startsWith("date")
        ? input.match(theDateRegex)
        : input.match(theTimeRegex);
    const { value, sign } = match.groups;
    return makeSafeTimestamp(Number(sign === "-"
        ? `-${value}`
        : value));
}

export { toTimestamp };
