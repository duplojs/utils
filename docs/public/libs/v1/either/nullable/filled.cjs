'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../bool/falsy.cjs');
require('../bool/truthy.cjs');
require('../bool/base.cjs');
require('../left/create.cjs');
require('../left/error.cjs');
require('../left/fail.cjs');
var is$1 = require('../left/is.cjs');
require('../right/success.cjs');
var is = require('../right/is.cjs');
var create = require('../right/create.cjs');
require('../right/ok.cjs');
require('../future/success.cjs');
require('../future/error.cjs');
require('../future/base.cjs');
var create$1 = require('./create.cjs');
require('./empty.cjs');
var base = require('./base.cjs');
require('../nullish/empty.cjs');
require('../nullish/filled.cjs');
require('../nullish/base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');
var kind = require('../kind.cjs');

const eitherNullableFilledKind = kind.createEitherKind("nullable-filled");
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
