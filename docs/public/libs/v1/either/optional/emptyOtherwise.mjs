import { optional } from './create.mjs';
import { isOptionalEmpty } from './empty.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';

function whenIsOptionalEmptyOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsOptionalEmptyOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = isRight(input) || isLeft(input) ? input : optional(input);
    return isOptionalEmpty(either)
        ? theFunction(undefined)
        : otherwiseFunction(input);
}

export { whenIsOptionalEmptyOtherwise };
