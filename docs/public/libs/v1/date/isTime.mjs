import { theTimeRegex } from './constants.mjs';
import { isSafeTimestamp } from './isSafeTimestamp.mjs';

function isTime(input) {
    const theTimeMatch = input.match(theTimeRegex);
    if (theTimeMatch) {
        const { value, sign } = theTimeMatch.groups;
        return isSafeTimestamp(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    return false;
}

export { isTime };
