'use strict';

var create$1 = require('./create.cjs');
var base = require('./base.cjs');
var kind = require('../kind.cjs');
var create = require('../left/create.cjs');
var is = require('../left/is.cjs');
var is$1 = require('../right/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

const eitherNullableEmptyKind = kind.createEitherKind("nullable-empty");
/**
 * {@include either/isNullableEmpty/index.md}
 */
/**
 * {@include either/nullableEmpty/index.md}
 */
/**
 * {@include either/whenIsNullableEmpty/index.md}
 */
function nullableEmpty() {
    return base.eitherNullableKind.setTo(eitherNullableEmptyKind.setTo(create.left("nullable", null)));
}
function isNullableEmpty(input) {
    return is.isLeft(input)
        && base.eitherNullableKind.has(input)
        && eitherNullableEmptyKind.has(input);
}
function whenIsNullableEmpty(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullableEmpty(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is$1.isRight(input)) {
        return input;
    }
    else if (!isNullableEmpty(input) && is.isLeft(input)) {
        return input;
    }
    const either = is$1.isRight(input) || is.isLeft(input)
        ? input
        : create$1.nullable(input);
    if (isNullableEmpty(either)) {
        return theFunction(unwrap.unwrap(either));
    }
    return either;
}

exports.eitherNullableEmptyKind = eitherNullableEmptyKind;
exports.isNullableEmpty = isNullableEmpty;
exports.nullableEmpty = nullableEmpty;
exports.whenIsNullableEmpty = whenIsNullableEmpty;
