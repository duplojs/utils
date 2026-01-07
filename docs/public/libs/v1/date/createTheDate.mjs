import { makeSafeTimestamp } from './makeSafeTimestamp.mjs';

function createTheDate(timestamp) {
    const safeTimestamp = makeSafeTimestamp(timestamp);
    return `date${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

export { createTheDate };
