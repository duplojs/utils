import { minTimeValue, maxTimeValue } from './constants.mjs';

function isSafeTimeValue(timeValue) {
    if (!Number.isSafeInteger(timeValue)) {
        return false;
    }
    if (timeValue <= minTimeValue || timeValue >= maxTimeValue) {
        return false;
    }
    return true;
}

export { isSafeTimeValue };
