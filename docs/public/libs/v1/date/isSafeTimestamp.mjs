import { minTimestamp, maxTimestamp } from './constants.mjs';

/**
 * {@include date/isSafeTimestamp/index.md}
 */
function isSafeTimestamp(timestamp) {
    if (!Number.isSafeInteger(timestamp)) {
        return false;
    }
    if (timestamp <= minTimestamp || timestamp >= maxTimestamp) {
        return false;
    }
    return true;
}

export { isSafeTimestamp };
