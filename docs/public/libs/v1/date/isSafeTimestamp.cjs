'use strict';

var constants = require('./constants.cjs');

/**
 * {@include date/isSafeTimestamp/index.md}
 */
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
