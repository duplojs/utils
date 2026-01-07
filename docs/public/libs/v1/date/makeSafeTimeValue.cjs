'use strict';

var constants = require('./constants.cjs');

function makeSafeTimeValue(timeValue) {
    if (Number.isNaN(timeValue)) {
        return 0;
    }
    if (timeValue > constants.maxTimeValue) {
        return constants.maxTimeValue;
    }
    if (timeValue < constants.minTimeValue) {
        return constants.minTimeValue;
    }
    return Number.isInteger(timeValue)
        ? timeValue
        : Math.round(timeValue);
}

exports.makeSafeTimeValue = makeSafeTimeValue;
