'use strict';

var constants = require('./constants.cjs');
var makeSafeTimeValue = require('./makeSafeTimeValue.cjs');

/**
 * {@include date/toTimeValue/index.md}
 */
function toTimeValue(input) {
    const match = input.match(constants.theTimeRegex);
    const { value, sign } = match.groups;
    return makeSafeTimeValue.makeSafeTimeValue(Number(sign === "-"
        ? `-${value}`
        : value));
}

exports.toTimeValue = toTimeValue;
