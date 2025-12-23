'use strict';

var is = require('./is.cjs');
var unwrap = require('../../common/unwrap.cjs');

function whenIsRight(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsRight(input, theFunction);
    }
    const [input, theFunction] = args;
    if (is.isRight(input)) {
        return theFunction(unwrap.unwrap(input));
    }
    return input;
}

exports.whenIsRight = whenIsRight;
