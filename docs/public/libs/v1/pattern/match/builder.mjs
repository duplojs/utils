import { isMatch } from '../isMatch.mjs';
import { createBuilder } from '../../common/builder.mjs';
import { kindHeritage } from '../../common/kind.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';

class InvalidExhaustivePatternError extends kindHeritage("invalid-exhaustive-pattern-error", createErrorKind("invalid-exhaustive-pattern-error"), Error) {
    input;
    constructor(input) {
        super({}, ["Invalid exhaustive pattern. If typing is correct, report your situation on github."]);
        this.input = input;
    }
}
const matchBuilder = createBuilder("@duplojs/utils/pattern/match");
matchBuilder.set("with", ({ args: [pattern, theFunction], accumulator, next, }) => next({
    ...accumulator,
    matchers: [
        ...accumulator.matchers,
        {
            isMatch: isMatch(pattern),
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

export { InvalidExhaustivePatternError, matchBuilder };
