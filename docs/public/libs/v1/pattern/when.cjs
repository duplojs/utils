'use strict';

var result = require('./result.cjs');

function when(...args) {
    if (args.length === 2) {
        const [predicate, theFunction] = args;
        return (input) => when(input, predicate, theFunction);
    }
    const [input, predicate, theFunction] = args;
    if (!result.isResult(input) && predicate(input)) {
        return result.result(theFunction(input));
    }
    return input;
}

exports.when = when;
