import { maxTimeValue, minTimeValue } from './constants.mjs';

/**
 * {@include date/makeSafeTimeValue/index.md}
 */
function makeSafeTimeValue(timeValue) {
    if (Number.isNaN(timeValue)) {
        return 0;
    }
    if (timeValue > maxTimeValue) {
        return maxTimeValue;
    }
    if (timeValue < minTimeValue) {
        return minTimeValue;
    }
    return Number.isInteger(timeValue)
        ? timeValue
        : Math.round(timeValue);
}

export { makeSafeTimeValue };
