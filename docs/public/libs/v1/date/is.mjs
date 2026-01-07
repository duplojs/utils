import { theDateRegex } from './constants.mjs';
import { isSafeTimestamp } from './isSafeTimestamp.mjs';

function is(input) {
    const theDateMatch = input.match(theDateRegex);
    if (theDateMatch) {
        const { value, sign } = theDateMatch.groups;
        return isSafeTimestamp(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    return false;
}

export { is };
