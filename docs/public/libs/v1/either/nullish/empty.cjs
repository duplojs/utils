'use strict';

var kind = require('../kind.cjs');
var create$1 = require('./create.cjs');
var base = require('./base.cjs');
var create = require('../left/create.cjs');
var is = require('../left/is.cjs');
var is$1 = require('../right/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

const eitherNullishEmptyKind = kind.createEitherKind("nullish-empty");
function nullishEmpty(value = undefined) {
    return base.eitherNullishKind.setTo(eitherNullishEmptyKind.setTo(create.left("nullish", value)));
}
function isNullishEmpty(input) {
    return is.isLeft(input)
        && base.eitherNullishKind.has(input)
        && eitherNullishEmptyKind.has(input);
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
exports.whenIsNullishEmpty = whenIsNullishEmpty;
