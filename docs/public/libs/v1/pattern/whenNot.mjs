import { isResult, result } from './result.mjs';

function whenNot(...args) {
    if (args.length === 2) {
        const [predicate, theFunction] = args;
        return (input) => whenNot(input, predicate, theFunction);
    }
    const [input, predicate, theFunction] = args;
    if (!isResult(input) && !predicate(input)) {
        return result(theFunction(input));
    }
    return input;
}

export { whenNot };
