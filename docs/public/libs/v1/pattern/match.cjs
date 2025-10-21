'use strict';

var result = require('./result.cjs');
var isMatch = require('./isMatch.cjs');

function match(...args) {
    if (args.length === 2) {
        const [pattern, theFunction] = args;
        return (input) => match(input, pattern, theFunction);
    }
    const [input, pattern, theFunction] = args;
    if (!result.isResult(input) && isMatch.isMatch(input, pattern)) {
        return result.result(theFunction(input));
    }
    return input;
}

exports.match = match;
