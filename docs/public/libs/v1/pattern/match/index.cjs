'use strict';

var result = require('../result.cjs');
var isMatch = require('../isMatch.cjs');
var builder = require('./builder.cjs');

function match(...args) {
    if (args.length === 1) {
        const [input] = args;
        return builder.matchBuilder.use({
            input,
            matchers: [],
        });
    }
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

exports.InvalidExhaustivePatternError = builder.InvalidExhaustivePatternError;
exports.matchBuilder = builder.matchBuilder;
exports.match = match;
