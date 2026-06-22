'use strict';

var kind = require('./kind.cjs');
var unwrap = require('../common/unwrap.cjs');

function whenIsSelectedOtherwise(...args) {
    if (args.length === 3) {
        const [selector, theFunction, otherwiseFunction] = args;
        return (input) => whenIsSelectedOtherwise(input, selector, theFunction, otherwiseFunction);
    }
    const [input, selector, theFunction, otherwiseFunction] = args;
    if (kind.informationKind.has(input)
        && selector[kind.informationKind.getValue(input)] === true) {
        return theFunction(unwrap.unwrap(input));
    }
    return otherwiseFunction(input);
}

exports.whenIsSelectedOtherwise = whenIsSelectedOtherwise;
