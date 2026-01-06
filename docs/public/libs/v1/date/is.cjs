'use strict';

var constants = require('./constants.cjs');
var isSafeTimestamp = require('./isSafeTimestamp.cjs');

function is(input) {
    const theDateMatch = input.match(constants.theDateRegex);
    if (theDateMatch) {
        const { value, sign } = theDateMatch.groups;
        return isSafeTimestamp.isSafeTimestamp(Number(sign === "-"
            ? `-${value}`
            : value));
    }
    return false;
}

exports.is = is;
