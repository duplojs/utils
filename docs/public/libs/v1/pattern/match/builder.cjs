'use strict';

var isMatch = require('../isMatch.cjs');
var builder = require('../../common/builder.cjs');
var kind = require('../../common/kind.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');

class InvalidExhaustivePatternError extends kind.kindHeritage("invalid-exhaustive-pattern-error", errorKindNamespace.createErrorKind("invalid-exhaustive-pattern-error"), Error) {
    input;
    constructor(input) {
        super({}, ["Invalid exhaustive pattern. If typing is correct, report your situation on github."]);
        this.input = input;
    }
}
const matchBuilder = builder.createBuilder("@duplojs/utils/pattern/match");
matchBuilder.set("with", ({ args: [pattern, theFunction], accumulator, next, }) => next({
    ...accumulator,
    matchers: [
        ...accumulator.matchers,
        {
            isMatch: isMatch.isMatch(pattern),
            theFunction,
        },
    ],
}));
matchBuilder.set("when", ({ args: [predicate, theFunction], accumulator, next, }) => next({
    ...accumulator,
    matchers: [
        ...accumulator.matchers,
        {
            isMatch: predicate,
            theFunction,
        },
    ],
}));
matchBuilder.set("whenNot", ({ args: [predicate, theFunction], accumulator, next, }) => next({
    ...accumulator,
    matchers: [
        ...accumulator.matchers,
        {
            isMatch: (value) => !predicate(value),
            theFunction,
        },
    ],
}));
matchBuilder.set("exhaustive", ({ accumulator: { input, matchers, }, }) => {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let index = 0; index < matchers.length; index++) {
        if (matchers[index].isMatch(input)) {
            return matchers[index].theFunction(input);
        }
    }
    throw new InvalidExhaustivePatternError(input);
});
matchBuilder.set("otherwise", ({ args: [theFunction], accumulator: { input, matchers, }, }) => {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let index = 0; index < matchers.length; index++) {
        if (matchers[index].isMatch(input)) {
            return matchers[index].theFunction(input);
        }
    }
    return theFunction(input);
});

exports.InvalidExhaustivePatternError = InvalidExhaustivePatternError;
exports.matchBuilder = matchBuilder;
