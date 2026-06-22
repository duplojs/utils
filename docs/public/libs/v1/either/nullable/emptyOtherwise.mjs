import { nullable } from './create.mjs';
import { isNullableEmpty } from './empty.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

function whenIsNullableEmptyOtherwise(...args) {
    if (args.length === 2) {
        const [theFunction, otherwiseFunction] = args;
        return (input) => whenIsNullableEmptyOtherwise(input, theFunction, otherwiseFunction);
    }
    const [input, theFunction, otherwiseFunction] = args;
    const either = isRight(input) || isLeft(input) ? input : nullable(input);
    return isNullableEmpty(either)
        ? theFunction(unwrap(either))
        : otherwiseFunction(input);
}

export { whenIsNullableEmptyOtherwise };
