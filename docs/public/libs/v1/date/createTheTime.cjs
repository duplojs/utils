'use strict';

var makeSafeTimeValue = require('./makeSafeTimeValue.cjs');

/**
 * {@include date/createTheTime/index.md}
 */
function createTheTime(timestamp) {
    const safeTimestamp = makeSafeTimeValue.makeSafeTimeValue(timestamp);
    return `time${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

exports.createTheTime = createTheTime;
