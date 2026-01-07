import { makeSafeTimeValue } from './makeSafeTimeValue.mjs';

function createTheTime(timestamp) {
    const safeTimestamp = makeSafeTimeValue(timestamp);
    return `time${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

export { createTheTime };
