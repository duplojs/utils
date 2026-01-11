'use strict';

var constants = require('./constants.cjs');

/**
 * {@include date/makeSafeTimestamp/index.md}
 */
function makeSafeTimestamp(timestamp) {
    if (Number.isNaN(timestamp)) {
        return 0;
    }
    if (timestamp > constants.maxTimestamp) {
        return constants.maxTimestamp;
    }
    if (timestamp < constants.minTimestamp) {
        return constants.minTimestamp;
    }
    return Number.isInteger(timestamp)
        ? timestamp
        : Math.round(timestamp);
}

exports.makeSafeTimestamp = makeSafeTimestamp;
