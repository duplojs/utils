'use strict';

var kind = require('./kind.cjs');
var unwrap = require('../common/unwrap.cjs');

function whenIsSelected(...args) {
    if (args.length === 2) {
        const [selector, theFunction] = args;
        return (input) => whenIsSelected(input, selector, theFunction);
    }
    const [input, selector, theFunction] = args;
    if (kind.informationKind.has(input)
        && selector[kind.informationKind.getValue(input)] === true) {
        return theFunction(unwrap.unwrap(input));
    }
    return input;
}

exports.whenIsSelected = whenIsSelected;
