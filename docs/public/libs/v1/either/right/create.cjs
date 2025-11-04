'use strict';

var wrapValue = require('../../common/wrapValue.cjs');
var kind = require('../kind.cjs');

const eitherRightKind = kind.createEitherKind("right");
function right(information, value = undefined) {
    return eitherRightKind.setTo(kind.eitherInformationKind.setTo(wrapValue.wrapValue(value), information));
}

exports.eitherRightKind = eitherRightKind;
exports.right = right;
