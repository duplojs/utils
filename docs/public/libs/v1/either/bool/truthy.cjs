'use strict';

var base = require('./base.cjs');
var kind = require('../kind.cjs');
var create$1 = require('./create.cjs');
var create = require('../right/create.cjs');
var is = require('../right/is.cjs');
var is$1 = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

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
