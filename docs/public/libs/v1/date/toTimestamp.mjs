import { serializeTheDateRegex } from './constants.mjs';
import { makeSafeTimestamp } from './makeSafeTimestamp.mjs';
import { TheDate } from './theDate.mjs';

/**
 * {@include date/toTimestamp/index.md}
 */
function toTimestamp(input) {
    if (input instanceof TheDate) {
        return input.getTime();
    }
    const match = input.match(serializeTheDateRegex);
    const { value, sign } = match.groups;
    return makeSafeTimestamp(Number(sign === "-"
        ? `-${value}`
        : value));
}

export { toTimestamp };
