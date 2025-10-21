'use strict';

var kind = require('../../common/kind.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var base = require('../base.cjs');

const eitherRightKind = kind.createKind("either-right");
function right(information, value = undefined) {
    return eitherRightKind.addTo(base.eitherInformationKind.addTo(wrapValue.wrapValue(value), information));
}

exports.eitherRightKind = eitherRightKind;
exports.right = right;
