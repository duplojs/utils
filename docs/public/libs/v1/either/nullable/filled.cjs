'use strict';

var kind = require('../../common/kind.cjs');
var unwrap = require('../../common/unwrap.cjs');
var is$1 = require('../left/is.cjs');
var create = require('../right/create.cjs');
var is = require('../right/is.cjs');
var create$1 = require('./create.cjs');
var base = require('./base.cjs');

const eitherNullableFilledKind = kind.createKind("either-nullable-filled");
function nullableFilled(value) {
    return base.eitherNullableKind.setTo(eitherNullableFilledKind.setTo(create.right("nullable", value)));
}
function isNullableFilled(input) {
    return is.isRight(input)
        && base.eitherNullableKind.has(input)
        && eitherNullableFilledKind.has(input);
}
function whenIsNullableFilled(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullableFilled(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is$1.isLeft(input)) {
        return input;
    }
    else if (!isNullableFilled(input) && is.isRight(input)) {
        return input;
    }
    const either = is.isRight(input) || is$1.isLeft(input)
        ? input
        : create$1.nullable(input);
    if (isNullableFilled(either)) {
        return theFunction(unwrap.unwrap(either));
    }
    return either;
}

exports.eitherNullableFilledKind = eitherNullableFilledKind;
exports.isNullableFilled = isNullableFilled;
exports.nullableFilled = nullableFilled;
exports.whenIsNullableFilled = whenIsNullableFilled;
