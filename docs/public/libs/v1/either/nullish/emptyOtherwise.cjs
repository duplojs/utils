'use strict';

var create = require('./create.cjs');
var empty = require('./empty.cjs');
var is = require('../right/is.cjs');
var is$1 = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

function whenIsNullishEmptyOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsNullishEmptyOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = is.isRight(input) || is$1.isLeft(input) ? input : create.nullish(input);
    return empty.isNullishEmpty(either)
        ? theFunction(unwrap.unwrap(either))
        : otherwiseFunction(input);
}

exports.whenIsNullishEmptyOtherwise = whenIsNullishEmptyOtherwise;
