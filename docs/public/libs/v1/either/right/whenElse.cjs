'use strict';

var is = require('./is.cjs');
var unwrap = require('../../common/unwrap.cjs');
var is$1 = require('../left/is.cjs');

function whenIsRightElse(...args) {
    if (args.length === 2) {
        const [theFunction, elseFunction] = args;
        return (input) => whenIsRightElse(input, theFunction, elseFunction);
    }
    const [input, theFunction, elseFunction] = args;
    if (is.isRight(input)) {
        return theFunction(unwrap.unwrap(input));
    }
    else if (is$1.isLeft(input)) {
        return elseFunction(input);
    }
    else {
        return elseFunction(input);
    }
}

exports.whenIsRightElse = whenIsRightElse;
