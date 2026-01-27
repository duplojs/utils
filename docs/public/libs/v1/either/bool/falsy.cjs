'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
var create$1 = require('./create.cjs');
var create = require('../left/create.cjs');
var is = require('../left/is.cjs');
var is$1 = require('../right/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

const boolFalsyKind = kind.createEitherKind("bool-falsy");
/**
 * @deprecated use boolFalsyKind
 */
const eitherBoolFalsyKind = boolFalsyKind;
/**
 * {@include either/boolFalsy/index.md}
 */
/**
 * {@include either/isBoolFalsy/index.md}
 */
/**
 * {@include either/whenIsBoolFalsy/index.md}
 */
function boolFalsy(value = undefined) {
    return base.boolKind.setTo(boolFalsyKind.setTo(create.left("bool", value)));
}
function isBoolFalsy(input) {
    return is.isLeft(input)
        && base.boolKind.has(input)
        && boolFalsyKind.has(input);
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
exports.boolFalsyKind = boolFalsyKind;
exports.eitherBoolFalsyKind = eitherBoolFalsyKind;
exports.isBoolFalsy = isBoolFalsy;
exports.whenIsBoolFalsy = whenIsBoolFalsy;
