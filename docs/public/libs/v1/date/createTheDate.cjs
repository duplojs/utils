'use strict';

var makeSafeTimestamp = require('./makeSafeTimestamp.cjs');

function createTheDate(timestamp) {
    const safeTimestamp = makeSafeTimestamp.makeSafeTimestamp(timestamp);
    return `date${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

exports.createTheDate = createTheDate;
