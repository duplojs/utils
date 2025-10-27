'use strict';

var kind = require('../../common/kind.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var base = require('../base.cjs');

const eitherLeftKind = kind.createKind("either-left");
function left(information, value = undefined) {
    return eitherLeftKind.setTo(base.eitherInformationKind.setTo(wrapValue.wrapValue(value), information));
}

exports.eitherLeftKind = eitherLeftKind;
exports.left = left;
