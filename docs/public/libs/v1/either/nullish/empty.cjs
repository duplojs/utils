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
require('../nullable/empty.cjs');
require('../nullable/filled.cjs');
require('../nullable/base.cjs');
var create$1 = require('./create.cjs');
require('./filled.cjs');
var base = require('./base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');
var kind = require('../kind.cjs');
require('../../common/override.cjs');

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
