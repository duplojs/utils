'use strict';

var is = require('./is.cjs');
var unwrap = require('../../common/unwrap.cjs');
var is$1 = require('../left/is.cjs');

function whenIsRightOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsRightOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    if (is.isRight(input)) {
        return theFunction(unwrap.unwrap(input));
    }
    else if (is$1.isLeft(input)) {
        return otherwiseFunction(input);
    }
    else {
        return otherwiseFunction(input);
    }
}

exports.whenIsRightOtherwise = whenIsRightOtherwise;
