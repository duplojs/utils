'use strict';

var unwrap = require('../../common/unwrap.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var is = require('./is.cjs');

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
