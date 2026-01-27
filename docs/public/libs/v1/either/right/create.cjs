'use strict';

var wrapValue = require('../../common/wrapValue.cjs');
var kind = require('../kind.cjs');

const rightKind = kind.createEitherKind("right");
/**
 * @deprecated use rightKind
 */
const eitherRightKind = rightKind;
/**
 * {@include either/right/index.md}
 */
function right(information, value = undefined) {
    return rightKind.setTo(kind.informationKind.setTo(wrapValue.wrapValue(value), information));
}

exports.eitherRightKind = eitherRightKind;
exports.right = right;
exports.rightKind = rightKind;
