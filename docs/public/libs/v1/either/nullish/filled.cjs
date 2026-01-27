'use strict';

var create$1 = require('./create.cjs');
var kind = require('../kind.cjs');
var base = require('./base.cjs');
var create = require('../right/create.cjs');
var is = require('../right/is.cjs');
var is$1 = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

const nullishFilledKind = kind.createEitherKind("nullish-filled");
/**
 * @deprecated use nullishFilledKind
 */
const eitherNullishFilledKind = nullishFilledKind;
/**
 * {@include either/isNullishFilled/index.md}
 */
/**
 * {@include either/nullishFilled/index.md}
 */
/**
 * {@include either/whenIsNullishFilled/index.md}
 */
function nullishFilled(value) {
    return base.nullishKind.setTo(nullishFilledKind.setTo(create.right("nullish", value)));
}
function isNullishFilled(input) {
    return is.isRight(input)
        && base.nullishKind.has(input)
        && nullishFilledKind.has(input);
}
function whenIsNullishFilled(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullishFilled(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is$1.isLeft(input)) {
        return input;
    }
    else if (!isNullishFilled(input) && is.isRight(input)) {
        return input;
    }
    const either = is.isRight(input) || is$1.isLeft(input)
        ? input
        : create$1.nullish(input);
    if (isNullishFilled(either)) {
        return theFunction(unwrap.unwrap(either));
    }
    return either;
}

exports.eitherNullishFilledKind = eitherNullishFilledKind;
exports.isNullishFilled = isNullishFilled;
exports.nullishFilled = nullishFilled;
exports.nullishFilledKind = nullishFilledKind;
exports.whenIsNullishFilled = whenIsNullishFilled;
