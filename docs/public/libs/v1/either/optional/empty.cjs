'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
var create$1 = require('./create.cjs');
var create = require('../left/create.cjs');
var is = require('../left/is.cjs');
var is$1 = require('../right/is.cjs');

const optionalEmptyKind = kind.createEitherKind("optional-empty");
/**
 * @deprecated use optionalEmptyKind
 */
const eitherOptionalEmptyKind = optionalEmptyKind;
/**
 * {@include either/isOptionalEmpty/index.md}
 */
/**
 * {@include either/optionalEmpty/index.md}
 */
/**
 * {@include either/whenIsOptionalEmpty/index.md}
 */
function optionalEmpty() {
    return base.optionalKind.setTo(optionalEmptyKind.setTo(create.left("optional", undefined)));
}
function isOptionalEmpty(input) {
    return is.isLeft(input)
        && base.optionalKind.has(input)
        && optionalEmptyKind.has(input);
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
exports.optionalEmptyKind = optionalEmptyKind;
exports.whenIsOptionalEmpty = whenIsOptionalEmpty;
