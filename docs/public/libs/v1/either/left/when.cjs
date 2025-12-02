'use strict';

var is = require('./is.cjs');
var unwrap = require('../../common/unwrap.cjs');

function whenIsLeft(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsLeft(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is.isLeft(input)) {
        return theFunction(unwrap.unwrap(input));
    }
    return input;
}

exports.whenIsLeft = whenIsLeft;
