import { makeSafeTimestamp } from './makeSafeTimestamp.mjs';

function createTheTime(timestamp) {
    const safeTimestamp = makeSafeTimestamp(timestamp);
    return `time${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

export { createTheTime };
