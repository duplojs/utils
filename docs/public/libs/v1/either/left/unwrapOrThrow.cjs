'use strict';

var unwrap = require('../../common/unwrap.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var kindClass = require('../../common/kindClass.cjs');
var is = require('./is.cjs');

class NotLeftError extends kindClass.kindClass(errorKindNamespace.createErrorKind("not-left-error"), Error) {
    value;
    constructor(value) {
        super(undefined, "Value is not Left.");
        this.value = value;
    }
}
/**
 * {@include either/unwrapLeftOrThrow/index.md}
 */
function unwrapLeftOrThrow(input) {
    if (is.isLeft(input)) {
        return unwrap.unwrap(input);
    }
    throw new NotLeftError(input);
}

exports.NotLeftError = NotLeftError;
exports.unwrapLeftOrThrow = unwrapLeftOrThrow;
