'use strict';

var constants = require('./constants.cjs');
var isSafeTimestamp = require('./isSafeTimestamp.cjs');

function isTime(input) {
    const theTimeMatch = input.match(constants.theTimeRegex);
    if (theTimeMatch) {
        const { value, sign } = theTimeMatch.groups;
        return isSafeTimestamp.isSafeTimestamp(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    return false;
}

exports.isTime = isTime;
