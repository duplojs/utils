'use strict';

var constants = require('./constants.cjs');

function isSafeTimestamp(input) {
    if (!Number.isSafeInteger(input)) {
        return false;
    }
    if (input <= constants.minTimestamp || input >= constants.maxTimestamp) {
        return false;
    }
    return true;
}

exports.isSafeTimestamp = isSafeTimestamp;
