'use strict';

var makeSafeTimestamp = require('./makeSafeTimestamp.cjs');

/**
 * {@include date/createTheDate/index.md}
 */
function createTheDate(timestamp) {
    const safeTimestamp = makeSafeTimestamp.makeSafeTimestamp(timestamp);
    return `date${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

exports.createTheDate = createTheDate;
