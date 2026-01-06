import { theDateRegex } from './constants.mjs';
import { makeSafeTimestamp } from './makeSafeTimestamp.mjs';

function toTimestamp(input) {
    const match = input.match(theDateRegex);
    const { value, sign } = match.groups;
    return makeSafeTimestamp(Number(sign === "-"
        ? `-${value}`
        : value));
}

export { toTimestamp };
