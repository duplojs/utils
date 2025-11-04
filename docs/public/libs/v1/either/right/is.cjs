'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');

function isRight(input) {
    return create.eitherRightKind.has(input)
        && kind.eitherInformationKind.has(input)
        && wrapValue.isWrappedValue(input);
}

exports.isRight = isRight;
