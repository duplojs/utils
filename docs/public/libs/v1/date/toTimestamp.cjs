'use strict';

var constants = require('./constants.cjs');
var makeSafeTimestamp = require('./makeSafeTimestamp.cjs');
var theDate = require('./theDate.cjs');

/**
 * {@include date/toTimestamp/index.md}
 */
function toTimestamp(input) {
    if (input instanceof theDate.TheDate) {
        return input.getTime();
    }
    const match = input.match(constants.serializeTheDateRegex);
    const { value, sign } = match.groups;
    return makeSafeTimestamp.makeSafeTimestamp(Number(sign === "-"
        ? `-${value}`
        : value));
}

exports.toTimestamp = toTimestamp;
