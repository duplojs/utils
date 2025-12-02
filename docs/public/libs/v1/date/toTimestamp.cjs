'use strict';

var constants = require('./constants.cjs');
var isSafeTimestamp = require('./isSafeTimestamp.cjs');
var kind = require('../common/kind.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');

class InvalidTheDateError extends kind.kindHeritage("invalid-the-Date-error", errorKindNamespace.createErrorKind("invalid-the-Date-error"), Error) {
    theDate;
    constructor(theDate) {
        super({}, ["TheDate is invalid."]);
        this.theDate = theDate;
    }
}
function toTimestamp(input) {
    const match = input.match(constants.theDateRegex);
    if (!match) {
        throw new InvalidTheDateError(input);
    }
    const { value, sign } = match.groups;
    const timestamp = Number(sign === "-"
        ? `-${value}`
        : value);
    if (!isSafeTimestamp.isSafeTimestamp(timestamp)) {
        throw new InvalidTheDateError(input);
    }
    return timestamp;
}

exports.InvalidTheDateError = InvalidTheDateError;
exports.toTimestamp = toTimestamp;
