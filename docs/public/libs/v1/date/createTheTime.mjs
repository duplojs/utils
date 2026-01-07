import { makeSafeTimeValue } from './makeSafeTimeValue.mjs';

/**
 * {@include date/createTheTime/index.md}
 */
function createTheTime(timestamp) {
    const safeTimestamp = makeSafeTimeValue(timestamp);
    return `time${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

export { createTheTime };
