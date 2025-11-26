'use strict';

require('../left/create.cjs');
require('../left/error.cjs');
require('../left/fail.cjs');
var is$1 = require('../left/is.cjs');
require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../bool/falsy.cjs');
require('../bool/truthy.cjs');
require('../bool/base.cjs');
require('../future/success.cjs');
require('../future/error.cjs');
require('../future/base.cjs');
require('../nullable/empty.cjs');
require('../nullable/filled.cjs');
require('../nullable/base.cjs');
var create$1 = require('./create.cjs');
require('./empty.cjs');
var base = require('./base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');
var kind = require('../kind.cjs');
require('../right/success.cjs');
var is = require('../right/is.cjs');
var create = require('../right/create.cjs');
require('../right/ok.cjs');

const eitherNullishFilledKind = kind.createEitherKind("nullish-filled");
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
