import { isResult, result } from '../result.mjs';
import { isMatch } from '../isMatch.mjs';
import { matchBuilder } from './builder.mjs';
export { InvalidExhaustivePatternError } from './builder.mjs';

function match(...args) {
    if (args.length === 1) {
        const [input] = args;
        return matchBuilder.use({
            input,
            matchers: [],
        });
    }
    if (args.length === 2) {
        const [pattern, theFunction] = args;
        return (input) => match(input, pattern, theFunction);
    }
    const [input, pattern, theFunction] = args;
    if (!isResult(input) && isMatch(input, pattern)) {
        return result(theFunction(input));
    }
    return input;
}

export { match, matchBuilder };
