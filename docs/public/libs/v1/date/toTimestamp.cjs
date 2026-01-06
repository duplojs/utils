'use strict';

var constants = require('./constants.cjs');
var makeSafeTimestamp = require('./makeSafeTimestamp.cjs');

class InvalidTheDateError extends kind.kindHeritage("invalid-the-Date-error", errorKindNamespace.createErrorKind("invalid-the-Date-error"), Error) {
    theDate;
    constructor(theDate) {
        super({}, ["TheDate is invalid."]);
        this.theDate = theDate;
    }
}

/**
 * {@include date/toTimestamp/index.md}
 */
function toTimestamp(input) {
    const match = input.startsWith("date")
        ? input.match(constants.theDateRegex)
        : input.match(constants.theTimeRegex);
    const { value, sign } = match.groups;
    return makeSafeTimestamp.makeSafeTimestamp(Number(sign === "-"
        ? `-${value}`
        : value));
}

exports.toTimestamp = toTimestamp;
