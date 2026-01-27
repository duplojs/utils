'use strict';

var wrapValue = require('../../common/wrapValue.cjs');
var kind = require('../kind.cjs');

const leftKind = kind.createEitherKind("left");
/**
 * @deprecated use leftKind
 */
const eitherLeftKind = leftKind;
/**
 * {@include either/left/index.md}
 */
function left(information, value = undefined) {
    return leftKind.setTo(kind.informationKind.setTo(wrapValue.wrapValue(value), information));
}

exports.eitherLeftKind = eitherLeftKind;
exports.left = left;
exports.leftKind = leftKind;
