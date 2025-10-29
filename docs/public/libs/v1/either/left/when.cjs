'use strict';

var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var is = require('./is.cjs');

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
