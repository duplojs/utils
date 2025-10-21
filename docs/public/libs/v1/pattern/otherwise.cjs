'use strict';

var unwrap = require('../common/unwrap.cjs');
var result = require('./result.cjs');

function otherwise(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => otherwise(input, theFunction);
    }
    const [input, theFunction] = args;
    return result.isResult(input)
        ? unwrap.unwrap(input)
        : theFunction(input);
}

exports.otherwise = otherwise;
