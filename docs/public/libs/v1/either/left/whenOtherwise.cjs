'use strict';

var is = require('./is.cjs');
var is$1 = require('../right/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

function whenIsLeftOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsLeftOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    if (is.isLeft(input)) {
        return theFunction(unwrap.unwrap(input));
    }
    else if (is$1.isRight(input)) {
        return otherwiseFunction(input);
    }
    else {
        return otherwiseFunction(input);
    }
}

exports.whenIsLeftOtherwise = whenIsLeftOtherwise;
