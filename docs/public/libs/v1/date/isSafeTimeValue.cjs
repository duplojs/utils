'use strict';

var constants = require('./constants.cjs');

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
