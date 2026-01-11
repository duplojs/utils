'use strict';

var constants = require('./constants.cjs');

/**
 * {@include date/isSafeTimeValue/index.md}
 */
function isSafeTimeValue(timeValue) {
    if (!Number.isSafeInteger(timeValue)) {
        return false;
    }
    if (timeValue <= constants.minTimeValue || timeValue >= constants.maxTimeValue) {
        return false;
    }
    return true;
}

exports.isSafeTimeValue = isSafeTimeValue;
