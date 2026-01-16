'use strict';

var errorKindNamespace = require('./errorKindNamespace.cjs');
var kind = require('./kind.cjs');

class AssertsError extends kind.kindHeritage("asserts-error", errorKindNamespace.createErrorKind("asserts-error"), Error) {
    value;
    constructor(value) {
        super({}, ["Asserts Error."]);
        this.value = value;
    }
}
/**
 * {@include common/asserts/index.md}
 */
function asserts(input, predicate) {
    if (!predicate(input)) {
        throw new AssertsError(input);
    }
}

exports.AssertsError = AssertsError;
exports.asserts = asserts;
