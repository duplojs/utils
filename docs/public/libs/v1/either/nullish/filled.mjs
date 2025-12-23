import { nullish } from './create.mjs';
import { createEitherKind } from '../kind.mjs';
import { eitherNullishKind } from './base.mjs';
import { right } from '../right/create.mjs';
import { isRight } from '../right/is.mjs';
import { isLeft } from '../left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';

const eitherNullishFilledKind = createEitherKind("nullish-filled");
function nullishFilled(value) {
    return eitherNullishKind.setTo(eitherNullishFilledKind.setTo(right("nullish", value)));
}
function isNullishFilled(input) {
    return isRight(input)
        && eitherNullishKind.has(input)
        && eitherNullishKind.has(input);
}
function whenIsNullishFilled(...args) {
    if (args.length === 1) {
        const [theFunction] = args;
        return (input) => whenIsNullishFilled(input, theFunction);
    }
    const [input, theFunction] = args;
    if (isLeft(input)) {
        return input;
    }
    else if (!isNullishFilled(input) && isRight(input)) {
        return input;
    }
    const either = isRight(input) || isLeft(input)
        ? input
        : nullish(input);
    if (isNullishFilled(either)) {
        return theFunction(unwrap(either));
    }
    return either;
}

export { eitherNullishFilledKind, isNullishFilled, nullishFilled, whenIsNullishFilled };
