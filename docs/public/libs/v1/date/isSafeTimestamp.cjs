'use strict';

var constants = require('./constants.cjs');

function isSafeTimestamp(timestamp) {
    if (!Number.isSafeInteger(timestamp)) {
        return false;
    }
    if (timestamp <= constants.minTimestamp || timestamp >= constants.maxTimestamp) {
        return false;
    }
    return true;
}

exports.isSafeTimestamp = isSafeTimestamp;
