'use strict';

var create = require('./create.cjs');
var empty = require('./empty.cjs');
var is = require('../right/is.cjs');
var is$1 = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

function whenIsNullableEmptyOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsNullableEmptyOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = is.isRight(input) || is$1.isLeft(input) ? input : create.nullable(input);
    return empty.isNullableEmpty(either)
        ? theFunction(unwrap.unwrap(either))
        : otherwiseFunction(input);
}

exports.whenIsNullableEmptyOtherwise = whenIsNullableEmptyOtherwise;
