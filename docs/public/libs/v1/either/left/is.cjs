'use strict';

var create = require('./create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var base = require('../base.cjs');

function isLeft(input) {
    return create.eitherLeftKind.has(input)
        && base.eitherInformationKind.has(input)
        && wrapValue.isWrappedValue(input);
}

exports.isLeft = isLeft;
