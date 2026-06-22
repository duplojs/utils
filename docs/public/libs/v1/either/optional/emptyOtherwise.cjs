'use strict';

var create = require('./create.cjs');
var empty = require('./empty.cjs');
var is = require('../right/is.cjs');
var is$1 = require('../left/is.cjs');

function whenIsOptionalEmptyOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsOptionalEmptyOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = is.isRight(input) || is$1.isLeft(input) ? input : create.optional(input);
    return empty.isOptionalEmpty(either)
        ? theFunction(undefined)
        : otherwiseFunction(input);
}

exports.whenIsOptionalEmptyOtherwise = whenIsOptionalEmptyOtherwise;
