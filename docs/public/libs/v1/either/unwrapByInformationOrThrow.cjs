'use strict';

var unwrap = require('../common/unwrap.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');
var kindClass = require('../common/kindClass.cjs');
var hasInformation = require('./hasInformation.cjs');

class HasNotInformationError extends kindClass.kindClass(errorKindNamespace.createErrorKind("has-not-information-error"), Error) {
    value;
    information;
    constructor(value, information) {
        const formattedInformation = information instanceof Array
            ? information.join(" or ")
            : information;
        super(undefined, `Value has not information "${formattedInformation}".`);
        this.value = value;
        this.information = information;
    }
}
function unwrapByInformationOrThrow(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => unwrapByInformationOrThrow(input, information);
    }
    const [input, information] = args;
    if (hasInformation.hasInformation(input, information)) {
        return unwrap.unwrap(input);
    }
    throw new HasNotInformationError(input, information);
}

exports.HasNotInformationError = HasNotInformationError;
exports.unwrapByInformationOrThrow = unwrapByInformationOrThrow;
