'use strict';

var is = require('./is.cjs');
var unwrap = require('../../common/unwrap.cjs');
var is$1 = require('../right/is.cjs');

function whenIsLeftElse(...args) {
    if (args.length === 2) {
        const [theFunction, elseFunction] = args;
        return (input) => whenIsLeftElse(input, theFunction, elseFunction);
    }
    const [input, theFunction, elseFunction] = args;
    if (is.isLeft(input)) {
        return theFunction(unwrap.unwrap(input));
    }
    else if (is$1.isRight(input)) {
        return elseFunction(input);
    }
    else {
        return elseFunction(input);
    }
}

exports.whenIsLeftElse = whenIsLeftElse;
