import { maxTimeValue, minTimeValue } from './constants.mjs';

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
