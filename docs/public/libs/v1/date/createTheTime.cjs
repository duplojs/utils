'use strict';

var makeSafeTimeValue = require('./makeSafeTimeValue.cjs');

function createTheTime(timestamp) {
    const safeTimestamp = makeSafeTimeValue.makeSafeTimeValue(timestamp);
    return `time${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

exports.createTheTime = createTheTime;
