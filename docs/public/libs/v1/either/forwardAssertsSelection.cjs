'use strict';

var kindClass = require('../common/kindClass.cjs');
var kind = require('./kind.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');

class ForwardAssertsSelectionError extends kindClass.kindClass(errorKindNamespace.createErrorKind("forward-asserts-selection-error"), Error) {
    value;
    selector;
    constructor(value, selector) {
        super(undefined, "Either information is not selected.");
        this.value = value;
        this.selector = selector;
    }
}
function forwardAssertsSelection(...args) {
    if (args.length === 1) {
        const [selector] = args;
        return (input) => forwardAssertsSelection(input, selector);
    }
    const [input, selector] = args;
    if (kind.informationKind.has(input)
        && selector[kind.informationKind.getValue(input)] !== true) {
        throw new ForwardAssertsSelectionError(input, selector);
    }
    return input;
}

exports.ForwardAssertsSelectionError = ForwardAssertsSelectionError;
exports.forwardAssertsSelection = forwardAssertsSelection;
