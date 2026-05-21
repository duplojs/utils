'use strict';

var unwrap = require('../../common/unwrap.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var kindClass = require('../../common/kindClass.cjs');
var is = require('./is.cjs');

class NotRightError extends kindClass.kindClass(errorKindNamespace.createErrorKind("not-right-error"), Error) {
    value;
    constructor(value) {
        super(undefined, "Value is not Right.");
        this.value = value;
    }
}
/**
 * {@include either/unwrapRightOrThrow/index.md}
 */
function unwrapRightOrThrow(input) {
    if (is.isRight(input)) {
        return unwrap.unwrap(input);
    }
    throw new NotRightError(input);
}

exports.NotRightError = NotRightError;
exports.unwrapRightOrThrow = unwrapRightOrThrow;
