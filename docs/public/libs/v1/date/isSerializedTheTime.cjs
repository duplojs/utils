'use strict';

var constants = require('./constants.cjs');
var isSafeTimeValue = require('./isSafeTimeValue.cjs');

/**
 * {@include date/isSerializedTheTime/index.md}
 */
function isSerializedTheTime(input) {
    const serializeTheTimeMatch = input.match(constants.serializeTheTimeRegex);
    if (serializeTheTimeMatch) {
        const { value, sign } = serializeTheTimeMatch.groups;
        return isSafeTimeValue.isSafeTimeValue(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    return false;
}

exports.isSerializedTheTime = isSerializedTheTime;
