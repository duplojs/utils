'use strict';

var constants = require('./constants.cjs');
var makeSafeTimestamp = require('./makeSafeTimestamp.cjs');

function toTimestamp(input) {
    const match = input.match(constants.theDateRegex);
    const { value, sign } = match.groups;
    return makeSafeTimestamp.makeSafeTimestamp(Number(sign === "-"
        ? `-${value}`
        : value));
}

exports.toTimestamp = toTimestamp;
