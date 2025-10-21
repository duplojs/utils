import { isResult, result } from './result.mjs';

function when(...args) {
    if (args.length === 2) {
        const [predicate, theFunction] = args;
        return (input) => when(input, predicate, theFunction);
    }
    const [input, predicate, theFunction] = args;
    if (!isResult(input) && predicate(input)) {
        return result(theFunction(input));
    }
    return input;
}

export { when };
