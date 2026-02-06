'use strict';

var makeSafeTimeValue = require('./makeSafeTimeValue.cjs');
var theTime = require('./theTime.cjs');
var constants = require('./constants.cjs');

/**
 * {@include date/toTimeValue/index.md}
 */
function toTimeValue(input) {
    if (input instanceof theTime.TheTime) {
        return input.toNative();
    }
    const match = input.match(constants.serializeTheTimeRegex);
    const { value, sign } = match.groups;
    return makeSafeTimeValue.makeSafeTimeValue(Number(sign === "-"
        ? `-${value}`
        : value));
}

exports.toTimeValue = toTimeValue;
