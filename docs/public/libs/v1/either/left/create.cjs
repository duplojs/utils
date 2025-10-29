'use strict';

var wrapValue = require('../../common/wrapValue.cjs');
var kind = require('../kind.cjs');

const eitherLeftKind = kind.createEitherKind("left");
function left(information, value = undefined) {
    return eitherLeftKind.setTo(kind.eitherInformationKind.setTo(wrapValue.wrapValue(value), information));
}

exports.eitherLeftKind = eitherLeftKind;
exports.left = left;
