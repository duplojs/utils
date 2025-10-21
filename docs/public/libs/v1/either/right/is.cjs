'use strict';

var base = require('../base.cjs');
var create = require('./create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');

function isRight(input) {
    return create.eitherRightKind.has(input)
        && base.eitherInformationKind.has(input)
        && wrapValue.isWrappedValue(input);
}

exports.isRight = isRight;
