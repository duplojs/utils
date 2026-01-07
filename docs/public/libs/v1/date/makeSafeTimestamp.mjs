import { maxTimestamp, minTimestamp } from './constants.mjs';

function makeSafeTimestamp(timestamp) {
    if (Number.isNaN(timestamp)) {
        return 0;
    }
    if (timestamp > maxTimestamp) {
        return maxTimestamp;
    }
    if (timestamp < minTimestamp) {
        return minTimestamp;
    }
    return Number.isInteger(timestamp)
        ? timestamp
        : Math.round(timestamp);
}

export { makeSafeTimestamp };
