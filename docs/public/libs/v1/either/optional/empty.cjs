'use strict';

var kind = require('../../common/kind.cjs');
var create = require('../left/create.cjs');
var is = require('../left/is.cjs');
var is$1 = require('../right/is.cjs');
var create$1 = require('./create.cjs');
var base = require('./base.cjs');

const eitherOptionalEmptyKind = kind.createKind("either-optional-empty");
function optionalEmpty() {
    return base.eitherOptionalKind.addTo(eitherOptionalEmptyKind.addTo(create.left("optional", undefined)));
}
function isOptionalEmpty(input) {
    return is.isLeft(input)
        && base.eitherOptionalKind.has(input)
        && eitherOptionalEmptyKind.has(input);
}
function whenIsOptionalEmpty(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsOptionalEmpty(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is$1.isRight(input)) {
        return input;
    }
    else if (!isOptionalEmpty(input) && is.isLeft(input)) {
        return input;
    }
    const either = is$1.isRight(input) || is.isLeft(input)
        ? input
        : create$1.optional(input);
    if (isOptionalEmpty(either)) {
        return theFunction(undefined);
    }
    return either;
}

exports.eitherOptionalEmptyKind = eitherOptionalEmptyKind;
exports.isOptionalEmpty = isOptionalEmpty;
exports.optionalEmpty = optionalEmpty;
exports.whenIsOptionalEmpty = whenIsOptionalEmpty;
