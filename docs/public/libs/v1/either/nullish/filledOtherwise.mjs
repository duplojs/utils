import { nullish } from './create.mjs';
import { isNullishFilled } from './filled.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsNullishFilledOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsNullishFilledOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = isRight(input) || isLeft(input) ? input : nullish(input);
    return isNullishFilled(either)
        ? theFunction(unwrap(either))
        : otherwiseFunction(input);
}

export { whenIsNullishFilledOtherwise };
