'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../bool/falsy.cjs');
require('../bool/truthy.cjs');
require('../bool/base.cjs');
var create = require('../left/create.cjs');
require('../left/error.cjs');
require('../left/fail.cjs');
var is = require('../left/is.cjs');
require('../right/success.cjs');
var is$1 = require('../right/is.cjs');
require('../right/create.cjs');
require('../right/ok.cjs');
require('../future/success.cjs');
require('../future/error.cjs');
require('../future/base.cjs');
var create$1 = require('./create.cjs');
require('./filled.cjs');
var base = require('./base.cjs');
require('../nullish/empty.cjs');
require('../nullish/filled.cjs');
require('../nullish/base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');
var kind = require('../kind.cjs');
require('../../common/override.cjs');

const eitherNullableEmptyKind = kind.createEitherKind("nullable-empty");
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
