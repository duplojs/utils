import { nullable } from './create.mjs';
import { isNullableFilled } from './filled.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsNullableFilledOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsNullableFilledOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = isRight(input) || isLeft(input) ? input : nullable(input);
    return isNullableFilled(either)
        ? theFunction(unwrap(either))
        : otherwiseFunction(input);
}

export { whenIsNullableFilledOtherwise };
