'use strict';

var kind = require('../common/kind.cjs');
require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
require('../either/bool/falsy.cjs');
require('../either/bool/truthy.cjs');
require('../either/bool/base.cjs');
require('../either/left/create.cjs');
require('../either/left/error.cjs');
require('../either/left/fail.cjs');
require('../either/kind.cjs');
require('../either/right/success.cjs');
require('../either/right/create.cjs');
require('../either/right/ok.cjs');
require('../either/future/success.cjs');
require('../either/future/error.cjs');
require('../either/future/base.cjs');
require('../either/nullable/empty.cjs');
require('../either/nullable/filled.cjs');
require('../either/nullable/base.cjs');
require('../either/nullish/empty.cjs');
require('../either/nullish/filled.cjs');
require('../either/nullish/base.cjs');
require('../either/optional/empty.cjs');
require('../either/optional/filled.cjs');
require('../either/optional/base.cjs');
var constants = require('./constants.cjs');
var isSafeTimestamp = require('./isSafeTimestamp.cjs');
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
