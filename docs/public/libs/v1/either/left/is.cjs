'use strict';

var create = require('./create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var kind = require('../kind.cjs');

/**
 * {@include either/isLeft/index.md}
 */
function isLeft(input) {
    return create.eitherLeftKind.has(input)
        && kind.eitherInformationKind.has(input)
        && wrapValue.isWrappedValue(input);
}

exports.isLeft = isLeft;
