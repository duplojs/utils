'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
var create$1 = require('./create.cjs');
var create = require('../right/create.cjs');
var is = require('../right/is.cjs');
var is$1 = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

const optionalFilledKind = kind.createEitherKind("optional-filled");
/**
 * @deprecated use optionalFilledKind
 */
const eitherOptionalFilledKind = optionalFilledKind;
/**
 * {@include either/isOptionalFilled/index.md}
 */
/**
 * {@include either/optionalFilled/index.md}
 */
/**
 * {@include either/whenIsOptionalFilled/index.md}
 */
function optionalFilled(value) {
    return base.optionalKind.setTo(optionalFilledKind.setTo(create.right("optional", value)));
}
function isOptionalFilled(input) {
    return is.isRight(input)
        && base.optionalKind.has(input)
        && optionalFilledKind.has(input);
}
function whenIsOptionalFilled(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsOptionalFilled(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is$1.isLeft(input)) {
        return input;
    }
    else if (!isOptionalFilled(input) && is.isRight(input)) {
        return input;
    }
    const either = is.isRight(input) || is$1.isLeft(input)
        ? input
        : create$1.optional(input);
    if (isOptionalFilled(either)) {
        return theFunction(unwrap.unwrap(either));
    }
    return either;
}

exports.eitherOptionalFilledKind = eitherOptionalFilledKind;
exports.isOptionalFilled = isOptionalFilled;
exports.optionalFilled = optionalFilled;
exports.optionalFilledKind = optionalFilledKind;
exports.whenIsOptionalFilled = whenIsOptionalFilled;
