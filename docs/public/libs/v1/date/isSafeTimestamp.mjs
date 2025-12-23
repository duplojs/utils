import { minTimestamp, maxTimestamp } from './constants.mjs';

function isSafeTimestamp(input) {
    if (!Number.isSafeInteger(input)) {
        return false;
    }
    if (input <= minTimestamp || input >= maxTimestamp) {
        return false;
    }
    return true;
}

export { isSafeTimestamp };
