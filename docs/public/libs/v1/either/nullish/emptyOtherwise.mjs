import { nullish } from './create.mjs';
import { isNullishEmpty } from './empty.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsNullishEmptyOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsNullishEmptyOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = isRight(input) || isLeft(input) ? input : nullish(input);
    return isNullishEmpty(either)
        ? theFunction(unwrap(either))
        : otherwiseFunction(input);
}

export { whenIsNullishEmptyOtherwise };
