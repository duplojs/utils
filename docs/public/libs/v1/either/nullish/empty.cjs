'use strict';

var kind = require('../kind.cjs');
var create$1 = require('./create.cjs');
var base = require('./base.cjs');
var create = require('../left/create.cjs');
var is = require('../left/is.cjs');
var is$1 = require('../right/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

const nullishEmptyKind = kind.createEitherKind("nullish-empty");
/**
 * @deprecated use nullishEmptyKind
 */
const eitherNullishEmptyKind = nullishEmptyKind;
/**
 * {@include either/isNullishEmpty/index.md}
 */
/**
 * {@include either/nullishEmpty/index.md}
 */
/**
 * {@include either/whenIsNullishEmpty/index.md}
 */
function nullishEmpty(value = undefined) {
    return base.nullishKind.setTo(nullishEmptyKind.setTo(create.left("nullish", value)));
}
function isNullishEmpty(input) {
    return is.isLeft(input)
        && base.nullishKind.has(input)
        && nullishEmptyKind.has(input);
}
function whenIsNullishEmpty(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullishEmpty(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is$1.isRight(input)) {
        return input;
    }
    else if (!isNullishEmpty(input) && is.isLeft(input)) {
        return input;
    }
    const either = is$1.isRight(input) || is.isLeft(input)
        ? input
        : create$1.nullish(input);
    if (isNullishEmpty(either)) {
        return theFunction(unwrap.unwrap(either));
    }
    return either;
}

exports.eitherNullishEmptyKind = eitherNullishEmptyKind;
exports.isNullishEmpty = isNullishEmpty;
exports.nullishEmpty = nullishEmpty;
exports.nullishEmptyKind = nullishEmptyKind;
exports.whenIsNullishEmpty = whenIsNullishEmpty;
