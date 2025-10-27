'use strict';

var kind = require('../../common/kind.cjs');
var unwrap = require('../../common/unwrap.cjs');
var create = require('../left/create.cjs');
var is = require('../left/is.cjs');
var is$1 = require('../right/is.cjs');
var create$1 = require('./create.cjs');
var base = require('./base.cjs');

const eitherBoolFalsyKind = kind.createKind("either-bool-falsy");
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
