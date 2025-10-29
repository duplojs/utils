'use strict';

var kind = require('../../common/kind.cjs');
var unwrap = require('../../common/unwrap.cjs');
var is$1 = require('../left/is.cjs');
var create = require('../right/create.cjs');
var is = require('../right/is.cjs');
var create$1 = require('./create.cjs');
var base = require('./base.cjs');

const eitherNullishFilledKind = kind.createKind("either-nullish-filled");
function nullishFilled(value) {
    return base.eitherNullishKind.setTo(eitherNullishFilledKind.setTo(create.right("nullish", value)));
}
function isNullishFilled(input) {
    return is.isRight(input)
        && base.eitherNullishKind.has(input)
        && base.eitherNullishKind.has(input);
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
exports.whenIsNullishFilled = whenIsNullishFilled;
