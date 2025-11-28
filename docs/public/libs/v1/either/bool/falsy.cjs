'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var create$1 = require('./create.cjs');
require('./truthy.cjs');
var base = require('./base.cjs');
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
require('../nullish/empty.cjs');
require('../nullish/filled.cjs');
require('../nullish/base.cjs');
require('../optional/empty.cjs');
require('../optional/filled.cjs');
require('../optional/base.cjs');
var kind = require('../kind.cjs');
require('../../common/override.cjs');

const eitherBoolFalsyKind = kind.createEitherKind("bool-falsy");
function boolFalsy(value = undefined) {
    return base.eitherBoolKind.setTo(eitherBoolFalsyKind.setTo(create.left("bool", value)));
}
function isBoolFalsy(input) {
    return is.isLeft(input)
        && base.eitherBoolKind.has(input)
        && eitherBoolFalsyKind.has(input);
}
function whenIsBoolFalsy(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsBoolFalsy(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is$1.isRight(input)) {
        return input;
    }
    else if (!isBoolFalsy(input) && is.isLeft(input)) {
        return input;
    }
    const either = is$1.isRight(input) || is.isLeft(input)
        ? input
        : create$1.bool(input);
    if (isBoolFalsy(either)) {
        return theFunction(unwrap.unwrap(either));
    }
    return either;
}

exports.boolFalsy = boolFalsy;
exports.eitherBoolFalsyKind = eitherBoolFalsyKind;
exports.isBoolFalsy = isBoolFalsy;
exports.whenIsBoolFalsy = whenIsBoolFalsy;
