'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
var create$1 = require('./create.cjs');
var create = require('../right/create.cjs');
var is = require('../right/is.cjs');
var is$1 = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

const eitherOptionalFilledKind = kind.createEitherKind("optional-filled");
function optionalFilled(value) {
    return base.eitherOptionalKind.setTo(eitherOptionalFilledKind.setTo(create.right("optional", value)));
}
function isOptionalFilled(input) {
    return is.isRight(input)
        && base.eitherOptionalKind.has(input)
        && eitherOptionalFilledKind.has(input);
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
exports.whenIsOptionalFilled = whenIsOptionalFilled;
