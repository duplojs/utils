import { optional } from './create.mjs';
import { isOptionalFilled } from './filled.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsOptionalFilledOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsOptionalFilledOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = isRight(input) || isLeft(input) ? input : optional(input);
    return isOptionalFilled(either)
        ? theFunction(unwrap(either))
        : otherwiseFunction(input);
}

export { whenIsOptionalFilledOtherwise };
