'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var create$1 = require('./create.cjs');
require('./falsy.cjs');
var base = require('./base.cjs');
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
require('../nullable/empty.cjs');
require('../nullable/filled.cjs');
require('../nullable/base.cjs');
require('../nullish/empty.cjs');
require('../nullish/filled.cjs');
require('../nullish/base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');
var kind = require('../kind.cjs');
require('../../common/override.cjs');

const eitherBoolTruthyKind = kind.createEitherKind("bool-truthy");
function boolTruthy(value) {
    return base.eitherBoolKind.setTo(eitherBoolTruthyKind.setTo(create.right("bool", value)));
}
function isBoolTruthy(input) {
    return is.isRight(input)
        && base.eitherBoolKind.has(input)
        && eitherBoolTruthyKind.has(input);
}
function whenIsBoolTruthy(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsBoolTruthy(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is$1.isLeft(input)) {
        return input;
    }
    else if (!isBoolTruthy(input) && is.isRight(input)) {
        return input;
    }
    const either = is.isRight(input) || is$1.isLeft(input)
        ? input
        : create$1.bool(input);
    if (isBoolTruthy(either)) {
        return theFunction(unwrap.unwrap(either));
    }
    return either;
}

exports.boolTruthy = boolTruthy;
exports.eitherBoolTruthyKind = eitherBoolTruthyKind;
exports.isBoolTruthy = isBoolTruthy;
exports.whenIsBoolTruthy = whenIsBoolTruthy;
