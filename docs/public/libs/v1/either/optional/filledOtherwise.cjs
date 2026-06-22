'use strict';

var create = require('./create.cjs');
var filled = require('./filled.cjs');
var is = require('../right/is.cjs');
var is$1 = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

function whenIsOptionalFilledOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsOptionalFilledOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = is.isRight(input) || is$1.isLeft(input) ? input : create.optional(input);
    return filled.isOptionalFilled(either)
        ? theFunction(unwrap.unwrap(either))
        : otherwiseFunction(input);
}

exports.whenIsOptionalFilledOtherwise = whenIsOptionalFilledOtherwise;
