'use strict';

var makeSafeTimestamp = require('./makeSafeTimestamp.cjs');

function createTheTime(timestamp) {
    const safeTimestamp = makeSafeTimestamp.makeSafeTimestamp(timestamp);
    return `time${Math.abs(safeTimestamp)}${safeTimestamp < 0 ? "-" : "+"}`;
}

exports.createTheTime = createTheTime;
