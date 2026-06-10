'use strict';

var errorKindNamespace = require('../common/errorKindNamespace.cjs');
var kindClass = require('../common/kindClass.cjs');
var kind = require('./kind.cjs');
var unwrap = require('../common/unwrap.cjs');

class HasNotSelectedInformationError extends kindClass.kindClass(errorKindNamespace.createErrorKind("has-not-selected-information-error"), Error) {
    value;
    selector;
    constructor(value, selector) {
        super(undefined, "Value information is not selected.");
        this.value = value;
        this.selector = selector;
    }
}
function unwrapSelectionOrThrow(...args) {
    if (args.length === 1) {
        const [selector] = args;
        return (input) => unwrapSelectionOrThrow(input, selector);
    }
    const [input, selector] = args;
    if (kind.informationKind.has(input)
        && selector[kind.informationKind.getValue(input)] === true) {
        return unwrap.unwrap(input);
    }
    throw new HasNotSelectedInformationError(input, selector);
}

exports.HasNotSelectedInformationError = HasNotSelectedInformationError;
exports.unwrapSelectionOrThrow = unwrapSelectionOrThrow;
