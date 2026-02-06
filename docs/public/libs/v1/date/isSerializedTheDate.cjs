'use strict';

var constants = require('./constants.cjs');
var isSafeTimestamp = require('./isSafeTimestamp.cjs');

/**
 * {@include date/isSerializedTheDate/index.md}
 */
function isSerializedTheDate(input) {
    const serializeTheDateMatch = input.match(constants.serializeTheDateRegex);
    if (serializeTheDateMatch) {
        const { value, sign } = serializeTheDateMatch.groups;
        return isSafeTimestamp.isSafeTimestamp(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    return false;
}

exports.isSerializedTheDate = isSerializedTheDate;
